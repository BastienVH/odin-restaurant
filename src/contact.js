function contact() {
  const element = document.createElement('div');
  element.classList.add('content');

  const para1 = document.createElement('p');
  para1.innerText = 'Want to place an order or meet us in our friterie?\n You\'ll find all of the deets below!';
  element.appendChild(para1);
  
  const p2 = document.createElement('p');
  p2.innerText = 'You can find us at 211 E River Street, Antwerp, OH 45813.'
  element.appendChild(p2);

  const p3 = document.createElement('p');
  p3.innerHTML = 'Send us an email at <strong>frietjes@thefryshackisdefinitelyarealrestaurant.com</strong>.';
  element.appendChild(p3);

  return element;
}

export { contact };