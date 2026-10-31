const SURFACES = '.glass, .button, .form-card, .header, .card, .surface, .panel, .pill, .tag, .badge, .link-card, .floating-button, .popup__sheet, .chat__actions, .chat__compose, .panel-group > .panel-list';
let timer = 0;

function parseColor(text) {
  const hex = /#([0-9a-f]{6})\b/i.exec(text ?? '');
  if (hex) return [0, 2, 4].map((i) => parseInt(hex[1].slice(i, i + 2), 16)).concat(1);
  const match = /(rgba?|color)\(([^)]*)\)/.exec(text ?? '');
  if (!match) return null;
  const numbers = match[2].replace('srgb', '').split(/[\s,/]+/).filter(Boolean).map(Number);
  const scale = match[1] === 'color' ? 255 : 1;
  return [numbers[0] * scale, numbers[1] * scale, numbers[2] * scale, numbers[3] ?? 1];
}

function backdropOf(element) {
  const chain = [];
  for (let n = element; n && n.nodeType === 1; n = n.parentElement) chain.unshift(n);
  let tint = [255, 255, 255];
  for (const node of chain) {
    const style = getComputedStyle(node);
    const before = getComputedStyle(node, '::before');
    const layers = [style.backgroundColor, before.backdropFilter !== 'none' ? before.backgroundColor : null, node.matches(SURFACES) ? style.getPropertyValue('--glass-under') : null];
    const fill = parseFloat(style.getPropertyValue('--glass-fill')) / 100;
    const parsed = layers.map(parseColor);
    if (parsed[2]) parsed[2][3] = fill;
    for (const layer of parsed.filter(Boolean)) {
      tint = tint.map((v, i) => v * (1 - layer[3]) + layer[i] * layer[3]);
    }
  }
  return tint;
}

function colorBelow(element) {
  const r = element.getBoundingClientRect();
  const width = element.offsetWidth;
  const height = element.offsetHeight;
  if (!width || !height) return backdropOf(element.parentElement ?? document.documentElement);
  const [ox, oy] = getComputedStyle(element).transformOrigin.split(' ').map(parseFloat);
  const x = r.left - ox * (1 - r.width / width) + width / 2;
  const y = r.top - oy * (1 - r.height / height) + height / 2;
  const hits = document.elementsFromPoint(x, y);
  const below = hits.find((t) => !element.contains(t));
  return backdropOf(below ?? element.parentElement ?? document.documentElement);
}

function apply() {
  timer = 0;
  document.querySelectorAll(SURFACES).forEach((surface) => {
    if (surface.closest('.player')) return;
    const value = `rgb(${colorBelow(surface).map(Math.round).join(' ')})`;
    if (surface.style.getPropertyValue('--glass-under') !== value) surface.style.setProperty('--glass-under', value);
  });
}

function schedule(event) {
  const delay = { scroll: 120, toggle: 220 }[event?.type] ?? (Array.isArray(event) ? 350 : 0);
  clearTimeout(timer);
  if (event && event.type !== 'scroll') requestAnimationFrame(apply);
  timer = setTimeout(() => requestAnimationFrame(apply), delay);
}

schedule();
addEventListener('load', schedule);
addEventListener('resize', schedule);
addEventListener('scroll', schedule, { capture: true, passive: true });
document.addEventListener('toggle', schedule, true);
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', schedule);
new MutationObserver(schedule).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
new MutationObserver(schedule).observe(document.body ?? document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden', 'open'] });
