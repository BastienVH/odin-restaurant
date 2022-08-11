function home() {
  const element = document.createElement('div');
  element.classList.add = 'main';

  const para1 = document.createElement('p');
  para1.innerText = 'Welcome to the Fry Shack, where you\'ll get the best French fries in the state!\n Take a moment to explore the menu, with our wide range of "vleesekes" and sauces (some of them homemade!).';
  
  element.appendChild(para1);
  const para2 = document.createElement('p');
  para2.innerText = 'If you\'re ever in Antwerp, OH, make sure you drop by. You won\'t regret it!';
  
  element.appendChild(para2);
  return element;
}

export { home };