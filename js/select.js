const MOVES = { ArrowDown: 1, ArrowUp: -1 };

function buildOptions(select, list) {
  list.replaceChildren(...[...select.options].map((option, index) => {
    const item = document.createElement('li');
    const button = document.createElement('button');
    item.setAttribute('role', 'presentation');
    Object.assign(button, { type: 'button', textContent: option.textContent, tabIndex: -1 });
    button.setAttribute('role', 'option');
    button.dataset.index = String(index);
    item.append(button);
    return item;
  }));
}

function sync(select, value, list) {
  value.textContent = select.selectedOptions[0]?.textContent ?? '';
  for (const option of list.querySelectorAll('[role="option"]')) {
    option.setAttribute('aria-selected', String(Number(option.dataset.index) === select.selectedIndex));
  }
}

function setOpen(value, list, open) {
  value.setAttribute('aria-expanded', String(open));
  if (open) {
    list.classList.remove('is-closing');
    list.hidden = false;
    (list.querySelector('[aria-selected="true"]') ?? list.querySelector('[role="option"]'))?.focus();
  } else if (!list.hidden) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) list.hidden = true;
    else list.classList.add('is-closing');
  }
}

function onListKey(event, value, list) {
  const options = [...list.querySelectorAll('[role="option"]')];
  const index = options.indexOf(document.activeElement);
  if (event.key in MOVES) {
    event.preventDefault();
    options[Math.min(options.length - 1, Math.max(0, index + MOVES[event.key]))]?.focus();
  } else if (event.key === 'Home' || event.key === 'End') {
    event.preventDefault();
    options[event.key === 'Home' ? 0 : options.length - 1]?.focus();
  } else if (event.key === 'Escape' || event.key === 'Tab') {
    setOpen(value, list, false);
    if (event.key === 'Escape') value.focus();
  }
}

function enhance(root) {
  const select = root.querySelector('select');
  const value = document.createElement('button');
  const list = document.createElement('ul');
  Object.assign(value, { type: 'button', className: 'select__value' });
  value.setAttribute('aria-haspopup', 'listbox');
  value.setAttribute('aria-label', root.closest('.field')?.querySelector('label')?.textContent ?? select.name);
  Object.assign(list, { className: 'select__list glass panel-list', hidden: true });
  list.setAttribute('role', 'listbox');
  select.hidden = true;
  root.append(value, list);
  buildOptions(select, list);
  sync(select, value, list);
  value.addEventListener('click', () => setOpen(value, list, list.hidden || list.classList.contains('is-closing')));
  value.addEventListener('keydown', (event) => { if (event.key in MOVES) { event.preventDefault(); setOpen(value, list, true); } });
  list.addEventListener('keydown', (event) => onListKey(event, value, list));
  list.addEventListener('click', (event) => {
    const option = event.target.closest('[role="option"]');
    if (!option) return;
    select.selectedIndex = Number(option.dataset.index);
    select.dispatchEvent(new Event('change', { bubbles: true }));
    sync(select, value, list);
    setOpen(value, list, false);
    value.focus();
  });
  document.addEventListener('click', (event) => { if (!root.contains(event.target)) setOpen(value, list, false); });
  list.addEventListener('animationend', () => { if (list.classList.contains('is-closing')) { list.classList.remove('is-closing'); list.hidden = true; } });
}

document.querySelectorAll('.select').forEach(enhance);
