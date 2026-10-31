# selixy-design

Classes d'éléments d'interface communes aux projets Selixy (Miraxy en premier, puis le portfolio, SelixyCARD, cowlock…),
extraites de Miraxy (`ui/css/`) et alignées sur la palette du portfolio selixy.dev. CSS pur (trois scripts facultatifs), aucune dépendance, aucun build.
La vitrine, https://design.selixy.dev (Présentation et page Classes), vit dans un dépôt à part, privé, imbriqué
ici dans `showcase/` et ignoré par `.gitignore`. Un projet copie `modules/` par
`tools/copy-to.sh` (voir « Utiliser »).

## Conventions

- **Noms en anglais**, comme le code des projets : fichiers, classes, jetons. Documentation en français, aucun commentaire
  dans le code : le pourquoi de chaque module est dans son `README.md`.
- **Noms de Miraxy** pour l'en-tête, le burger et les panneaux (`.header-tabs`, `.burger-menu`, `.panel-list`), repris
  tels quels pour que Miraxy s'y branche sans renommage ; ailleurs, BEM (`.button--primary`, `.popup__sheet`).
- **Pas d'utilitaires** (`.flex`, `.gap-4`…) : la bibliothèque décrit des éléments, la mise en page propre à une page reste
  dans le projet. Les seules primitives de disposition sont celles de `modules/layout/`.
- **Les jetons portent les valeurs** : une classe utilise `var(--…)`, jamais une couleur en dur.

- **Panneaux à plat** : tout ce qui flotte (menus déroulants, `.panel`, `.popup__sheet`, sélecteurs) est sans ombre, sans
  bordure, à angles vifs, à fond `--panel-bg` = voile de `--panel-shift` (5 % de blanc en sombre, 5 % de noir en clair) posé sur ce qu'il y a dessous, et flou `--panel-backdrop`. Ne jamais y remettre
  `box-shadow` ni `border` ; `--shadow-1..3` valent `none`. La séparation vient du flou et du survol (`--bg-2`).

## Statut

Validés avec l'utilisatrice (2026-10-30) : verre (`surfaces/glass`), panneaux, en-tête et burger, lecteur, cartes, jetons, champs.
Boutons refaits puis validés (principal = `--primary`).
Composants et dispositions refaits sur les mêmes règles (verre plat, coins à peine arrondis, texte --text-h, sans bord ni ombre).

## Modules

Un dossier par classe, rangé par catégorie, avec son CSS, son JS s'il en a, et son `README.md` (rôle, pourquoi) :

- `modules/foundations/` : `tokens` (jetons : couleurs, polices, rayons, espacements, thème), `base` (remise à zéro),
  `text` (échelle typographique `.text`).
- `modules/layout/` : `container`, `stack`, `cluster`, `grid`, `sidebar`.
- `modules/surfaces/` : `glass` (verre, couche du dessous, `glass.js`), `panel` (panneaux et menus, `menus.js`), `surface`,
  `card`, `popup`.
- `modules/navigation/` : `header`, `tab`, `burger`, `underline`, `link-card`, `floating-button`.
- `modules/forms/` : `button`, `form-card`, `field` (+ `.hint`, `.error`), `select` (`select.js`), `switch`.
- `modules/indicators/` : `banner`, `badge`, `pill`, `tag`, `icon-pill`.
- `modules/media/` : `player` (`player.css`, `player-controls.css`).
- `modules/chat/` : `chat`.

`modules/index.css` importe toutes les feuilles dans l'ordre où la cascade les attend (jetons d'abord ; verre et panneaux
après l'en-tête et le burger ; bouton et lecteur à la fin) : cet ordre est celui des anciennes feuilles, ne pas le changer
sans vérifier le rendu. `modules/index.js` importe les trois scripts (`menus.js`, `glass.js`, `select.js`).

## Utiliser

- Copier : `tools/copy-to.sh <étiquette> <dossier>` copie `modules/` de cette version dans `<dossier>` et y pose
  `SELIXY-DESIGN` (version et commit). Ne pas modifier la copie : changer selixy-design, étiqueter, recopier.
- Tout charger : `<link rel="stylesheet" href="<dossier>/index.css">` et, pour les scripts,
  `<script type="module" src="<dossier>/index.js"></script>`.
- Ou à la carte : lier `foundations/tokens` et `foundations/base`, puis les modules voulus dans l'ordre de `index.css` ;
  un script se charge seul (`<script src="<dossier>/forms/select/select.js" defer>`).

## Versions

Publication sur GitHub (`Selixy/selixy-design`, public) : un commit d'export par version, fait à partir de l'étiquette
(`git archive <tag> modules tools README.md HISTORIQUE.md`, plus `LICENSE` et `.gitignore` propres à GitHub), étiqueté
de même. L'historique de travail reste privé : ce n'est pas un miroir.

- `v0.2` (2026-10-31) : `css/` et `js/` deviennent `modules/` : un dossier par classe, rangé par catégorie, avec son CSS,
  son JS et son `README.md` ; `index.css` et `index.js` chargent tout. Feuilles à plusieurs classes découpées (`base`,
  `header`, `layout`, `labels`, `link`), commentaires passés dans les README, `glass.js` en noms anglais. Rendu identique.
  `copy-to.sh <étiquette> <dossier>` copie `modules/`.
- `v0.1` (2026-10-31) : nouvelle numérotation, la bibliothèque n'a pas encore de version majeure. Contenu de l'ancienne
  v8.10.4 ; versions et journal d'avant : `HISTORIQUE.md`.
