# tokens

Fichiers : `tokens.css`.

## Rôle

- couleurs, ombres, polices (`--sans`, `--display`, `--mono`), rayons, transitions, espacements. Une seule couleur d'accent, le reste en neutres. Élévations : `--shadow-1` lecture, `--shadow-2` cliquable, `--shadow-3` survol. **Thème** : il suit `prefers-color-scheme` sans JavaScript ; un projet qui propose une bascule pose `html[data-theme="light"|"dark"]`, qui l'emporte sur le système.

## Pourquoi

- Jetons de design : seule source des couleurs, ombres, polices et espacements. Une seule couleur d'accent, le reste en neutres. Le thème suit le système, sans JavaScript ; un projet qui propose une bascule pose html[data-theme="light"|"dark"], qui l'emporte.
- superposition : les menus de la page sous l'en-tête, l'en-tête devant tout le contenu, les fenêtres surgissantes devant lui
- les familles « Variable » sont celles qu'un projet auto-héberge ; sinon la police installée, puis le système
- échelle d'espacements : 4, 8, 16, 24, 40, 64 px ; toute marge et tout écart en viennent
- Thème sombre : une fois pour le système (sauf clair forcé), une fois pour le sombre forcé. Mêmes valeurs.
