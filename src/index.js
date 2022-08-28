import Logo from './logo.png';
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

const content = document.getElementById('content');

createHeader();
createMainSection();
addClickEvents();

function createHeader() {
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

  content.appendChild(header);
}

function createMainSection() {
  const main = document.createElement('div');
  main.id = 'main_section';

  main.appendChild(nav());
  main.appendChild(home());

  content.appendChild(main);
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

function addClickEvents() {
  const main = document.getElementById('main_section');
  const btnHome = document.getElementById('Home');
  const btnMenu = document.getElementById('Menu');
  const btnContact = document.getElementById('Contact');

  // add event listeners
  btnHome.addEventListener('click', () => {
    main.appendChild(home());
  });
  btnMenu.addEventListener('click', () => {
    main.appendChild(menu())
  });
  btnContact.addEventListener('click', () => {
    main.appendChild(contact())
  });
}