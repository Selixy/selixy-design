# burger

Fichiers : `burger.css`.

## Rôle

- burger de Miraxy, trois barres plates qui deviennent une croix (`.burger`, `.burger-icon`, `.burger-bar--1..3`, `.burger-menu`, `.burger-menu--docked` collé sous l'en-tête à gauche de l'écran, toute la largeur sous 900 px) ; visible sous 900 px, `.burger--desktop` le garde au-delà.

## Pourquoi

- Burger de Miraxy : trois barres plates, sans fond, qui se changent en croix à l'ouverture (<details>, sans JS). Visible sous 900 px ; .burger--desktop le garde au-delà. Le menu est un .glass.panel-list sous le bouton.
- le menu flotte au-dessus de n'importe quel contenu : flou de l'en-tête (28 px) pour que le fond devienne des aplats
- collé sous l'en-tête et au bord gauche de l'écran ; sous 900 px, toute la largeur
- ancré à l'en-tête (et non à l'écran) : il le suit au défilement et pendant le rebond élastique ; le burger s'efface comme repère pour que le menu se place sous le bord bas de .header, qui est positionné (sticky)
