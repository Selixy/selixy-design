# field

Fichiers : `field.css`.

## Rôle

- `.field` enveloppe libellé et saisie (`input`, `select`, `textarea`) ; `.field__input` habille une saisie seule, hors enveloppe ; `.hint` (aide, liens en accent), `.error` (message en `--warning`). Saisie invalide : `aria-invalid="true"`.

## Pourquoi

- La barre de gauche (`--_bar`, accent ou `--warning`) ne sert qu'aux erreurs, jamais au focus ni à la sélection : le focus renforce seulement le voile (`--field-focus-shift`).
- `.select__value` (le champ que pose `forms/select/select.js`) partage la forme des saisies : c'est le même champ de verre.
