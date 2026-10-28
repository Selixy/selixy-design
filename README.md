# selixy-design

Classes d'éléments d'interface communes à mes projets (Miraxy en premier, puis mon portfolio),
extraites de Miraxy (`ui/css/`) et alignées sur la palette du portfolio selixy.dev. CSS pur, aucune dépendance, aucun build.
`demo.html` montre chaque composant.

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

## Fichiers, dans l'ordre de chargement

- `css/tokens.css` : couleurs, ombres, polices (`--sans`, `--display`, `--mono`), rayons, transitions, espacements. Une seule
  couleur d'accent, le reste en neutres. Élévations : `--shadow-1` lecture, `--shadow-2` cliquable, `--shadow-3` survol.
  **Thème** : il suit `prefers-color-scheme` sans JavaScript ; un projet qui propose une bascule pose
  `html[data-theme="light"|"dark"]`, qui l'emporte sur le système.
- `css/base.css` : remise à zéro, `.card` (carte de formulaire), `.field` (enveloppe libellé + saisie) et `.field__input`
  (saisie seule, invalide via `aria-invalid="true"`), `.hint`, `.error`.
- `css/typography.css` : bloc `.text` ; tailles `--display-lg`, `--display`, `--heading`, `--eyebrow`, `--body-lg`, `--body`,
  `--body-sm`, `--caption`, `--micro`, `--mono` ; tonalités `--strong`, `--soft`, `--dim`, `--accent`.
- `css/header.css` : en-tête de Miraxy (`.header`, `.header-start`, `.header-brand` + `.header-logo` / `.header-title`,
  `.header-tabs`, `.header-account`, `.tab`). Logo changé par `--header-logo: url(...)`. Sous 900 px, onglets masqués et
  marque centrée.
- `css/burger.css` : burger de Miraxy, trois barres plates qui deviennent une croix (`.burger`, `.burger-icon`,
  `.burger-bar--1..3`, `.burger-menu`, `.burger-menu--docked` collé sous l'en-tête à gauche de l'écran) ; visible sous 900 px, `.burger--desktop` le garde au-delà.
- `css/panel.css` : `.panel` (angles vifs ; coins arrondis un par un par `--round-tl/-tr/-br/-bl` ou `--round`, au rayon global `--panel-radius` ; `--sharp*` les remet vifs) et `.panel-list` (`.panel-item`, `.panel-label`,
  `.panel-separator`), pour le menu du burger et les menus déroulants.
- `css/underline.css` : `.underline-fade` (onglet courant), `.underline-fade-v`.
- `css/project-card.css` : card de projet, nommée `project-card` car `.card` est déjà la carte de formulaire de `base.css` (`.project-card`, `__cover[--image]`, `__video` (dans la couverture, visible avec `.is-playing`, lecture pilotée par le projet), `__panel` + `.panel` (toute la largeur de la card, en bas, hauteur du contenu, angles vifs), `__eyebrow/__title/__lead/__tags` (+ `__tag`), `__more` pour la partie qui se déploie, `__kind`), `.project-card--feature`, coins de la card pilotables comme ceux du panneau : angles vifs par défaut, `.project-card--round-tl/-tr/-br/-bl` ou les variables `--card-radius-tl/-tr/-br/-bl` (le projet décide quand arrondir), au rayon `--card-radius`, et `.project-cards--gallery` : galerie en colonnes inégales où chaque card se place par `--card-col`, `--card-row`, `--card-span` (rangées de `--cards-row`). Mobile : une card par écran, calée au défilement ; bureau : le panneau se déploie au survol. Jetons : `--card-height`, `--card-radius`, `--card-hover-scale`, `--cards-columns`, `--cards-row`, `--cards-gap` ; `--card-tint` règle la teinte de la couverture sans image, `--card-image` fournit l'image.
- `css/button.css` : le bouton (`.button` : libellé de verre `__label` + pastille carrée `__chip` qui porte l'icône `__icon`), variantes `--primary --secondary --danger --subtle --s --l --icon --block --chip-start`, états `:hover :active :focus-visible :disabled [aria-busy="true"]`. Angles vifs sauf le coin bas-droit (`--button-radius-br` = `--button-radius`) ; chaque coin se pilote par `--button-radius-tl/-tr/-br/-bl`, `.button--round`, `.button--round-*`, `.button--sharp`. Sans `__label` ni `__chip`, le texte seul suffit et le primary devient plein accent. Jetons : `--button-height/-s/-l`, `--button-radius`, `--button-pad`, `--button-veil` (voile qui garde le verre lisible sur fond clair), `--button-shift`, `--button-shift-hover`, `--button-grow`, `--danger`, `--on-danger`.
- `css/components.css` : `.surface` (`--clickable`), `.grid` (`--grid-min`), `.stack`, `.row`, `.switch`, `.pill`, `.empty`, `.tag` (`--mono`), `.badge` + `.badge__dot`, `.link-card` + `.icon-pill`,
  `.floating-button` (`--back`), `.popup` + `.popup__sheet` + `.popup__action` (`--cancel`).

## Utilisation dans un projet

Chaque projet copie `css/` à une version épinglée (tag git) et ne modifie jamais la copie : on modifie ici, on tague,
on recopie.

    ~/Documents/selixy-design/tools/copy-to.sh v2.1.1 <dossier-css-du-projet>

Le script écrit aussi `<dossier>/SELIXY-DESIGN` avec le tag et le commit d'origine.

## Versions

- `v2.2.7` : en-tête sur iOS : le fond `--bg-0` passe de 50 % à **1 %**. Safari 26 colore la barre d'état avec ce fond léger et le verre reste presque intact (1 % testé sur iPhone).
- `v2.2.6` : en-tête sur iOS : fond `--bg-0` à 50 % sur l'en-tête lui-même et fond de `html` : Safari 26 peint la barre d'état avec cette couleur, le verre (flou du `::before`) est conservé. Validé sur iPhone. Les essais précédents (bande débordante, liseré de 4 px, `pointer-events: none`) sont abandonnés.
- `v2.2.5` : essai `pointer-events: none` sur l'en-tête (inefficace).
- `v2.2.4` : essai d'un fond semi-transparent sur l'en-tête (retiré : il atténuait le verre).
- `v2.2.3` : essai d'un liseré fixe de 4 px (inefficace).
- `v2.2.2` : essai d'un fond opaque sur l'en-tête (retiré en v2.2.3 : plus de verre).
- `v2.2.0` : la zone sûre du haut (`env(safe-area-inset-top)`) s'ajoute à la hauteur de l'en-tête.
- `v2.1.1` : le verre de l'en-tête passe sur `.header::before` : porté par l'en-tête, il empêchait le flou des menus du burger (un élément à `backdrop-filter` est la racine de fond de ses descendants).
- `v2.1.0` : retour au verre dans les composants : `.field__input` / `.field input` en verre translucide (voile `--field-shift`, plus marqué au focus, barre d'accent `--field-bar` à gauche, plus de bordure), nouveau `.banner` (verre teinté par état : `--error`, `--warning`, `--neutral`), voile du bouton réduit à 55 % (`--button-veil`), `.button__sub` (sous-libellé mono). Jetons `--field-*`, `--banner-shift`.
- `v2.0.0` : **changement incompatible** : le bouton est refait (`button.css`, verre + pastille d'action, coin bas-droit arrondi). `.button` quitte `base.css`, `.button--subtle` et `.button--danger` quittent `components.css` ; jetons `--button-*`, `--danger`, `--on-danger` ajoutés. Un bouton en texte seul reste valide (le primary devient plein accent).
- `v1.9.0` : `project-card.css` (avec `__video`, coins pilotables), la card de projet (couverture + panneau de verre) et la galerie `.project-cards--gallery`.
- `v1.8.0` : le verre dépoli se pilote par quatre paramètres, surchargeables sur n'importe quel élément ou ancêtre : `--panel-shift` / `--panel-blur` (panneaux, 5 % et 14 px) et `--header-shift` / `--header-blur` (en-tête, 7 % et 28 px) ; `--glass-tint` (noir en clair, blanc en sombre) donne le sens du voile. Les jetons `--panel-bg`, `--panel-backdrop`, `--header-bg` et `--header-backdrop` disparaissent.
- `v1.7.0` : fond de l'en-tête sur le principe du panneau, en plus marqué : voile `--header-shift` (7 % de noir en clair, 7 % de blanc en sombre) sur ce qu'il y a dessous et flou `--header-backdrop` de 28 px.
- `v1.6.0` : coins du panneau pilotables (`.panel--round-*`, rayon global `--panel-radius: 16px`), angles vifs par défaut ; `.burger-menu--docked` ; jeton `--header-height`.
- `v1.5.0` : la couleur du panneau est celle de ce qu'il y a dessous, éclaircie de `--panel-shift` en thème sombre et assombrie en thème clair (voile blanc ou noir), plus de `brightness`/`saturate`.
- `v1.4.0` : panneaux plus clairs que la page : jetons `--panel-bg` et `--panel-backdrop` (flou, éclaircissement et saturation de l'arrière-plan, donc dynamiques).
- `v1.3.0` : panneaux et popups à 50 % d'opacité avec flou d'arrière-plan `blur(12px)`.
- `v1.2.0` : panneaux et popups sans bordure (fond translucide à 70 %), règle « panneaux à plat » inscrite dans les conventions.
- `v1.1.1` : panneaux et popups à angles vifs, fond translucide 60 %, bordure à 45 % du texte.
- `v1.1.0` : tout à plat, sans ombre ni flou : `--shadow-1..3` valent `none`, `.panel` et `.popup__sheet` plats : angles vifs, fond translucide (60 %), bordure marquée (45 % du texte), plus de `backdrop-filter`.
- `v1.0.0` : en-tête, burger et panneaux remplacés par ceux de Miraxy en production :
  burger à trois barres, marque, `.panel-list`, `.underline-fade`. L'ancien en-tête (`.header__tabs`, burger rond en bas
  à droite) disparaît.
- `v0.5.0` : variantes du burger `--top-left` et `--desktop` (burger de réglages en haut à gauche, sur tous les écrans).
- `v0.4.0` : en-tête pour un site à sections : onglet courant aussi par `aria-current="true"`, `.burger__button`
  (bouton générique, `.burger__logout` en reste un alias), `.burger__heading` (intertitre de groupe), liste du burger
  limitée à la hauteur de l'écran et défilante.
- `v0.3.0` : éléments repris de SelixyUI (l'ancienne bibliothèque du portfolio) dans les jetons et la convention d'ici :
  typographie, tag, badge, carte-lien, bouton flottant, fenêtre surgissante, `.field__input`. Bascule de thème par
  `data-theme`. Nouveaux jetons : `--display`, `--mono`, `--radius-sm/-lg/-full`, `--transition-fast`, `--transition`,
  `--transition-slow`. `.button` passe en `inline-flex` (icône + libellé).
  Correspondance depuis SelixyUI : `.btn-primary` → `.button.button--primary`, `.btn-floating(-back)` →
  `.floating-button(--back)`, `.text-X` → `.text.text--X`, `.text-fg` → `--strong`, `.text-fg-soft` → `--soft`,
  `.text-fg-muted/-faint` → `--dim`, `.tag-tech` → `.tag.tag--mono`, `.badge-availability`/`.badge-pulse-dot` →
  `.badge`/`.badge__dot`, `.card-link` → `.link-card`, `.popup-backdrop/-sheet/-action` → `.popup`/`__sheet`/`__action`,
  `.field` (saisie) → `.field__input`, `.has-error` → `aria-invalid="true"`, `.field-error-msg` → `.error`.
- `v0.2.0` : noms en anglais et BEM. Renommages depuis v0.1.0 :
  - fichiers : `jetons/entete/composants.css` → `tokens/header/components.css` ;
  - jetons : `--border-fort` → `--border-strong`, `--accent-fort` → `--accent-strong`, `--alerte` → `--warning`,
    `--ombre-N` → `--shadow-N`, `--grille-min` → `--grid-min` ;
  - classes : `.header-tabs/-account` → `.header__tabs/__account`, `.burger-*` → `.burger__*`, `.grille` → `.grid`,
    `.pile` → `.stack`, `.rangee` → `.row`, `.surface--cliquable` → `.surface--clickable`,
    `.button--discret` → `.button--subtle`, `.interrupteur` → `.switch`, `.pastille` → `.pill`, `.vide` → `.empty`.
- `v0.1.0` : extraction depuis Miraxy.

## Licence

MIT. Voir `LICENSE`.
