function menu() {
  const element = document.createElement('div');

  element.classList.add = 'menu';

  element.innerText = 'This is the menu of our friterie.';

  return element;
}

export { menu };