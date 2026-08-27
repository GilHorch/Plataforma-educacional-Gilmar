#!/bin/bash
DIR="$(cd "$(dirname "$0")" && pwd)"
FILE="$DIR/index.html"
if ! command -v firefox >/dev/null 2>&1; then
  echo "Firefox não encontrado."
  exit 1
fi
firefox --kiosk "file://$FILE"
