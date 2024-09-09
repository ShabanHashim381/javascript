const buttons = document.querySelectorAll('#button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.class === 'grey') {
      body.style.backgroundColor = e.target.class;
    }
    if (e.target.class === 'white') {
      body.style.backgroundColor = e.target.class;
    }
    if (e.target.class === 'blue') {
      body.style.backgroundColor = e.target.class;
    }
    if (e.target.class === 'yellow') {
      body.style.backgroundColor = e.target.class;
    }
  });
});
