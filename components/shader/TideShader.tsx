"use client";

import { useEffect, useRef, useState } from "react";

export type TideShaderVariant = "aurora" | "liquid" | "ember" | "tide" | "mono";

type TideShaderProps = {
  variant: TideShaderVariant;
  className?: string;
};

const MODE: Record<TideShaderVariant, number> = {
  aurora: 0,
  liquid: 1,
  ember: 2,
  tide: 3,
  mono: 4,
};

/** Static gradient shown when the user prefers reduced motion (or WebGL fails). */
const STATIC_GRADIENTS: Record<TideShaderVariant, string> = {
  aurora:
    "linear-gradient(135deg, #04060d 0%, #0a2e3f 34%, #1d4e6b 55%, #5b4a9e 78%, #04060d 100%)",
  liquid:
    "linear-gradient(160deg, #04060d 0%, #0b1c2e 40%, #33506b 62%, #5b7a99 80%, #04060d 100%)",
  ember:
    "linear-gradient(180deg, #04060d 0%, #2b130a 45%, #7c2d12 70%, #fbbf24 100%)",
  tide: "linear-gradient(120deg, #04060d 0%, #042f2e 38%, #0f766e 65%, #2dd4bf 100%)",
  mono: "linear-gradient(140deg, #04060d 0%, #111827 45%, #374151 70%, #0b1120 100%)",
};

const VERTEX_SHADER = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;

uniform vec2 u_res;
uniform float u_time;
uniform float u_mode;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p *= 2.03;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = uv;
  p.x *= u_res.x / u_res.y;
  float t = u_time;
  vec3 deep = vec3(0.016, 0.024, 0.051);
  vec3 col = deep;

  if (u_mode < 0.5) {
    /* aurora: drifting teal / blue / violet bands */
    float n = fbm(p * 1.6 + vec2(t * 0.05, t * 0.03));
    float band = fbm(p * vec2(1.2, 3.0) + vec2(0.0, -t * 0.08) + n);
    col = mix(deep, vec3(0.18, 0.83, 0.75), smoothstep(0.35, 0.75, band) * 0.8);
    col = mix(col, vec3(0.49, 0.83, 0.99), smoothstep(0.55, 0.90, fbm(p * 2.0 + vec2(t * 0.04, 0.0))) * 0.55);
    col = mix(col, vec3(0.65, 0.55, 0.98), smoothstep(0.60, 0.95, fbm(p * 1.4 + vec2(-t * 0.03, t * 0.02))) * 0.5);
  } else if (u_mode < 1.5) {
    /* liquid: slow, heavy silver-blue ripples */
    float ripple = sin((p.x * 3.0 + p.y * 2.0) + t * 0.25 + fbm(p * 2.0 + t * 0.02) * 4.0);
    float n = fbm(p * 1.8 + vec2(t * 0.02, -t * 0.015));
    col = mix(deep, vec3(0.05, 0.11, 0.18), smoothstep(0.25, 0.75, n));
    col = mix(col, vec3(0.49, 0.83, 0.99), smoothstep(0.55, 0.95, n + ripple * 0.12) * 0.45);
    col = mix(col, vec3(0.75, 0.82, 0.88), smoothstep(0.75, 0.98, ripple * 0.5 + 0.5) * 0.22);
  } else if (u_mode < 2.5) {
    /* ember: warm rising glow */
    float rise = fbm(p * vec2(1.8, 1.2) + vec2(t * 0.02, t * 0.10));
    float glow = fbm(p * 2.4 + vec2(0.0, t * 0.16));
    col = mix(deep, vec3(0.17, 0.07, 0.04), smoothstep(0.30, 0.70, rise));
    col = mix(col, vec3(0.98, 0.44, 0.14), smoothstep(0.55, 0.90, glow) * 0.55);
    col = mix(col, vec3(0.98, 0.75, 0.14), smoothstep(0.70, 0.98, rise * glow) * 0.45);
    col *= 1.0 - 0.35 * uv.y;
  } else if (u_mode < 3.5) {
    /* tide: gentle teal waves */
    float w1 = sin(p.x * 2.4 + t * 0.35 + fbm(p * 1.5) * 2.0);
    float w2 = sin((p.x + p.y) * 3.2 - t * 0.22);
    float n = fbm(p * 2.0 + vec2(t * 0.03, t * 0.02));
    col = mix(deep, vec3(0.02, 0.18, 0.18), smoothstep(0.30, 0.70, n));
    col = mix(col, vec3(0.18, 0.83, 0.75), smoothstep(0.45, 0.90, n + w1 * 0.15) * 0.55);
    col = mix(col, vec3(0.49, 0.83, 0.99), smoothstep(0.60, 0.95, n + w2 * 0.12) * 0.30);
  } else {
    /* mono: subtle grey drift */
    float n = fbm(p * 1.6 + vec2(t * 0.02, t * 0.015));
    col = mix(vec3(0.016, 0.024, 0.051), vec3(0.11, 0.13, 0.17), smoothstep(0.30, 0.75, n) * 0.8);
    col = mix(col, vec3(0.23, 0.26, 0.32), smoothstep(0.65, 0.95, fbm(p * 2.2 - t * 0.01)) * 0.25);
  }

  /* soft vignette + tiny dither to hide banding */
  float vig = smoothstep(1.25, 0.35, distance(uv, vec2(0.5)));
  col *= 0.82 + 0.18 * vig;
  col += (hash(gl_FragCoord.xy) - 0.5) * 0.02;

  gl_FragColor = vec4(col, 1.0);
}
`;

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function TideShader({ variant, className }: TideShaderProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState<boolean>(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
    });
    if (!gl) {
      setWebglFailed(true);
      return;
    }

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) {
      setWebglFailed(true);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      setWebglFailed(true);
      return;
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setWebglFailed(true);
      return;
    }
    gl.useProgram(program);

    // Fullscreen triangle.
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const posLoc = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, "u_time");
    const resLoc = gl.getUniformLocation(program, "u_res");
    const modeLoc = gl.getUniformLocation(program, "u_mode");
    gl.uniform1f(modeLoc, MODE[variant]);

    let rafId = 0;
    let running = false;
    let visible = true;
    let elapsed = 0;
    let last = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.floor(wrapper.clientWidth * dpr));
      const height = Math.max(1, Math.floor(wrapper.clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    const frame = (now: number) => {
      if (!running) return;
      const delta = Math.min((now - last) / 1000, 0.1);
      last = now;
      elapsed += delta;
      gl.uniform1f(timeLoc, elapsed);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      rafId = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = performance.now();
      resize();
      rafId = requestAnimationFrame(frame);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(wrapper);

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
        if (visible) start();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(wrapper);

    start();

    return () => {
      stop();
      io.disconnect();
      resizeObserver.disconnect();
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      const loseExt = gl.getExtension("WEBGL_lose_context");
      loseExt?.loseContext();
    };
    // Re-create the GL pipeline only when the variant changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant, reducedMotion]);

  if (reducedMotion || webglFailed) {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${className ?? ""}`}
        style={{ background: STATIC_GRADIENTS[variant] }}
      />
    );
  }

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
