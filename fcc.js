

// var aa = alert("welcome");

// function destroyer(arr, arg1 ,arg2, arg3) {
//   // Remove all the values
//   arr1 = arr.filter(function(val){
//     return val !== arg1 && val !== arg2 && val !== arg3;
//   });
//   return arr1;
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// destroyer(["tree", "hamburger", 53], "tree", 53);

// ----------------------------------------------------------------------------
//
// function sumAll(arr) {

//   arr = arr.sort(function(a , b){
//     return a-b;
//   });
//   var arr1 = [];
//   var diff = arr[1]-arr[0];

//   for (var i = 0; i <= diff; i++){
//   var next = arr[0] + i;
//   arr1.push(next);
//   } return arr1.reduce(function(val1, val2){
//     return  val1 + val2;
//   });

// }

// sumAll([1, 4]);
// sumAll([10, 5]);
// sumAll([10, 1]);

// ------------------------------------------------------------------------------


function convertToRoman(num) {
var numb = document.getElementById("number");
num = numb.value;
console.log(num);

if(num == ''){
	result.innerHTML = '<h4>Please enter a number!</h4>';
}
// else if(typeof(num) == 'NaN') {
// 	result.innerHTML = '<h4>Please enter a correct number!</h4>';
// }
else {

  var roman = "";
  var numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (var i = 0; i < numbers.length; i++) {
    while(num >= numbers[i]) {
      roman += numerals[i];
      num -= numbers[i];
    }
  }
  console.log(roman);
result.innerHTML = "<h3>" + roman + "</h3>";
 }
}



var convert = document.getElementById("btn");
var result = document.getElementById("result");

convert.addEventListener('click', function(num){convertToRoman(num)});
numb.addEventListener('change', function(num){convertToRoman(num)});

var para = document.querySelector('.left');
   function timeIn(){
    var period = new Date().toLocaleTimeString();
    para.innerHTML = '<h1>' + period + '</h1>';
   };
   setInterval(timeIn, 1000);
// ------------------------------------------------------------------------------
