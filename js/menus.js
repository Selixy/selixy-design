const CONTENT = ':scope > .burger-menu, :scope > .panel-list, :scope > .chat__picker';
const OPEN = 'details.burger[open], details.panel-group[open], details.chat__react[open]';
const SUMMARY = 'details.burger > summary, details.panel-group > summary, details.chat__react > summary';
const REDUCED = '(prefers-reduced-motion: reduce)';

function slide(details, list, opening) {
  const full = list.scrollHeight;
  const ms = parseFloat(getComputedStyle(list).getPropertyValue('--menu-deploy')) || 140;
  list.style.overflow = 'hidden';
  list.style.boxSizing = 'border-box';
  details.classList.toggle('is-closing', !opening);
  const animation = list.animate([{ height: `${opening ? 0 : full}px` }, { height: `${opening ? full : 0}px` }], {
    duration: ms, easing: opening ? 'cubic-bezier(.2, .8, .2, 1)' : 'cubic-bezier(.4, 0, .8, .2)', fill: 'forwards',
  });
  animation.onfinish = () => {
    list.style.overflow = '';
    list.style.boxSizing = '';
    if (!opening) { details.classList.remove('is-closing'); details.open = false; }
    animation.cancel();
  };
}

function close(details) {
  const list = details.querySelector(CONTENT);
  if (!list || matchMedia(REDUCED).matches) {
    details.open = false;
  } else if (details.matches('.panel-group') && getComputedStyle(list).position !== 'absolute') {
    slide(details, list, false);
  } else {
    details.classList.add('is-closing');
  }
}

function onClick(event) {
  const summary = event.target.closest(SUMMARY);
  if (!summary || !summary.parentElement.open) return;
  event.preventDefault();
  if (!summary.parentElement.classList.contains('is-closing')) close(summary.parentElement);
}

function onAnimationEnd(event) {
  const details = event.target.parentElement;
  if (!details?.classList.contains('is-closing') || !event.target.matches('.burger-menu, .panel-list, .chat__picker')) return;
  details.classList.remove('is-closing');
  details.open = false;
}

function dismiss(event) {
  if (event.type === 'keydown' && event.key !== 'Escape') return;
  const open = [...document.querySelectorAll(OPEN)].filter((details) => !details.classList.contains('is-closing')
    && ['absolute', 'fixed'].includes(getComputedStyle(details.querySelector(CONTENT) ?? details).position));
  const lists = [...document.querySelectorAll('.select__list:not([hidden]):not(.is-closing)')];
  if (event.type === 'click') {
    open.filter((details) => !details.contains(event.target)).forEach(close);
    return;
  }
  const innermost = open.filter((details) => !open.some((other) => other !== details && details.contains(other)));
  if (!innermost.length && !lists.length) return;
  event.preventDefault();
  lists.forEach((list) => list.parentElement.querySelector('.select__value')?.click());
  innermost.forEach((details) => {
    if (details.contains(document.activeElement)) details.querySelector(':scope > summary').focus();
    close(details);
  });
}

document.addEventListener('click', onClick);
document.addEventListener('click', dismiss, true);
document.addEventListener('keydown', dismiss);
document.addEventListener('animationend', onAnimationEnd);
document.addEventListener('toggle', (event) => {
  const details = event.target;
  if (!details.matches?.('details.panel-group') || !details.open || matchMedia(REDUCED).matches) return;
  const list = details.querySelector(CONTENT);
  if (list && getComputedStyle(list).position !== 'absolute') slide(details, list, true);
}, true);
