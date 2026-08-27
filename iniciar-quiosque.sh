#!/bin/bash
DIR="$(cd "$(dirname "$0")" && pwd)"
FILE="$DIR/index.html"
if command -v chromium >/dev/null 2>&1; then
  BROWSER="chromium"
elif command -v chromium-browser >/dev/null 2>&1; then
  BROWSER="chromium-browser"
elif command -v google-chrome >/dev/null 2>&1; then
  BROWSER="google-chrome"
else
  echo "Chromium/Chrome não encontrado."
  exit 1
fi
"$BROWSER" --kiosk --disable-session-crashed-bubble --noerrdialogs --disable-infobars "file://$FILE"
