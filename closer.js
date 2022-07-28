console.log("connecting");

function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var Counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

/// 1,2,3,4


///.....................................................
let count = 0;
(function immediate() {
    if (count === 0) {
      let count = 1;
      console.log(count); // What is logged?
    }
    console.log(count); // What is logged?
  })();

//   Output - 1 , 0

//.........................................

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

  //Basically var will overwrite it value. After the loop get's over , it will run setTimeOut for 3 times which will print value of i which is now 3 and 3 times.

// =============================================================================================

function areaOfRec(a,b){
    let length = a;
    return function(){
      let breadth = b;
      area = length * breadth;
      console.log(`The area of rectangle is ${area}`);
    }
}
let rectangle = areaOfRec(2,5);
rectangle();//10

// ====================================================================================

function counter(){
  let count = 0;

  return function(){
    count++;
    console.log(`The counter is ${count}`);
  }
}
let countOne = counter();
countOne(); //The counter is 1
countOne(); //The counter is 2
countOne(); //The counter is 3
countOne(); //The counter is 4

// =================================================================================

//"Print Output

var a = 12;
(function () {
  alert(a);
})();

//Output - (alert) 12

// =====================================================================================

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

//Output - (alert) 12

// ============================================================================
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar =" + globalVar);
    
    })(456);
})(123);


//123
//456
//a
//b
//xyz
