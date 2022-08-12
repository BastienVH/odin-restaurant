const content = document.getElementById('content');
import Logo from './logo.png';
import { home } from './home';

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

content.appendChild(header());
content.appendChild(home());