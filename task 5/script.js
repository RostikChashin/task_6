let button = document.querySelector('#button');

let inp = document.querySelector('#textField');

addEventListener('click', () => {
  console.log(inp.value);
});

let p = document.querySelector('#duplicateField');

addEventListener('submit', () => {
  p.textContent = inp.value;
  inp.value = '';
});
