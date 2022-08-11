const content = document.getElementById('content');

function header() {
  const header = document.createElement('div');

  // add header text
  const headerTxt = document.createElement('h1');
  headerTxt.innerText = 'The Fry Shack';
  header.appendChild(headerTxt);

  return header;
}

content.appendChild(header());