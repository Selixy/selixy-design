# selixy-design

Classes d'éléments d'interface communes aux projets Selixy (Miraxy en premier, puis le portfolio, SelixyCARD, cowlock…),
extraites de Miraxy (`ui/css/`) et alignées sur la palette du portfolio selixy.dev. CSS pur (deux scripts facultatifs, `js/select.js` et `js/menus.js`), aucune dépendance, aucun build.
La vitrine, https://design.selixy.dev (Présentation et page Classes), vit dans un dépôt à part, privé, imbriqué
ici dans `showcase/` et ignoré par `.gitignore`. Un projet copie `css/` (et `js/` s'il en a besoin) par
`tools/copy-to.sh`.

## Conventions

- **Noms en anglais**, comme le code des projets : fichiers, classes, jetons. Documentation et commentaires en français.
- **Noms de Miraxy** pour l'en-tête, le burger et les panneaux (`.header-tabs`, `.burger-menu`, `.panel-list`), repris
  tels quels pour que Miraxy s'y branche sans renommage ; ailleurs, BEM (`.button--primary`, `.popup__sheet`).
- **Pas d'utilitaires** (`.flex`, `.gap-4`…) : la bibliothèque décrit des éléments, la mise en page propre à une page reste
  dans le projet. Les seules primitives de disposition sont `.stack`, `.row` et `.grid`.
- **Les jetons portent les valeurs** : une classe utilise `var(--…)`, jamais une couleur en dur.

- **Panneaux à plat** : tout ce qui flotte (menus déroulants, `.panel`, `.popup__sheet`, sélecteurs) est sans ombre, sans
  bordure, à angles vifs, à fond `--panel-bg` = voile de `--panel-shift` (5 % de blanc en sombre, 5 % de noir en clair) posé sur ce qu'il y a dessous, et flou `--panel-backdrop`. Ne jamais y remettre
  `box-shadow` ni `border` ; `--shadow-1..3` valent `none`. La séparation vient du flou et du survol (`--bg-2`).

## Statut

Validés avec l'utilisatrice (2026-10-30) : verre (`glass.css`), panneaux, en-tête et burger, lecteur, cartes, jetons, champs.
Boutons refaits puis validés (principal = `--primary`).
Composants et dispositions refaits sur les mêmes règles (verre plat, coins à peine arrondis, texte --text-h, sans bord ni ombre).

## Fichiers, dans l'ordre de chargement

- `css/tokens.css` : couleurs, ombres, polices (`--sans`, `--display`, `--mono`), rayons, transitions, espacements. Une seule
  couleur d'accent, le reste en neutres. Élévations : `--shadow-1` lecture, `--shadow-2` cliquable, `--shadow-3` survol.
  **Thème** : il suit `prefers-color-scheme` sans JavaScript ; un projet qui propose une bascule pose
  `html[data-theme="light"|"dark"]`, qui l'emporte sur le système.
- `css/base.css` : remise à zéro, `.form-card` (carte de formulaire, en verre), `.field` (enveloppe libellé + saisie) et `.field__input`
  (saisie seule, invalide via `aria-invalid="true"`), `.hint`, `.error`.
- `js/menus.js` : facultatif, anime la fermeture des `<details>` de menu (`.burger`, `.panel-group`) : au clic sur un menu
  ouvert, il pose `.is-closing`, laisse jouer `panel-retract`, puis referme ; sous 900 px, il anime la hauteur du groupe déplié
  en place, ouverture et fermeture. Sans lui, l'ouverture reste animée et la fermeture
  est instantanée.
- `js/menus.js` ferme aussi, règle générale, tout menu contextuel ouvert (`.burger`, `.panel-group` flottant, `.chat__react`,
  liste de `.select`) sur Échap (le plus imbriqué d'abord, le focus revient sur son bouton) ou sur un clic n'importe où
  ailleurs. Un `.panel-group` déplié en accordéon (position statique) n'est pas contextuel : il se ferme avec son parent.
- `js/glass.js` : facultatif. Détecte la couleur juste sous chaque surface de verre (ce que montre `elementsFromPoint` en
  son centre, recomposé avec les fonds et voiles de ses ancêtres) et la pose dans `--glass-under` ; recalcule au chargement,
  au défilement, à l'ouverture d'un menu, au changement de thème et quand le DOM change. Sans lui, la couche du dessous prend
  la couleur de la page (`--bg-0`).
- `js/select.js` : facultatif. Il remplace chaque `<div class="select"><select>…</select></div>`
  par un `.select__value` (champ de verre) et une liste `.glass.panel-list` (`role="listbox"`, option choisie `aria-selected`),
  identique dans tous les navigateurs. Le `select` reste dans la page, masqué : il porte la valeur et émet `change`. Clavier :
  flèches, Début/Fin, Entrée, Échap, Tab ; un clic ailleurs ferme. Sans le script, le `select` natif s'affiche. Le reste de
  la bibliothèque reste du CSS pur. `tools/copy-to.sh <tag> <dossier-css> [dossier-js]` copie aussi `js/`.
- `css/select.css` : `.field select`, même champ de verre que `.field input`, flèche `--field-chevron` (jeton par thème) ;
  liste ouverte en verre là où `appearance: base-select` existe (Chrome récent), liste du système ailleurs (Firefox).
- `css/typography.css` : bloc `.text` ; tailles `--display-lg`, `--display`, `--heading`, `--eyebrow`, `--body-lg`, `--body`,
  `--body-sm`, `--caption`, `--micro`, `--mono` ; tonalités `--strong`, `--soft`, `--dim`, `--accent`.
- `css/header.css` : en-tête de Miraxy (`.header`, `.header-start`, `.header-brand` + `.header-logo` / `.header-title`,
  `.header-tabs`, `.header-account`, `.tab`). Logo changé par `--header-logo: url(...)`. Sous 900 px, onglets masqués et
  marque centrée.
- `css/burger.css` : burger de Miraxy, trois barres plates qui deviennent une croix (`.burger`, `.burger-icon`,
  `.burger-bar--1..3`, `.burger-menu`, `.burger-menu--docked` collé sous l'en-tête à gauche de l'écran, toute la largeur sous 900 px) ; visible sous 900 px, `.burger--desktop` le garde au-delà.
- `css/glass.css` : couche du dessous, règle générale : toute surface de verre (`.glass`, `.form-card`, `.header`, `.card`,
  `.surface`, `.panel`, étiquettes, `.link-card`, `.floating-button`, `.popup__sheet`, actions et barre d'écriture du chat)
  met en première couche de son fond `var(--_under)` (les boutons aussi) : la couleur de ce qu'il y a dessous (`--glass-under`) à `--glass-fill`
  (50 %), au-dessus du voile. Les champs, les bandeaux d'état et le lecteur n'en ont pas.
- `css/glass.css` : `.glass`, le verre de base ; un `.glass` positionné qui contient un `.panel-group` porte son verre sur
  `::before`, pour que le sous-menu qui en dépasse floute bien ce qu'il y a derrière. Le verre de base : voile de `--glass-shift` (7 %) de `--glass-tint` et flou `--glass-blur`,
 , surchargeables sur l'élément ou un ancêtre.
- `css/panel.css` (suite) : `.panel-group`, une liste dans une liste (`<details class="panel-group"><summary>…</summary>
  <ul class="panel-list">…</ul></details>` dans un item) : sous 900 px il se déplie en place, en retrait ; au-delà, sous-menu de
  verre à droite ; un groupe qui contient l'élément courant prend l'accent. Ouverture au clic, sans JavaScript.
- `css/panel.css` : `.panel` (coins à `--corner` par défaut ; coins arrondis un par un par `--round-tl/-tr/-br/-bl` ou `--round`, au rayon global `--panel-radius` ; `--sharp*` les remet vifs) et `.panel-list` (`.panel-label`,
  `.panel-separator`), pour le menu du burger et les menus déroulants.
- `css/underline.css` : `.underline-fade` (onglet courant), `.underline-fade-v`.
- `css/card.css` : la carte (`.card`) : verre par défaut, `__cover` (`--image` avec `--card-image`), `__video` (`.is-playing`),
  `__panel` + `.panel`, `__eyebrow`, `__title`, `__lead`, `__tags` / `__tag`, coins `.card--round-tl/-tr/-br/-bl` au rayon
  `--card-radius`. Hauteur selon le contenu ; l'organisation des cartes (grille, galerie, défilement calé) appartient au projet.
- `css/button.css` : le bouton (`.button`), forme de verre plate : voile `--glass-tint` à `--glass-shift`, flou, texte
  `--text-h`, 40 px de haut, coins à `--corner` réglables un par un (`--button-radius-*`, `.button--round-*`, `.button--round`),
  icône facultative `.button__icon`. Variantes : `--primary` (action principale, texte en accent), `--danger`, `--subtle`, `--s`, `--l`, `--icon`, `--block` ; états `:disabled`, `[aria-busy]`.
- `css/player.css`, `css/player-controls.css` : le lecteur vidéo de SelixyWatch, repris tel quel (rendu et valeurs identiques,
  noms en anglais). `.player` (cadre 16/9, `__media`, `__top` + `__title`, `__name`, `__play`, `__indicator` + `.is-visible`,
  `__poster`), `__controls` (`__bar` + `.is-dragging`, `__track`, `__fill` réglé par `--player-position`, `__row`, `__spacer`,
  `__island`, `__island--time`, `__button`, `__time`, `__volume`, `__preview` + `-image` / `-time`, `__full-only`). États posés par
  le projet : `--empty`, `--audio`, `--idle`, `--stopped`, `--light`, `--full`. Jetons : `--player-accent`, `--player-veil`,
  `--player-radius`, `--player-fill`, `--player-fill-end`, `--player-max-height`. Formes plates : voile et `--glass-blur`, sans bord, reflet ni ombre.
  Le comportement (repos, choix clair/foncé selon l'image, glisser) reste au projet. Boutons de base : lecture, son, plein
  écran ; un projet en ajoute un en posant un `<button class="player__button">` de plus dans un `.player__island`.
- `css/layout.css` : dispositions intrinsèques, écarts tirés de l'échelle `--space-0..5` (4 à 64 px) : `.container`
  (`--container-width`), `.stack`, `.cluster`, `.grid` (`--grid-min`), `.sidebar` (`__main`, `__side`, `--sidebar-width`) ;
  `--s`, `--l` ou `--gap` pour l'écart. Elles s'adaptent sans media query.
- `css/surface.css` : `.surface` (bloc de verre, `--clickable`) et `.empty`.
- `css/switch.css` : `.switch`, interrupteur rond, piste en pilule (éteint : voile 15 %, allumé : accent).
- `css/labels.css` : `.pill` (compte, en accent), `.tag` (`--mono`), `.badge` + `.badge__dot`, en verre.
- `css/banner.css` : `.banner` (`--error`, `--warning`, `--neutral`), voile teinté de la couleur d'état, sans trait.
- `css/link.css` : `.link-card` + `.icon-pill`, `.floating-button` (`--back`), en verre.
- `css/chat.css` : `.chat`, un fil à la manière de Discord, sans bulles (`__messages`, `__message`, `--mine`, `__avatar`,
  `__head`, `__author`, `__time`, `__text`) ; un message qui suit le même auteur (`--follow`) n'a ni avatar ni nom, son heure
  apparaît au survol dans la marge (`__gutter`) ; au survol la ligne se surligne. Séparateurs : `__divider` (date), `__notice`.
  Sans fond propre (on le pose dans un `.glass` ou un `.panel`) ; jeton `--chat-avatar` (40 px). Réagir : `__actions` (un seul
  petit bloc de verre, en haut à droite, au survol, au clavier ou `.is-active`), `<details class="chat__react">` + `__picker` (palette
  d'émojis, rétraction avec `js/menus.js`), `__reactions` + `__reaction` (`--mine`). Répondre : `__quote`, placée avant
  l'avatar, que relie une ligne courbe ; `__replying` se place dans la barre d'écriture, en première ligne. Médias : `__media` (`--grid`),
  `__file` + `__file-name`. Écriture : `__compose`, une barre de verre qui flotte sur le bas du fil (les messages défilent dessous ; le fil réserve
  sa hauteur en bas, plus grande avec `__replying`) (joindre, `.field__input`, émoji, envoyer).
  Les blocs d'un message (citation, avatar, en-tête, texte, médias, réactions, actions) en sont les enfants directs : la grille
  place l'avatar en colonne 1 et le reste en colonne 2. La palette s'ouvre dans le fil qui défile : elle peut demander de défiler.
- `css/popup.css` : `.popup` + `__sheet` + `__action` (`--cancel`) ; derrière, voile de verre et flou, jamais de gris.

## Versions

- `v0.1.0` (2026-10-31) : nouvelle numérotation, la bibliothèque n'a pas encore de version majeure. Contenu de l'ancienne
  v8.10.4 ; versions et journal d'avant : `HISTORIQUE.md`.
