
function AgeCalculate() {
  var dobInput = document.getElementById("dob").value;
  var dob = new Date(dobInput);
  var currentDate = new Date();

  var timeDiff = currentDate - dob;
  var age = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000));

  document.getElementById("totalAge").innerHTML = "Your age is: " + age + " years.";
}

