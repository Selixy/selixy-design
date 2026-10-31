# card

Fichiers : `card.css`.

## Rôle

- la carte (`.card`) : verre par défaut, `__cover` (`--image` avec `--card-image`), `__video` (`.is-playing`), `__panel` + `.panel`, `__eyebrow`, `__title`, `__lead`, `__tags` / `__tag`, coins `.card--round-tl/-tr/-br/-bl` au rayon `--card-radius`. Hauteur selon le contenu ; l'organisation des cartes (grille, galerie, défilement calé) appartient au projet.

## Pourquoi

- Carte (.card) : du verre (comme .glass) et un panneau (.panel) en bas ; avec une image (.card__cover--image), la couverture la remplit et le texte passe en blanc. Toute la carte est un lien. Sa hauteur suit son contenu : la façon d'organiser des cartes (grille, défilement calé, galerie) appartient au projet. <a class="card"><span class="card__cover"></span><span class="card__panel panel">…</span></a>
