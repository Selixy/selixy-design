const VERRES = '.glass, .button, .form-card, .header, .card, .surface, .panel, .pill, .tag, .badge, .link-card, .floating-button, .popup__sheet, .chat__actions, .chat__compose, .panel-group > .panel-list';
let minuterie = 0;

function couleur(texte) {
  const hexa = /#([0-9a-f]{6})\b/i.exec(texte ?? '');
  if (hexa) return [0, 2, 4].map((i) => parseInt(hexa[1].slice(i, i + 2), 16)).concat(1);
  const trouve = /(rgba?|color)\(([^)]*)\)/.exec(texte ?? '');
  if (!trouve) return null;
  const nombres = trouve[2].replace('srgb', '').split(/[\s,/]+/).filter(Boolean).map(Number);
  const echelle = trouve[1] === 'color' ? 255 : 1;
  return [nombres[0] * echelle, nombres[1] * echelle, nombres[2] * echelle, nombres[3] ?? 1];
}

function fond(element) {
  const chaine = [];
  for (let n = element; n && n.nodeType === 1; n = n.parentElement) chaine.unshift(n);
  let teinte = [255, 255, 255];
  for (const noeud of chaine) {
    const style = getComputedStyle(noeud);
    const avant = getComputedStyle(noeud, '::before');
    const couches = [style.backgroundColor, avant.backdropFilter !== 'none' ? avant.backgroundColor : null, noeud.matches(VERRES) ? style.getPropertyValue('--glass-under') : null];
    const remplissage = parseFloat(style.getPropertyValue('--glass-fill')) / 100;
    const lues = couches.map(couleur);
    if (lues[2]) lues[2][3] = remplissage;
    for (const couche of lues.filter(Boolean)) {
      teinte = teinte.map((v, i) => v * (1 - couche[3]) + couche[i] * couche[3]);
    }
  }
  return teinte;
}

function sous(element) {
  const r = element.getBoundingClientRect();
  const largeur = element.offsetWidth;
  const hauteur = element.offsetHeight;
  if (!largeur || !hauteur) return fond(element.parentElement ?? document.documentElement);
  const [ox, oy] = getComputedStyle(element).transformOrigin.split(' ').map(parseFloat);
  const x = r.left - ox * (1 - r.width / largeur) + largeur / 2;
  const y = r.top - oy * (1 - r.height / hauteur) + hauteur / 2;
  const touches = document.elementsFromPoint(x, y);
  const dessous = touches.find((t) => !element.contains(t));
  return fond(dessous ?? element.parentElement ?? document.documentElement);
}

function appliquer() {
  minuterie = 0;
  document.querySelectorAll(VERRES).forEach((verre) => {
    if (verre.closest('.player')) return;
    const valeur = `rgb(${sous(verre).map(Math.round).join(' ')})`;
    if (verre.style.getPropertyValue('--glass-under') !== valeur) verre.style.setProperty('--glass-under', valeur);
  });
}

function planifier(evenement) {
  const attente = { scroll: 120, toggle: 220 }[evenement?.type] ?? (Array.isArray(evenement) ? 350 : 0);
  clearTimeout(minuterie);
  if (evenement && evenement.type !== 'scroll') requestAnimationFrame(appliquer);
  minuterie = setTimeout(() => requestAnimationFrame(appliquer), attente);
}

planifier();
addEventListener('load', planifier);
addEventListener('resize', planifier);
addEventListener('scroll', planifier, { capture: true, passive: true });
document.addEventListener('toggle', planifier, true);
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', planifier);
new MutationObserver(planifier).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
new MutationObserver(planifier).observe(document.body ?? document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden', 'open'] });
