const textField = document.querySelector('#ss');

textField.addEventListener('click', function (evt) {
  let userText = prompt('Введите текст');
  textField.textContent = userText;
  evt.preventDefault();
});
