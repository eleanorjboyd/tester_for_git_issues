
// function to print the date
/**
 * 
 */
function printDate() {
  var d = new Date();
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  var date = month + "/" + day + "/" + year;
  document.getElementById("date").innerHTML = date;
}

/**
 * Returns the word 'bar'
 * @return {string}
 */
function foo() {
    return 'bar';
  }