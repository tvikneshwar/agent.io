//listen for submit event//
document.getElementById('registrationform').addEventListener('submit', formSubmit);

//Submit form
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  let bio = document.querySelector('#bio').value;
  let job = document.querySelector('#job').value;
  let interest = document.querySelector('#interest').value;

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBda-9bZjeQBBg-jYeFb2rcuKKrcm1NIEU",
    authDomain: "bairavi-83fd2.firebaseapp.com",
    projectId: "bairavi-83fd2",
    storageBucket: "bairavi-83fd2.appspot.com",
    messagingSenderId: "482331018891",
    appId: "1:482331018891:web:1bfdb886d72b293a2c768e"
  };
