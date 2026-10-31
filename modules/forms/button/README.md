# button

Fichiers : `button.css`.

## Rôle

- le bouton (`.button`), forme de verre plate : voile `--glass-tint` à `--glass-shift`, flou, texte `--text-h`, 40 px de haut, coins à `--corner` réglables un par un (`--button-radius-*`, `.button--round-*`, `.button--round`), icône facultative `.button__icon`. Variantes : `--primary` (action principale, texte en accent), `--danger`, `--subtle`, `--s`, `--l`, `--icon`, `--block` ; états `:disabled`, `[aria-busy]`.

## Pourquoi

- Bouton : une forme de verre plate (voile --glass-tint à --glass-shift, flou --glass-blur), texte --text-h, coins légèrement arrondis par défaut (--corner) et réglables un par un (--button-radius-tl/-tr/-br/-bl, .button--round-*, .button--round, .button--sharp). Une icône facultative (.button__icon) se pose à côté du texte. Aucun relief : ni bord, ni ombre, ni reflet. <button class="button"><svg class="button__icon">…</svg>Envoyer</button> Principal : .button--primary, même verre, texte en accent. Non sélectionnable : :disabled ou aria-disabled, à 45 %.
