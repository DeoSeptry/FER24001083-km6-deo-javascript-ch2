// Function to check if the input is an array
var is_array = function (input) {
  //menggunakan operator intanceof
  //   if (input instanceof Array) return true;
  //   return false;

  //mengecek objek apa?
  console.log("toString.call(input) ", toString(input));

  //menggunakan metode Array.isArray()
  //   if (Array.isArray(input)) return true;
  //   return false;

  // Using toString method to get the class of the input and checking if it is "[object Array]"
  if (toString.call(input) === "[object Array]") return true;

  return false;
};

console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));
console.log(is_array([]));
console.log(is_array(3));
