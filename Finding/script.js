// let country = "Pakistan";
// console.log(country.lastIndexOf("a"));

// let text = "Syeda Itrat Absar";
// let segIndex = text.lastIndexOf("rat");
// console.log(segIndex);

// let Firstname = prompt("Enter your First name");
// let Firstchar = Firstname.charAt(Firstname.length-2);
// console.log(Firstchar);

// let text = "Mr Blue has blue house and a blue car";
// let result = text.replace(/blue/g,"red");
// console.log(result);

//DATE TIME

let d = new Date();
d.setFullYear(2005);
d.setDate(25);
d.setMonth(5);
d.setHours(12);
console.log(d);

//FUNCTIONS

function myFunction() {
    console.log("itrat");
    console.log("i love cars");
}
myFunction();

function myFunction(a,b) {
    console.log(a * b);
}
myFunction(4,5);
myFunction(33,55);

function sum(x,y){
    z = y + x;
    return z
}
let value = sum(2,9);
console.log(value);

function tellTime() {
    var now = new Date(25);
    var theHr = now.getHours(3);
    var theMin = now.getMinutes(2);
    alert("Current time: "+ theHr + ":" + theMin);
    }
    tellTime();

    function toCelsius(fahrenheit) {
        return (5/9) * (fahrenheit-32);
      }
      let value2 = toCelsius(22);
      console.log(value2);

      function square(a) {
        return a * a;
      }
      console.log(square(25));
      console.log(square(31));

      function factorial(n) {
        if( n === 0 || n === 1) {
            return 1;
        }
        else{
            return n * factorial(n - 1);
        }
      }
      console.log(factorial(5));