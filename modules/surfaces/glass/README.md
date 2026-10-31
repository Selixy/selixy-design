# glass

Fichiers : `glass.css`, `glass.js`.

## Rôle

- couche du dessous, règle générale : toute surface de verre (`.glass`, `.form-card`, `.header`, `.card`, `.surface`, `.panel`, étiquettes, `.link-card`, `.floating-button`, `.popup__sheet`, actions et barre d'écriture du chat) met en première couche de son fond `var(--_under)` (les boutons aussi) : la couleur de ce qu'il y a dessous (`--glass-under`) à `--glass-fill` (50 %), au-dessus du voile. Les champs, les bandeaux d'état et le lecteur n'en ont pas.
- `.glass`, le verre de base ; un `.glass` positionné qui contient un `.panel-group` porte son verre sur `::before`, pour que le sous-menu qui en dépasse floute bien ce qu'il y a derrière. Le verre de base : voile de `--glass-shift` (7 %) de `--glass-tint` et flou `--glass-blur`, , surchargeables sur l'élément ou un ancêtre.
- `glass.js` : facultatif. Détecte la couleur juste sous chaque surface de verre (ce que montre `elementsFromPoint` en son centre, recomposé avec les fonds et voiles de ses ancêtres) et la pose dans `--glass-under` ; recalcule au chargement, au défilement, à l'ouverture d'un menu, au changement de thème et quand le DOM change. Sans lui, la couche du dessous prend la couleur de la page (`--bg-0`).

## Pourquoi

- Verre : voile de --glass-shift (15 %) de --glass-tint (noir en clair, blanc en sombre) posé sur ce qu'il y a dessous, et flou --glass-blur. Jamais de fond semi-transparent en plus du voile. Ce qui est posé sur du verre s'écrit en --text-h, jamais en gris atténué : un gris moyen se perd dès qu'un fond coloré passe derrière. Les deux se surchargent sur l'élément ou un ancêtre. <div class="glass">…</div>
- Un bloc de verre qui contient un menu (.select, .panel-group) ou une barre de verre (.chat__compose) porte son verre sur ::before, posé derrière ses enfants : un élément à backdrop-filter est la racine de fond de ses descendants, et la liste ouverte ne flouterait plus la page derrière le bloc. Pas de z-index (aucun contexte d'empilement) : la liste reste au-dessus du reste de la page. Le bloc doit être positionné : le menu du burger l'est, .form-card le devient ici.
- Couche du dessous : chaque surface de verre ajoute, au-dessus de son voile, une couche de la couleur de ce qu'il y a juste dessous (--glass-under) à --glass-fill (50 %) : c'est la première couche de son fond, var(--_under). `glass.js` détecte la couleur et la pose sur chaque surface ; sans lui, c'est le fond de la page (--bg-0). Le lecteur garde son gris neutre.
