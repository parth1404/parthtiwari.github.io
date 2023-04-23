const firebaseConfig = {
  apiKey: "AIzaSyAUlha1nU0u2Zls2cXhBMzDKRy4esYCzRs",
  authDomain: "parth-df03e.firebaseapp.com",
  databaseURL: "https://parth-df03e-default-rtdb.firebaseio.com",
  projectId: "parth-df03e",
  storageBucket: "parth-df03e.appspot.com",
  messagingSenderId: "816679373785",
  appId: "1:816679373785:web:0cb4d517be8ccf0d77e7c8",
  measurementId: "G-0MRRMSYK47"
};
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}