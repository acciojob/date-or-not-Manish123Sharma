// var isDate = function (input) {
//   //   write your code here
// };

// // Do not change the code below.
// // const input = prompt("Enter Date.");
// alert(isDate(input));

var isDate = function (input) {
  // Check if input is a Date object
  if (Object.prototype.toString.call(input) === '[object Date]') {
    return !isNaN(input.getTime());
  }

  // Check if input is a string or number that can be parsed into a valid date
  if (typeof input === 'string' || typeof input === 'number') {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  }

  // For all other types, return false
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
