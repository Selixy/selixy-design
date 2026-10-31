#!/usr/bin/env bash
set -euo pipefail

tag=${1:?tag manquant, par exemple v0.2}
dest=${2:?dossier de destination manquant}
depot="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

commit=$(git -C "$depot" rev-parse "$tag^{commit}")
mkdir -p "$dest"
git -C "$depot" archive "$commit" modules | tar -x -C "$dest" --strip-components=1
printf 'selixy-design %s (%s)\nNe pas modifier : changer selixy-design, taguer, recopier.\n' "$tag" "$commit" > "$dest/SELIXY-DESIGN"
echo "selixy-design $tag copié dans $dest"
