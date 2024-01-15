const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:

function slice(n1,n2){
  let modifiedFood=[];
  for(let i=n1; i<n2-1; i++){
    modifiedFood.push(foods[i]);
  }
  return modifiedFood
}

// Progression 2:

function spliced(){
  foods.splice(2,0,"noodles","icecream");
  return foods;
}

// Progression 3:

function isEven(num){
  return num%2==0 ? true:false;
}
function isPrime(num){
  if (num <= 1) return false;
    for (let k = 2; k <= Math.sqrt(num); k++) { 
        if (num % k === 0) {
            return false;
        }}
    return num;
}
function checkNumber(numberArray,operation){
  let newarray = numberArray.filter(operation)
  return newarray
}

// Progression 4:

function reject(numberArray){
  nonPrimearray=[];
  numberArray.forEach(number=>{
    isPrime(number) ? null : nonPrimearray.push(number); 
})
  return nonPrimearray
}
function nonPrime(numberArray){
  return reject(numberArray)
}

// Progression 5:

const isEvenUsingLambda = number => number%2==0;


// Progression 6:

function squareOfNumber(number){
  return number**2
}
function findSquareOfNumbers(myArray){
  resultArray=[];
  for(let i=0;i<myArray.length;i++){
    square = squareOfNumber(myArray[i])
    resultArray.push(square)
  }
   return resultArray
}

// Progression 7:

function multiply(myArray){
  return myArray.reduce((mul, numb)=>{
      return mul*numb;
  },1);
}

function sumOfSquares(myArray){
  return myArray.map(squareOfNumber).reduce((sum,numb)=>{
      return sum+numb;
  },0)
}
