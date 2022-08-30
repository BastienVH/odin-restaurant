function contact() {
  const element = document.createElement('div');
  element.classList.add('content');

  const para1 = document.createElement('p');
  para1.innerText = 'Here you can find the contact details of our friterie.';

  element.appendChild(para1);

  return element;
}

export { contact };