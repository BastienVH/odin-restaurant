const content = document.getElementById('content');
import Logo from './logo.png';

function header() {
  const header = document.createElement('div');

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