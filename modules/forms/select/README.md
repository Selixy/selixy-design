# select

Fichiers : `select.css`, `select.js`.

## Rôle

- `.field select`, même champ de verre que `.field input`, flèche `--field-chevron` (jeton par thème) ; liste ouverte en verre là où `appearance: base-select` existe (Chrome récent), liste du système ailleurs (Firefox).
- `select.js` : facultatif. Il remplace chaque `<div class="select"><select>…</select></div>` par un `.select__value` (champ de verre) et une liste `.glass.panel-list` (`role="listbox"`, option choisie `aria-selected`), identique dans tous les navigateurs. Le `select` reste dans la page, masqué : il porte la valeur et émet `change`. Clavier : flèches, Début/Fin, Entrée, Échap, Tab ; un clic ailleurs ferme. Sans le script, le `select` natif s'affiche. Le reste de la bibliothèque reste du CSS pur. 

## Pourquoi

- Liste déroulante (.field select) : même champ de verre que .field input, flèche --field-chevron. Là où le navigateur le permet (appearance: base-select, Chrome récent), la liste ouverte est aussi du verre, comme une .panel-list de choix : option choisie en accent, survol en voile, sans ombre ni coche. Ailleurs (Firefox en 2026), la liste ouverte reste celle du système. Pour la même liste partout : <div class="select"><select>…</select></div> et `select.js`, qui remplace le select (gardé masqué pour la valeur et l'événement change) par un .select__value et une liste .glass.panel-list à aria-selected.
