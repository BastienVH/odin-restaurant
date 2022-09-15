function menu() {
  const main = document.getElementById('main');
  const element = document.createElement('div');
  element.classList.add('content');

  const para1 = document.createElement('p');
  para1.innerText = 'This is the menu of our friterie.';

  element.appendChild(para1);

  main.appendChild(element);
}

export { menu };