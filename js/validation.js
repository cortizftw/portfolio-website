/** Floating registraion form **/
/** Checks if all required fields are populated **/


document.addEventListener("DOMContentLoaded", function() {
  var submitButton = document.querySelector(".close-button");
  if (submitButton) {
    submitButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default form submission
      form_validation(); // Call your validation function
    });
  }

  var registrationForm = document.querySelector('form[name="Registration"]');
  if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission
      if (form_validation()) {
        // If validation passes, hide both forms
        hideRegistrationForm();
        hideLoginForm();
      }
    });
  }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  if (login_validation()) {
    // Hide both forms
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
  }
});



function form_validation()
{
  var userID = document.Registration.userID.value;
  var password = document.Registration.password.value;
  var name = document.Registration.name.value;
  var address = document.Registration.address.value;
  var country = document.Registration.country.value;
  var zipcode = document.Registration.zipcode.value;
  var email = document.Registration.email.value;
  var sex = document.Registration.sex.value;
  var language = document.Registration.language.value;
  var about = document.Registration.about.value;


  if (validation_userID(userID, 5, 12))
  {
    if (validation_password(password, 7, 12))
    {
      if (validation_name(name))
      {
        if (validateCountry(country))
        {
          if (validation_zipcode(zipcode))
          {
            if (validation_email(email))
            {
              if (validateSex())
              {
                if (validation_language(language)) {
                  alert("Form submitted successfully");
                  hideRegistrationForm();
                  showLoginForm();
                  return true;
                }
              }
            }
          }
        }
      }
    }
  }
  return false
}

function validation_userID(userID,min,max)
{
  var userID_len = userID.length;
  if(userID_len === 0 || userID_len < min || userID_len > max)
  {
    alert("User ID should not be empty / length be between "+min+" to "+max);
    return false;
  }
  return true;
}

function validation_password(password,min,max)
{
  var password_len = password.length;
  if(password_len === 0 || password_len < min || password_len > max)
  {
    alert("Password should not be empty / length be between "+min+" to "+max);
    return false;
  }
  return true;
}

function validation_name(name)
{
  var name_regexp = /^[A-Za-z\s]+$/;
  if(!name_regexp.test(name))
  {
    alert("Name should not be empty and must contain alphabets only");
    return false;
  }
  return true;
}

function validateCountry() {
  var countrySelect = document.getElementById('country');
  var selectedCountry = countrySelect.value;

  if (selectedCountry === "") {
    alert("Please select a country.");
    return false;
  }

  return true;
}

function validation_zipcode(zipcode)
{
  var zipcode_regexp = /^[0-9]+$/;
  if(!zipcode_regexp.test(zipcode))
  {
    alert("Zipcode should not be empty and must contain numbers only");
    return false;
  }
  return true;
}

function validation_email(email)
{
  var email_regexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if(!email_regexp.test(email))
  {
    alert("Email should not be empty and must be in the format of abc@mail.com");
    return false;
  }
  return true;
}

function validateSex() {
  var maleRadio = document.getElementById('male');
  var femaleRadio = document.getElementById('female');

  if (!maleRadio.checked && !femaleRadio.checked) {
    alert('Please select your sex.');
    return false;
  }

  return true;
}

function validation_language() {
  var radios = document.querySelectorAll('input[name="language"]');
  var isChecked = false;

  radios.forEach(function(radio) {
    if (radio.checked) isChecked = true;
  });

  if (!isChecked) {
    alert("Please select a language.");
    return false;
  }

  return true;
}

// Function to handle form validation for login
function login_validation() {
  var username = document.forms["LoginForm"]["username"].value;
  var pw = document.forms["LoginForm"]["pw"].value;

  // Check if username and password are valid
  if (validation_username(username) && validation_pw(pw)) {
    alert("Login successful");
    hideLoginForm();
    hideRegistrationForm();
    return true;
  }
  else
  {
    return false;
  }
}

// Function to validate username
function validation_username(username) {
  // Compare entered username with hardcoded value
  if (username !== "8842943") {
    alert("Username should be 8842943");
    return false;
  }
  return true;
}

// Function to validate password
function validation_pw(pw) {
  // Compare entered password with hardcoded value
  if (pw !== "charina.ortiz") {
    alert("Password should be charina.ortiz");
    return false;
  }
  return true;
}


// Function to show the login form
function showLoginForm() {
  var loginForm = document.getElementById('login-form');
  loginForm.style.display = 'block'; // Show the login form
}

// Function to hide the login form
function hideLoginForm() {
  var loginForm = document.getElementById('login-form');
  loginForm.style.display = 'none'; // Hide the login form
}



function hideRegistrationForm() {
  var registrationForm = document.querySelector('.registration-form');
  registrationForm.style.display = 'none';
}
