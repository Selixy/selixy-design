# badge

Fichiers : `badge.css`.

## Rôle

- `.badge` + `.badge__dot` : un état vivant, un point d'accent qui pulse (immobile avec `prefers-reduced-motion`).

## Pourquoi

- Petite étiquette en verre, coins légèrement arrondis (`--corner`), sans bord, avec la couche du dessous (`var(--_under)`, voir `surfaces/glass`). Chaque étiquette porte sa propre copie de la forme commune : un module se copie seul.
