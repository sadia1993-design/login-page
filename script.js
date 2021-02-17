const loginForm = document.getElementById('loginForm');
const userField = document.getElementById('userField');
const passField = document.getElementById('passField');

loginForm.addEventListener('submit', function (e) {
  let username = document.forms['loginForm'].username.value;
  let pass = document.forms['loginForm'].pass.value;

  if (username.trim() == '' || pass.trim() == '') {
    e.preventDefault();

    if (username.trim() == '') {
      userField.classList.add('validate-text');
      userField.innerHTML = 'Username field must not be empty';
    } else {
      userField.classList.remove('validate-text');
      userField.innerHTML = '';
    }

    if (pass.trim() == '') {
      passField.classList.add('validate-text');
      passField.innerHTML = 'Password field must not be empty';
    } 
    else {
      passField.classList.remove('validate-text');
      passField.innerHTML = '';
    }
  } else {
    userField.classList.remove('validate-text');
    passField.classList.remove('validate-text');
    userField.innerHTML = '';
    passField.innerHTML = '';
  }
});
