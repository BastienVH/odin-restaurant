const content = document.getElementById('content');
import Logo from './logo.png';
import { home } from './home';
import { menu } from './menu';

function header() {
  const header = document.createElement('div');
  header.id = 'header';

  // add header logo
  const myLogo = new Image();
  myLogo.src = Logo;
  myLogo.id = 'logo';
  header.appendChild(myLogo);

  // add header text
  const headerTxt = document.createElement('h1');
  headerTxt.innerText = 'The Fry Shack';
  header.appendChild(headerTxt);

  return header;
}

function mainSection() {
  const main = document.createElement('div');
  main.id = 'main_section';

  main.appendChild(nav());
  main.appendChild(home());

  return main;
}

function nav() {
  const nav = document.createElement('nav');

  nav.classList.add = 'nav';

  const navArray = ['Home', 'Menu', 'Contact'];

  for (let i = 0; i < navArray.length; i++) {
    const element = document.createElement('div');
    element.id = `${navArray[i]}`;
    element.innerText = navArray[i];
    nav.appendChild(element);
  }

  return nav;
}

content.appendChild(header());
content.appendChild(mainSection());