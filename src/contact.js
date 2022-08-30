function contact() {
  const element = document.createElement('div');
  element.classList.add('content');

  const para1 = document.createElement('p');
  para1.innerText = 'Here you can find the contact details of our friterie.';
  element.appendChild(para1);
  
  const p2 = document.createElement('p');
  p2.innerText = 'Come grab a bite to eat at one of our tables, or take your order to go.\nEither way you\'ll find us at 211 E River Street, Antwerp, OH 45813.'
  element.appendChild(p2);

  return element;
}

export { contact };