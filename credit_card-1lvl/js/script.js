import { el, mount, setChildren } from 'redom';

export const App = () => {
  const wrapper = el('div', {className: 'wrapper'});
  const card = el('div', {className: 'card'});

  mount(wrapper, card);
};