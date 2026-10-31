# cluster

Fichiers : `cluster.css`.

## Rôle

- `.cluster` : éléments côte à côte qui passent à la ligne (écart `--space-1` ; `--s` : `--space-0`, `--l` : `--space-2`).

## Pourquoi

- Disposition intrinsèque : elle s'adapte seule à la place disponible, sans media query, et ses écarts viennent de l'échelle `--space-*` (4 à 64 px). `--gap` donne un autre écart ; `--s` et `--l` en donnent un plus petit ou plus grand.
