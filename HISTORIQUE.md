# Historique avant v0.1

Jusqu'au 2026-10-31, chaque commit montait la version (v0.1.0 à v8.10.4) : des numéros de version majeure pour une
bibliothèque qui n'en avait encore aucune. La numérotation repart de v0.1 (état de v8.10.4), en deux nombres (vX.Y), jusqu'à une vraie v1.0.
Les anciennes étiquettes sont retirées ; leurs commits restent dans l'historique (sauf `v8.10.2`, commit erroné jamais
publié). Une copie faite par `tools/copy-to.sh` avec un ancien numéro se retrouve ici.

## Anciennes étiquettes

| Étiquette | Commit | Date | Sujet |
|---|---|---|---|
| `v0.1.0` | `a3333d0` | 2026-10-19 | Design commun extrait de Miraxy : jetons, base, en-tête, composants |
| `v0.2.0` | `f88259e` | 2026-10-22 | v0.2.0 : noms en anglais et BEM, commentaires repris de Miraxy, script de copie |
| `v0.3.0` | `bdb3ba0` | 2026-10-22 | v0.3.0 : typographie et composants repris de SelixyUI, bascule de thème par data-theme |
| `v0.4.0` | `42e280f` | 2026-10-22 | v0.4.0 : en-tête pour site à sections (aria-current true, burger__button, burger__heading, liste défilante) |
| `v0.5.0` | `28763a6` | 2026-10-22 | v0.5.0 : burger --top-left et --desktop |
| `v1.0.0` | `57810d1` | 2026-10-22 | v1.0.0 : en-tête, burger et panneaux de Miraxy (version en production) |
| `v1.1.0` | `d24b4fa` | 2026-10-23 | Tout à plat : plus d'ombres ni de flou, panneaux translucides à bordure marquée |
| `v1.1.1` | `f34ed77` | 2026-10-23 | README v1.1.1 |
| `v1.2.0` | `d2ef7f0` | 2026-10-23 | Panneaux sans bordure ; règle des panneaux à plat dans la README |
| `v1.3.0` | `a9c5a05` | 2026-10-23 | Panneaux à 50 % avec flou d'arrière-plan |
| `v1.4.0` | `f297dd0` | 2026-10-23 | Panneaux plus clairs que la page, éclaircissement dynamique de l'arrière-plan |
| `v1.5.0` | `7e02807` | 2026-10-23 | Panneaux : voile à 5 % |
| `v1.6.0` | `694132e` | 2026-10-23 | Coins du panneau pilotables, rayon global, menu collé sous l'en-tête |
| `v1.7.0` | `cb0abb7` | 2026-10-23 | En-tête : voile à 7 % |
| `v1.8.0` | `59c01ce` | 2026-10-23 | Verre dépoli pilotable : --panel-shift/blur, --header-shift/blur |
| `v1.9.0` | `8582852` | 2026-10-23 | project-card : coins pilotables (--card-radius-*, --project-card--round-*) |
| `v2.0.0` | `5010c78` | 2026-10-23 | button.css : bouton verre + pastille d'action, coin bas-droit arrondi (v2.0.0) |
| `v2.1.0` | `6ae66f0` | 2026-10-23 | Retour au verre : champs, bandeaux, voile du bouton réduit (v2.1.0) |
| `v2.1.1` | `a54663e` | 2026-10-23 | En-tête : verre sur ::before pour que le flou des menus fonctionne (v2.1.1) |
| `v3.0.0` | `4bf37cc` | 2026-10-30 | Noms génériques (v3.0.0) : project-card devient card, project-cards devient cards, la carte de formulaire devient form-card |
| `v3.1.0` | `66ab033` | 2026-10-30 | Verre (v3.1.0) : classe .glass, cartes sans image en verre au lieu de la couverture violette |
| `v3.2.0` | `d1d2061` | 2026-10-30 | Lecteur vidéo (v3.2.0) : player.css et player-controls.css repris de SelixyWatch ; vitrine : sections En-tête et Lecteur |
| `v3.2.1` | `076fa19` | 2026-10-30 | Burger (v3.2.1) : sous 900 px, le menu ancré prend toute la largeur |
| `v3.2.2` | `e4f349a` | 2026-10-30 | Burger (v3.2.2) : menu lisible sur un fond coloré, voile de verre sur --menu-veil et flou de 24 px |
| `v3.3.0` | `b748b72` | 2026-10-30 | Verre (v3.3.0) : .glass abaisse la saturation du fond, le menu du burger est du verre pur ; retrait du fond --menu-veil |
| `v3.4.0` | `1e5e3f8` | 2026-10-30 | Lisibilité sur le verre (v3.4.0) : texte --text-h sur le verre, courant en graisse et trait d'accent, menu au flou de l'en-tête ; retrait de la baisse de saturation |
| `v3.5.0` | `f265285` | 2026-10-30 | Lecteur (v3.5.0) : grand bouton lecture en îlot de verre au niveau des autres boutons, sans bulle de chat dans la vitrine ; boutons, composants et dispositions marqués provisoires |
| `v3.6.0` | `fe17ffd` | 2026-10-30 | Lecteur (v3.6.0) : aplati, sans bords, reflets, ombres ni halo ; formes de verre seulement (voile et --glass-blur) |
| `v3.6.1` | `3bc6ef6` | 2026-10-30 | Vitrine du lecteur (v3.6.1) : sans bouton mode studio, boutons de base listés, exemple d'un bouton ajouté |
| `v3.7.0` | `1ccb726` | 2026-10-30 | Lecteur (v3.7.0) : voile gris neutre à 20 % sur la vidéo, le même sur image claire ou sombre |
| `v3.7.1` | `aa388c9` | 2026-10-30 | Lecteur (v3.7.1) : point de la barre à la couleur de la fin de la ligne de progression |
| `v3.7.2` | `fef9bc9` | 2026-10-30 | Vitrine (v3.7.2) : toutes les classes de la bibliothèque sont montrées |
| `v4.0.0` | `83421c7` | 2026-10-30 | Carte générique (v4.0.0) : la mise en page du portfolio (galerie, défilement calé, feature, more, kind, zoom) sort de la bibliothèque |
| `v4.0.1` | `90ef9af` | 2026-10-30 | Panneaux (v4.0.1) : survol des items en voile de verre, item courant compris |
| `v4.0.2` | `6e2c551` | 2026-10-30 | Lecteur (v4.0.2) : indicateur central à la taille d'un îlot de commandes |
| `v5.0.0` | `f0f14ca` | 2026-10-30 | Panneaux (v5.0.0) : .panel-list en liste de choix (aria-selected), retrait de .panel-item et .is-active inutilisés |
| `v5.1.0` | `44900e8` | 2026-10-30 | Formulaires (v5.1.0) : select et textarea en champ de verre comme les autres, flèche maison, liste ouverte en verre là où c'est possible |
| `v5.2.0` | `f4b624e` | 2026-10-30 | Sélecteur (v5.2.0) : .select et js/select.js, la liste de choix en verre dans tous les navigateurs |
| `v5.3.0` | `7c91435` | 2026-10-30 | Champs plus fins (v5.3.0) : hauteur 40 px, marge intérieure 0,75 rem |
| `v6.0.0` | `930c647` | 2026-10-30 | Boutons (v6.0.0) : verre plat, 40 px, coins vifs, icône à côté du texte, sans pastille ; deux formes de principal à départager |
| `v6.1.0` | `2b4f02d` | 2026-10-30 | Boutons (v6.1.0) : principal = .button--primary, retrait de .button--accent ; état non sélectionnable montré pour chaque bouton |
| `v6.2.0` | `a2dc777` | 2026-10-30 | Listes dans les listes (v6.2.0) : .panel-group en place sur téléphone, en sous-menu sur ordinateur ; vitrine dans un iPhone et un MacBook |
| `v6.3.0` | `ec69042` | 2026-10-30 | Menus (v6.3.0) : animation de déploiement à l'ouverture (burger, groupe, sélecteur), par transform seulement |
| `v6.4.0` | `ecc5a53` | 2026-10-30 | Menus (v6.4.0) : rétraction animée à la fermeture (js/menus.js, js/select.js), déroulé depuis une hauteur nulle |
| `v6.5.0` | `17e1abc` | 2026-10-30 | Menus (v6.5.0) : sur téléphone, le groupe en place anime sa hauteur et le contenu suit ; animations à 140 ms |
| `v6.6.0` | `8f5b1bd` | 2026-10-30 | Superposition (v6.6.0) : l'en-tête passe devant tout le contenu, menus compris ; seules les fenêtres surgissantes passent devant lui |
| `v7.0.0` | `6a7646d` | 2026-10-30 | Composants et dispositions (v7.0.0) : refaits en verre plat, découpés en fichiers d'une responsabilité, --gap réglable |
| `v7.1.0` | `248ad8e` | 2026-10-30 | Coins (v7.1.0) : légèrement arrondis par défaut partout (--corner, 4 px), toujours réglables ; interrupteur de nouveau rond |
| `v7.2.0` | `4610536` | 2026-10-30 | Focus (v7.2.0) : plus de contour, un surlignage (voile renforcé, accent) comme au survol |
| `v8.0.0` | `6edc8be` | 2026-10-30 | Dispositions (v8.0.0) : échelle d'espacements --space-0..5, dispositions intrinsèques .container .stack .cluster .grid .sidebar |
| `v8.1.0` | `e615094` | 2026-10-30 | Espacements (v8.1.0) : toutes les marges des composants viennent de l'échelle --space-*, carte de formulaire en verre plat |
| `v8.2.0` | `d165a58` | 2026-10-30 | Chat (v8.2.0) : .chat, fil de messages sans bulles et zone d'écriture, repris de SelixyWatch et aligné sur la bibliothèque |
| `v8.2.1` | `a34deee` | 2026-10-30 | Champs (v8.2.1) : plus de barre d'accent au focus, la barre de gauche est réservée aux erreurs |
| `v8.2.2` | `875151c` | 2026-10-30 | Verre (v8.2.2) : un bloc de verre qui contient un menu porte son verre sur ::before ; la liste du sélecteur floute de nouveau la page |
| `v8.2.3` | `c08a027` | 2026-10-30 | Burger (v8.2.3) : le menu ancré suit l'en-tête au défilement et pendant le rebond élastique |
| `v8.3.0` | `79afcd2` | 2026-10-30 | Chat (v8.3.0) : réagir, répondre et intégrer des médias |
| `v8.4.0` | `bbeb210` | 2026-10-30 | Chat (v8.4.0) : repensé d'après Discord |
| `v8.4.1` | `31b9a40` | 2026-10-30 | Chat (v8.4.1) : actions en petits boutons sans verre |
| `v8.4.2` | `c906d67` | 2026-10-30 | Chat (v8.4.2) : le bandeau de réponse dans la barre d'écriture, un seul bloc |
| `v8.4.3` | `76db296` | 2026-10-30 | Boutons et chat (v8.4.3) : .button--subtle sans flou propre, actions du chat en un seul bloc |
| `v8.4.4` | `62f4b2a` | 2026-10-30 | Chat (v8.4.4) : barre d'écriture resserrée, sans flou empilé |
| `v8.5.0` | `0c82e6b` | 2026-10-30 | Chat (v8.5.0) : barre d'écriture en verre, le fil défile dessous |
| `v8.5.1` | `ae2d0ef` | 2026-10-30 | Verre (v8.5.1) : la barre d'écriture du chat floute de nouveau le fil |
| `v8.5.2` | `97d1029` | 2026-10-30 | Chat (v8.5.2) : gris neutre à 10 % sur la barre d'écriture |
| `v8.5.3` | `6f21609` | 2026-10-30 | Chat (v8.5.3) : barre d'écriture teintée de la couleur du fond du chat |
| `v8.5.4` | `7196b41` | 2026-10-30 | Chat (v8.5.4) : barre d'écriture sans surlignage au focus, teinte fixe |
| `v8.6.0` | `8e5ca4b` | 2026-10-30 | Chat (v8.6.0) : actions à cheval sur le bord haut, chat fonctionnel dans la vitrine |
| `v8.7.0` | `415b7dd` | 2026-10-30 | Verre (v8.7.0) : couche de la couleur du dessous sur toutes les surfaces, détectée par js/glass.js |
| `v8.7.1` | `9c319a3` | 2026-10-30 | Verre (v8.7.1) : couche du dessous à 20 % |
| `v8.7.2` | `6352cd9` | 2026-10-30 | Verre (v8.7.2) : couche du dessous à 60 %, comme la barre d'écriture validée |
| `v8.8.0` | `fa2a667` | 2026-10-31 | Verre (v8.8.0) : voile à 15 % par défaut, couche du dessous à 50 %, boutons compris |
| `v8.9.0` | `bd43aa3` | 2026-10-31 | Chat (v8.9.0) : palette d'émojis complète avec recherche dans la langue du système |
| `v8.9.1` | `d72a6bd` | 2026-10-31 | Verre (v8.9.1) : la couleur du dessous arrive dès l'ouverture d'un menu, pas après l'animation |
| `v8.10.0` | `588dfbc` | 2026-10-31 | Menus (v8.10.0) : tout menu contextuel se ferme sur Échap ou sur un clic ailleurs |
| `v8.10.1` | `971898a` | 2026-10-31 | Menus (v8.10.1) : data-pinned garde ouverts les menus montrés ouverts |
| `v8.10.2` | `21632ad` | 2026-10-31 | Menus (v8.10.1) : data-pinned garde ouverts les menus montrés ouverts |
| `v8.10.3` | `726533b` | 2026-10-31 | Menus (v8.10.3) : retrait de data-pinned, les menus de la vitrine se ferment comme les autres |
| `v8.10.4` | `bfe7cf7` | 2026-10-31 | Vitrine (v8.10.4) : sortie dans son propre dépôt, showcase/, ignoré ici |

## Ancien journal des versions

- `v8.10.4` : rangement de la vitrine : `vitrine/` devient `showcase/`, un dépôt à part (non publié avec la
  bibliothèque) : un fichier HTML par chapitre, noms en anglais, serveur local. La bibliothèque (`css/`, `js/`) ne change pas.
- `v8.10.3` : retrait de `data-pinned` (v8.10.1) : les menus montrés ouverts dans la vitrine se ferment eux aussi sur Échap
  ou clic ailleurs. (L'étiquette `v8.10.2` désigne un commit erroné jamais publié.)
- `v8.10.1` : `data-pinned` (retiré en v8.10.3).
- `v8.10.0` : `js/menus.js` : tout menu contextuel se ferme sur Échap ou sur un clic ailleurs, avec son animation.
- `v8.9.1` : `js/glass.js` recalcule la couleur du dessous dès l'image suivant l'ouverture d'un menu (avant : 220 ms après,
  une fois l'animation finie) et mesure le centre d'une surface sans l'échelle de son animation d'ouverture. Vitrine : les
  données d'émojis se préchargent.
- `v8.9.0` : chat : palette d'émojis complète, champ de recherche en haut (`__picker-search`), liste qui défile par
  catégorie (`__picker-list`, `__picker-group`, `__picker-grid`, `__picker-empty`). Vitrine : tous les émojis, recherche
  dans la langue du système. La barre d'actions n'utilise plus `transform` (une palette fixe s'y placerait mal).
- `v8.8.0` : verre : voile par défaut à 15 % (`--glass-shift`, `--panel-shift`, `--header-shift`), couche du dessous à 50 %
  (`--glass-fill`). Les boutons suivent la même règle (voile 15 %, couche du dessous) ; leur survol et celui des surfaces
  cliquables (`.link-card`, `.surface--clickable`, `.floating-button`) passent à `--glass-shift-hover` (22 %).
- `v8.7.2` : `--glass-fill` revient à 60 %, la valeur validée sur la barre d'écriture du chat (v8.5.3).
- `v8.7.1` : `--glass-fill` passe à 20 %.
- `v8.7.0` : verre : la couche de couleur ajoutée à la barre d'écriture du chat devient une règle générale. Chaque surface
  de verre porte, au-dessus de son voile, la couleur de ce qu'il y a juste dessous à 60 % (`--glass-under`, `--glass-fill`,
  `var(--_under)`), détectée par `js/glass.js`. `--chat-compose-fill` disparaît.
- `v8.6.0` : chat : la barre d'actions est centrée sur le bord haut du message (à cheval sur le précédent) ;
  `.chat__react--up` ouvre la palette vers le haut ; la barre d'écriture porte son verre sur `::before` et peut contenir une
  palette d'émojis, ouverte au-dessus d'elle. Vitrine : chat fonctionnel (envoyer, réagir, répondre, citer, joindre).
- `v8.5.4` : chat : la barre d'écriture ne change plus au focus ; elle garde en permanence la teinte qu'elle prenait au
  focus (voile `--button-shift-hover`).
- `v8.5.3` : chat : le gris de la barre d'écriture devient la couleur du fond du chat (voile sur `--bg-0`) à 60 %,
  jeton `--chat-compose-fill`.
- `v8.5.2` : chat : la barre d'écriture ajoute un gris neutre à 10 % à son verre (demande explicite : le fil passe dessous,
  le verre seul ne la détachait pas assez). Exception au principe du verre, comme le gris du lecteur.
- `v8.5.1` : un `.glass` qui contient une `.chat__compose` porte son verre sur `::before` (comme avec un menu) : posé sur
  l'élément, il en faisait la racine de fond et la barre d'écriture ne floutait plus le fil. Vérifié dans Firefox sous Xvfb.
- `v8.5.0` : chat : la barre d'écriture est en verre (flou --header-blur) et flotte sur le fil, qui défile dessous.
  `.chat` passe en grille à une case (fil et barre superposés).
- `v8.4.4` : chat : barre d'écriture resserrée ; le champ et les boutons n'y ont plus de flou propre (plus de rectangles
  dans la barre), la barre garde la même teinte au focus, le bandeau de réponse est une ligne fine séparée d'un trait.
- `v8.4.3` : `.button--subtle` ne porte plus de flou : posé sur du verre, il dessinait un carré flou par bouton.
  Chat : les actions réagir et répondre forment un seul petit bloc de verre.
- `v8.4.2` : chat : le bandeau de réponse est dans la barre d'écriture, un seul bloc au lieu de deux accolés.
- `v8.4.1` : chat : les actions (réagir, répondre) sont de petits boutons sans verre, en haut à droite de la ligne ; plus
  d'îlot de verre empilé sur la ligne surlignée. La vitrine rend au chat sa largeur d'origine.
- `v8.4.0` : chat repensé d'après Discord : messages groupés par auteur (`--follow`, `__gutter`), ligne surlignée au survol,
  avatar de 40 px, réponse en ligne courbe au-dessus du nom, actions à cheval sur le bord, séparateur de date (`__divider`),
  barre d'écriture unique avec le bandeau de réponse accolé. Le contenu d'un message n'est plus enveloppé dans un `<div>`.
- `v8.3.0` : chat : réagir (barre d'actions, palette d'émojis, réactions), répondre (citation, bandeau de réponse) et médias
  (image, vidéo, galerie, fichier joint) ; `js/menus.js` anime aussi la fermeture de la palette.
- `v8.2.3` : le menu ancré du burger suit l'en-tête (position par rapport à `.header`, plus par rapport à l'écran) : il reste
  collé dessous au défilement et pendant le rebond élastique.
- `v8.2.2` : un bloc de verre qui contient un menu (`.form-card`, `.glass` avec un `.select` ou un `.panel-group`) porte son
  verre sur `::before`, sans contexte d'empilement : la liste ouverte du sélecteur floute de nouveau la page (régression de
  v8.1.0, quand `.form-card` est devenue du verre).
- `v8.2.1` : plus de barre d'accent à gauche d'un champ au focus (voile renforcé seulement) ; la barre `--field-bar` ne sert
  plus qu'aux erreurs (`aria-invalid`).
- `v8.2.0` : `.chat` (`chat.css`), le fil de discussion, repris de SelixyWatch et aligné sur la bibliothèque.
- `v8.1.0` : toutes les marges et tous les écarts des composants viennent de l'échelle `--space-*` (plus aucune valeur en dur
  hors du lecteur) ; `--field-pad` passe à 16 px ; un bandeau fait 40 px de haut comme un bouton ; `.form-card` devient un bloc
  de verre plat (plus de fond blanc, de bordure ni d'arrondi de 8 px).
- `v8.0.0` : **changement incompatible**, dispositions refaites : échelle d'espacements `--space-0..5`, `.container`, `.stack`,
  `.cluster` (remplace `.row`), `.grid`, `.sidebar` ; variantes `--s` / `--l` ; jetons `--container-width`, `--sidebar-width`.
- `v7.2.0` : plus aucun contour de focus : au clavier, un élément se surligne comme au survol (voile renforcé) et son texte
  ou son icône passe en accent ; la barre du lecteur s'épaissit, l'interrupteur marque sa piste.
- `v7.1.0` : tous les coins légèrement arrondis par défaut (`--corner`, 4 px) : verre, panneaux, menus, boutons, champs,
  cartes, étiquettes, bandeaux, liens, fenêtres ; toujours réglables un par un (`--round*` à 16 px, `--sharp*` et
  `.button--sharp` pour des coins vifs). L'interrupteur redevient rond.
- `v7.0.0` : **changement incompatible**, `components.css` est découpé (`layout.css`, `surface.css`, `switch.css`,
  `labels.css`, `banner.css`, `link.css`, `popup.css`) et refait en verre plat : plus de bordures, d'arrondis par défaut, de
  trait de bandeau ni de fond gris derrière une fenêtre ; textes en `--text-h` ; `--gap` réglable sur les dispositions.
- `v6.6.0` : ordre de superposition fixe : `--z-menu` (100, menus de la page), `--z-header` (1000, l'en-tête passe devant
  tout le contenu, menus compris), `--z-popup` (1100, seules les fenêtres surgissantes passent devant l'en-tête).
- `v6.5.0` : animations à 140 ms (`--menu-deploy`) ; sous 900 px, le groupe déplié en place anime sa hauteur (`js/menus.js`),
  le contenu en dessous suit au lieu de sauter.
- `v6.4.0` : rétraction des menus (`panel-retract`, `js/menus.js`, et dans `js/select.js`) ; le déroulé part de et revient à
  une hauteur nulle.
- `v6.3.0` : animation d'ouverture des menus (burger, `.panel-group`, liste du sélecteur) : déroulé depuis le haut en
  `--menu-deploy` (180 ms), par `transform` seulement pour ne pas casser le verre ; coupée avec `prefers-reduced-motion`.
- `v6.2.0` : listes dans les listes (`.panel-group`), dépliées en place sur téléphone, en sous-menu à droite sur ordinateur ;
  verre du `.glass` porteur sur `::before`. Vitrine : section Menus mise en situation dans un iPhone 14 et un MacBook Pro
  (cadres `devices.css` 0.2.0, MIT, dans `vitrine/devices/`, hors bibliothèque).
- `v6.1.0` : le principal reste `.button--primary` (verre, texte en accent) ; `.button--accent` et `--button-accent-shift`
  retirés. La vitrine montre l'état non sélectionnable de chaque bouton.
- `v6.0.0` : **changement incompatible**, bouton refait en verre plat : plus de pastille (`__chip`), de `__label`, `__sub`,
  `--secondary`, `--chip-start`, `--sharp` ; coins vifs par défaut (le coin bas-droit arrondi était une méprise) ; 40 px de
  haut ; icône `.button__icon` à côté du texte ; deux formes de principal à l'essai (`--primary`, `--accent`). Jetons
  `--button-veil`, `--button-shift`, `--button-grow` retirés, `--button-accent-shift` ajouté.
- `v5.3.0` : champs plus fins : `--field-height` 40 px (au lieu de 56), `--field-pad` 0,75 rem (au lieu de 1).
- `v5.2.0` : sélecteur `.select` + `js/select.js` : ta liste de choix en verre partout, Firefox compris ; `copy-to.sh` copie
  `js/` si on lui donne un dossier.
- `v5.1.0` : `select.css`, la liste déroulante alignée sur les champs (verre, sans bordure ni arrondi, flèche maison) et sa
  liste ouverte en verre là où le navigateur le permet. `.field textarea` passe aussi en champ de verre ; l'ancienne règle
  (fond plein, bordure, arrondi) de `components.css` pour `select` et `textarea` est retirée.
- `v5.0.0` : **changement incompatible** : `.panel-item` et `.is-active` sont retirés (aucun projet ne s'en servait) ; l'élément
  courant d'une `.panel-list` se marque par `aria-current="page"` (page) ou `aria-selected="true"` (option choisie, nouveau).
  La vitrine la montre comme une vraie liste de choix (« Trier par »).
- `v4.0.2` : l'indicateur central du lecteur prend la taille d'un îlot de commandes (44 px de haut, texte 15 px, pilule).
- `v4.0.1` : survol des items de `.panel-list` en voile de verre (au lieu du fond plein `--bg-2`), y compris sur l'item
  courant, qui n'en avait pas.
- `v4.0.0` : **changement incompatible**, la mise en page du portfolio sort de la bibliothèque : `.cards`, `.cards--gallery`,
  `.card--feature`, `__kind`, `__more`, `__more-inner`, le défilement calé, le zoom de couverture au survol et les jetons
  `--card-height`, `--card-hover-scale`, `--cards-columns`, `--cards-row`, `--cards-gap`. Le portfolio les porte lui-même.
- `v3.7.2` : la vitrine montre toutes les classes (152) : burger gardé au bureau, les quatre coins des boutons, tous les
  `--sharp*`, galerie de cartes, `--feature`, `__kind`, `__more`, vidéo de carte, indicateur, affiche, vignette d'aperçu et
  glisser du lecteur.
- `v3.7.1` : le point de la barre prend la couleur de la fin de la ligne de progression (`--player-fill-end`, #d58cff), sur
  toute image.
- `v3.7.0` : exception au principe du verre pour le lecteur : `--player-veil` devient un gris neutre `rgba(128, 128, 128, .2)`,
  le même sur image claire ou sombre (plus de voile blanc sur `--light`), parce que le fond de la vidéo change sans arrêt.
- `v3.6.1` : vitrine du lecteur sans bouton propre à SelixyWatch (mode studio, chat) ; boutons de base listés, exemple d'un
  bouton ajouté (un `.player__button` de plus dans un îlot).
- `v3.6.0` : lecteur aplati : plus de bords clairs, de reflets intérieurs, d'ombres ni d'anneau et de halo autour du cadre ;
  îlots, titre, indicateur, aperçu et grand bouton sont des formes de verre (voile, flou `--glass-blur`). Jetons `--player-ring`
  et `--player-halo` retirés.
- `v3.5.0` : le grand bouton lecture (`.player__play`) devient un îlot de verre rond, au niveau des boutons des commandes
  (voile, bord et ombre des îlots, 1,1 au survol, variante `--light`). Item courant des panneaux en couleur d'accent, sans
  trait. Boutons, composants et dispositions marqués provisoires.
- `v3.4.0` : lisibilité sur le verre sans toucher au verre : ce qui est posé dessus (items de `.panel-list`, onglets `.tab`)
  s'écrit en `--text-h`, l'élément courant en graisse 600 (en couleur d'accent pour les items, sans trait) ; survol d'un onglet en
  accent. Le menu du burger est un `.glass.panel-list` au flou de l'en-tête (28 px). La baisse de saturation et le
  `--menu-veil` essayés en v3.2.2 et v3.3.0 sont retirés.
- `v3.2.1` : sous 900 px, le menu ancré du burger (`.burger-menu--docked`) prend toute la largeur de l'écran.
- `v3.2.0` : le lecteur vidéo (`player.css`, `player-controls.css`), repris de SelixyWatch ; jetons `--player-ring`,
  `--player-halo`. La vitrine montre aussi l'en-tête et le lecteur, valeurs par défaut en tête.
- `v3.1.0` : `.glass` (`glass.css`, jetons `--glass-shift`, `--glass-blur`). Une `.card` sans image est en verre, texte
  `--text-h` ; le texte blanc ne vaut que sur une image (`__cover--image`) ou une vidéo lancée. `--card-tint` et la couverture
  violette par défaut disparaissent.
- `v3.0.0` : **changement incompatible**, noms génériques : `project-card.css` devient `card.css`, `.project-card` devient `.card`,
  `.project-cards` devient `.cards` (mêmes éléments et modificateurs) ; l'ancienne carte de formulaire `.card` devient `.form-card`.
  À la mise à jour : Miraxy renomme ses `.card` en `.form-card`, le portfolio ses `.project-card(s)` en `.card(s)`.
- `v2.1.1` : le verre de l'en-tête passe sur `.header::before` : porté par l'en-tête, il empêchait le flou des menus du burger (un élément à `backdrop-filter` est la racine de fond de ses descendants).
- `v2.1.0` : retour au verre dans les composants : `.field__input` / `.field input` en verre translucide (voile `--field-shift`, plus marqué au focus, barre d'accent `--field-bar` à gauche, plus de bordure), nouveau `.banner` (verre teinté par état : `--error`, `--warning`, `--neutral`), voile du bouton réduit à 55 % (`--button-veil`), `.button__sub` (sous-libellé mono). Jetons `--field-*`, `--banner-shift`.
- `v2.0.0` : **changement incompatible** : le bouton est refait (`button.css`, verre + pastille d'action, coin bas-droit arrondi). `.button` quitte `base.css`, `.button--subtle` et `.button--danger` quittent `components.css` ; jetons `--button-*`, `--danger`, `--on-danger` ajoutés. Un bouton en texte seul reste valide (le primary devient plein accent).
- `v1.9.0` : `project-card.css` (avec `__video`, coins pilotables), la card de projet (couverture + panneau de verre) et la galerie `.project-cards--gallery`.
- `v1.8.0` : le verre dépoli se pilote par quatre paramètres, surchargeables sur n'importe quel élément ou ancêtre : `--panel-shift` / `--panel-blur` (panneaux, 15 % et 14 px) et `--header-shift` / `--header-blur` (en-tête, 15 % et 28 px) ; `--glass-tint` (noir en clair, blanc en sombre) donne le sens du voile. Les jetons `--panel-bg`, `--panel-backdrop`, `--header-bg` et `--header-backdrop` disparaissent.
- `v1.7.0` : fond de l'en-tête sur le principe du panneau, en plus marqué : voile `--header-shift` (15 % de noir en clair, 15 % de blanc en sombre) sur ce qu'il y a dessous et flou `--header-backdrop` de 28 px.
- `v1.6.0` : coins du panneau pilotables (`.panel--round-*`, rayon global `--panel-radius: 16px`), angles vifs par défaut ; `.burger-menu--docked` ; jeton `--header-height`.
- `v1.5.0` : la couleur du panneau est celle de ce qu'il y a dessous, éclaircie de `--panel-shift` en thème sombre et assombrie en thème clair (voile blanc ou noir), plus de `brightness`/`saturate`.
- `v1.4.0` : panneaux plus clairs que la page : jetons `--panel-bg` et `--panel-backdrop` (flou, éclaircissement et saturation de l'arrière-plan, donc dynamiques).
- `v1.3.0` : panneaux et popups à 50 % d'opacité avec flou d'arrière-plan `blur(12px)`.
- `v1.2.0` : panneaux et popups sans bordure (fond translucide à 70 %), règle « panneaux à plat » inscrite dans les conventions.
- `v1.1.1` : panneaux et popups à angles vifs, fond translucide 60 %, bordure à 45 % du texte.
- `v1.1.0` : tout à plat, sans ombre ni flou : `--shadow-1..3` valent `none`, `.panel` et `.popup__sheet` plats : angles vifs, fond translucide (60 %), bordure marquée (45 % du texte), plus de `backdrop-filter`.
- `v1.0.0` : en-tête, burger et panneaux remplacés par ceux de Miraxy en production (refonte `fee34a8` du VPS) :
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
