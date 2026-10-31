# header

Fichiers : `header.css`.

## Rôle

- En-tête de Miraxy : `.header`, `.header-start` (burger, marque, onglets), `.header-brand` + `.header-logo` / `.header-title`, `.header-tabs`, `.header-account`. Logo changé par `--header-logo: url(...)`. Sous 900 px, onglets masqués et marque centrée ; au-delà, logo seul.

## Pourquoi

- Le verre est sur `::before` : un en-tête qui porterait lui-même `backdrop-filter` deviendrait la « racine de fond » de ses menus, et leur flou ne verrait plus la page (menus du burger, panneaux).
- Le logo est un masque teinté par `currentColor` : il suit la couleur du texte, en clair comme en sombre.
