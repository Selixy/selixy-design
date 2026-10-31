# sidebar

Fichiers : `sidebar.css`.

## Rôle

- `.sidebar` : un contenu principal (`.sidebar__main`) et une colonne (`.sidebar__side`, `--sidebar-width`) qui passe dessous quand le principal descendrait sous la moitié de la largeur (écart `--space-3` ; `--s` : `--space-1`, `--l` : `--space-4`).

## Pourquoi

- Disposition intrinsèque : elle s'adapte seule à la place disponible, sans media query, et ses écarts viennent de l'échelle `--space-*` (4 à 64 px). `--gap` donne un autre écart ; `--s` et `--l` en donnent un plus petit ou plus grand.
