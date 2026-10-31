#!/usr/bin/env bash
# Copie css/ d'une version taguée de selixy-design dans le dossier CSS d'un projet, et js/ dans son dossier JS s'il est donné.
# Usage : copy-to.sh <tag> <dossier-css> [dossier-js]
set -euo pipefail

tag=${1:?tag manquant, par exemple v0.1.0}
dest=${2:?dossier de destination manquant}
dest_js=${3:-}
depot="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

commit=$(git -C "$depot" rev-parse "$tag^{commit}")
mkdir -p "$dest"
git -C "$depot" archive "$commit" css | tar -x -C "$dest" --strip-components=1
if [ -n "$dest_js" ]; then mkdir -p "$dest_js" && git -C "$depot" archive "$commit" js | tar -x -C "$dest_js" --strip-components=1; fi
printf 'selixy-design %s (%s)\nNe pas modifier : changer selixy-design, taguer, recopier.\n' "$tag" "$commit" > "$dest/SELIXY-DESIGN"
echo "selixy-design $tag copié dans $dest"
