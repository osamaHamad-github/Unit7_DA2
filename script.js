document.getElementById('check').addEventListener('click', checkNegative)

function checkNegative () {
  // getting the inputted number
  let number = document.getElementById('number').value

  // changing type string to type int 
  number = parseInt(number)

  // checking if number is negative 
  if (number < 0) {
    // changing result to negative
    document.getElementById('result').innerText = 'your number is negative'
  } else {
    // changing result to positive
    document.getElementById('result').innerText = 'your number is positive'
  }
}