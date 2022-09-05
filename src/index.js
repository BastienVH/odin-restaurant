import Logo from './logo.png';
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

const content = document.getElementById('content');

createHeader();
createMainSection();

const main = document.getElementById('main_section');
const btnHome = document.getElementById('Home');
const btnMenu = document.getElementById('Menu');
const btnContact = document.getElementById('Contact');

addClickEvents();
firstLoad();

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

function appendFooter() {
  const footer = document.createElement('footer');

  const credit = document.createElement('p');
  credit.innerHTML = 'Background image by <a href="https://pixabay.com/users/matthiasboeckel-3930681/">matthiasboeckel</a> from <a href="https://pixabay.com/">Pixabay</a>';

  footer.appendChild(credit);

  content.appendChild(footer);
}

function addClickEvents() {

  // add event listeners
  btnHome.addEventListener('click', () => {
    removeContent();
    removeAllActiveClasses();
    main.appendChild(home());
    btnHome.classList.add('active');
  });
  btnMenu.addEventListener('click', () => {
    removeContent();
    removeAllActiveClasses();
    main.appendChild(menu())
    btnMenu.classList.add('active');
  });
  btnContact.addEventListener('click', () => {
    removeContent();
    removeAllActiveClasses();
    main.appendChild(contact())
    btnContact.classList.add('active');
  });
}

function removeContent() {
  main.removeChild(main.lastChild);
}

function firstLoad() {
  main.appendChild(home());
  btnHome.classList.add('active');
  appendFooter();
}

function removeAllActiveClasses() {
  const btns = document.querySelectorAll('nav div');
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove('active');
  }
}