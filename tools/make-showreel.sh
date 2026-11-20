#!/bin/bash
# Tidecraft showreel: 6 atmospheric shots, slow Ken Burns zoom, crossfades,
# kinetic titles. 25s, 1280x720, no audio (autoplay muted loop on site).
set -e
cd ~/workspace/tidecraft/public
FONT=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf
FONT_S=/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf

declare -a IMGS=(tide-glass neon-rain desert-dune forest-mist paper-collage chrome-orb)
declare -a MAIN=("TIDECRAFT" "TWELVE TEMPLATES" "SIX MOODS" "EVERY PIXEL" "COPY. PASTE." "TIDECRAFT")
declare -a SUB=("websites that move like the tide" "each one a playable idea" "pick a feeling, not a layout" "prompts included, motion built in" "LAUNCH." "start free — tidecraft")

INPUTS=""
FILTER=""
for i in "${!IMGS[@]}"; do
  img="inspiration/${IMGS[$i]}.jpg"
  INPUTS="$INPUTS -i $img"
  esc_main=$(echo "${MAIN[$i]}" | sed "s/'/\\\\'/g")
  esc_sub=$(echo "${SUB[$i]}" | sed "s/'/\\\\'/g")
  FILTER="${FILTER}[${i}:v]scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,zoompan=z='1+0.12*on/150':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=150:s=1280x720:fps=30,drawtext=fontfile=$FONT:text='$esc_main':fontsize=64:fontcolor=white:borderw=2:bordercolor=black@0.45:x=(w-text_w)/2:y=(h-text_h)/2-30:enable='between(t,0.4,4.6)',drawtext=fontfile=$FONT_S:text='$esc_sub':fontsize=28:fontcolor=white:borderw=1:bordercolor=black@0.45:x=(w-text_w)/2:y=(h-text_h)/2+70:enable='between(t,0.6,4.6)'[v$i];"
done

CHAIN="[v0][v1]xfade=transition=fade:duration=1:offset=4[x1];[x1][v2]xfade=transition=fade:duration=1:offset=8[x2];[x2][v3]xfade=transition=fade:duration=1:offset=12[x3];[x3][v4]xfade=transition=fade:duration=1:offset=16[x4];[x4][v5]xfade=transition=fade:duration=1:offset=20,format=yuv420p[out]"
FILTER="${FILTER}${CHAIN}"

# shellcheck disable=SC2086
ffmpeg -y $INPUTS -filter_complex "$FILTER" -map "[out]" -c:v libx264 -crf 22 -preset fast -r 30 -movflags +faststart -an showreel.mp4
ffprobe -v error -show_entries format=duration,size -show_entries stream=width,height,r_frame_rate -of default=noprint_wrappers=1 showreel.mp4
