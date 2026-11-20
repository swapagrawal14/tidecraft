// Shared data contracts for Tidecraft.
// Data lives in ./data/templates.ts and ./data/library.ts.
// Pages import from "@/lib/data" only — never from the data files directly.

export type ShaderVariant = "aurora" | "liquid" | "ember" | "tide" | "mono";

export type TemplateCategory =
  | "Landing"
  | "Portfolio"
  | "Commerce"
  | "SaaS"
  | "Editorial"
  | "Experimental";

export interface TemplateItem {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: TemplateCategory;
  tags: string[];
  /** Three hex colours used for the card preview gradient. */
  palette: [string, string, string];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  /** The full rebuild prompt shown on the detail page. Original text only. */
  prompt: string;
  shader: ShaderVariant;
  featured?: boolean;
  /** Cinematic preview image (public/templates/<slug>.jpg), generated art. */
  image?: string;
}

export type LibraryKind = "component" | "shader" | "section" | "ui";

export interface LibraryItem {
  slug: string;
  name: string;
  kind: LibraryKind;
  tagline: string;
  description: string;
  /** The full rebuild prompt shown on the detail page / copy action. */
  prompt: string;
  shader?: ShaderVariant;
  /** Fallback gradient when no shader is used. */
  gradient?: [string, string];
  tags: string[];
}

export { templates } from "./data/templates";
export { components, shaders, sections, uiScreens } from "./data/library";
