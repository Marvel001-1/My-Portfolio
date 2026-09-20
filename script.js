document.getElementById('year').textContent = new Date().getFullYear();

  var menuBtn = document.getElementById('menuBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  menuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { mobileMenu.classList.remove('open'); });
  });

  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  function validateField(fieldId, isValid) {
    var field = document.getElementById(fieldId);
    if (isValid) {
      field.classList.remove('invalid');
    } else {
      field.classList.add('invalid');
    }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var nameValid = name.length > 0;
    var emailValid = emailPattern.test(email);
    var messageValid = message.length > 0;

    validateField('nameField', nameValid);
    validateField('emailField', emailValid);
    validateField('messageField', messageValid);

    if (nameValid && emailValid && messageValid) {
      status.textContent = 'Thanks, ' + name + '! Your message has been received.';
      status.className = 'success';
      form.reset();
    } else {
      status.className = '';
      status.textContent = '';
    }
  });