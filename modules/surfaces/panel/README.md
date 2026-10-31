# panel

Fichiers : `menus.js`, `panel.css`.

## Rôle

- `.panel-group`, une liste dans une liste (`<details class="panel-group"><summary>…</summary> <ul class="panel-list">…</ul></details>` dans un item) : sous 900 px il se déplie en place, en retrait ; au-delà, sous-menu de verre à droite ; un groupe qui contient l'élément courant prend l'accent. Ouverture au clic, sans JavaScript.
- `.panel` (coins à `--corner` par défaut ; coins arrondis un par un par `--round-tl/-tr/-br/-bl` ou `--round`, au rayon global `--panel-radius` ; `--sharp*` les remet vifs) et `.panel-list` (`.panel-label`, `.panel-separator`), pour le menu du burger et les menus déroulants.
- `menus.js` : facultatif, anime la fermeture des `<details>` de menu (`.burger`, `.panel-group`) : au clic sur un menu ouvert, il pose `.is-closing`, laisse jouer `panel-retract`, puis referme ; sous 900 px, il anime la hauteur du groupe déplié en place, ouverture et fermeture. Sans lui, l'ouverture reste animée et la fermeture est instantanée.
- `menus.js` ferme aussi, règle générale, tout menu contextuel ouvert (`.burger`, `.panel-group` flottant, `.chat__react`, liste de `.select`) sur Échap (le plus imbriqué d'abord, le focus revient sur son bouton) ou sur un clic n'importe où ailleurs. Un `.panel-group` déplié en accordéon (position statique) n'est pas contextuel : il se ferme avec son parent.

## Pourquoi

- Panneau à plat : quatre coins pilotables un par un, légèrement arrondis par défaut (--corner) ; .panel--round-tl/-tr/-br/-bl arrondissent un coin, .panel--round les quatre, du rayon global --panel-radius (`foundations/tokens`). .panel-list en fait une liste de liens.
- survol : un voile de verre, sur tous les items, courant compris (qui garde sa couleur d'accent)
- courant (page : aria-current, option choisie : aria-selected) : couleur d'accent ; .panel-label est un titre de groupe, sans réaction au survol
- Liste dans une liste : <li><details class="panel-group"><summary>Réglages</summary><ul class="panel-list">…</ul></details></li>. Sous 900 px, le groupe se déplie en place, en retrait ; au-delà, il s'ouvre en sous-menu de verre à droite. Ouverture au clic (<details>), sans JavaScript.
- Déploiement d'un menu à l'ouverture : il se déroule depuis son bord haut. Pas d'opacité : un parent à opacité < 1 devient la racine de fond de son verre, qui ne floute plus rien pendant l'animation ; seul transform est sans effet sur le verre. Sert au groupe (.panel-group), au menu du burger (`navigation/burger`) et à la liste du sélecteur (`forms/select`).
- Rétraction : `menus.js` pose .is-closing au clic, joue panel-retract, puis referme le <details> à la fin de l'animation. Sous 900 px, le groupe déplié en place n'a pas ces animations : `menus.js` anime sa hauteur, pour que le contenu en dessous suive ; sans le script, il s'ouvre et se ferme d'un coup.
