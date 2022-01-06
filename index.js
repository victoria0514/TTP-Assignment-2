// 1 - forEach()
const array = ['a', 'b', 'c'];

function myEach (myArray, callback)
{
console.log(`${myArray}`) 
callback();
}

function finished() 
{
  console.log(`callback`);
}

myEach(array, finished);


// 2 - map()
const fruit = ['apple', 'orange', 'cherry'];

function myMap(myArray, callback) 
{
console.log(`${myArray}`) 
callback();
}

function finishedFruit()
{
 console.log(`Read fruit array`)
}

myMap(fruit, finishedFruit);


// 3 - filter()
const num = [4,6,7];
function myFilter(myArray, callback) 
{

  console.log(`${myArray}`)
  callback();
}

function nextNum() 
{
  console.log(`8 is next`);
}

myFilter(num, nextNum);


// 4 - some() (aka any())
const anyArray = ['Number', 1, true];

function mySome(myArray, callback)
{
  console.log(`${myArray}`)
  callback();
}

function aCallback()
{
  console.log(`success`);
}

mySome(anyArray, aCallback);


// 5 - every()
const arr = [100,200,300]

function myEvery(myArray, callback) 
{
  console.log(`${myArray}`);
  callback();
}

function test()
{
  console.log('test');
}

myEvery(arr,test);


// 6 - reduce()
const array1 = [5,6,7]

function myReduce(myArray, callback) 
{
  console.log(`test1 ${myArray}`);
  callback(myArray);
}

function reduction(myArray) 
{
  console.log(`test2 ${myArray}`);
}

myReduce(array1,reduction);


// 7 - includes()
const array2 = [1,2,3]
const target = 3;

function myIncludes(myArray, myTarget) 
{
  console.log(`array ${myArray} target ${myTarget}`);
  
  for (i = 0; i < myArray.length; i++) 
  {
    if(target === myArray[i])
    {
      return true;
    }
  }
  return false;
}

myIncludes(array2, target);


// 8 - indexOf()
const ourArray = ['a', 'bit', 'of', 'sample', 'text'];
const ourTarget = 'text';

function myIndexOf(myArray, myTarget)
{
  console.log(`array: ${myArray} target: ${myTarget}`);

  for(i = 0; i < myArray.length; i++)
  {
    if(myTarget === myArray[i])
    {
      return i; 
    }
  }
  return -1;
}

myIndexOf(ourArray, ourTarget);


// 9 - push()
const myPush = (array, element) 
=> {
    return [...array, element]
  }

  // 10 - lastIndexOf()
const myLastIndexOf = (array, element) => 
{
    for (let a = array.length - 1; a >= 0; a--) 
    {
      if (array[a] === element) return a;
    }
    return -1;
  }


// 11 - Object.keys()
const grabKeys = (object) => {
    let array = [];
    for (const prop in object) {
      array.push(prop);
    }
    
    return array;
  }


// 12 - Object.values()
const grabValues = (object) 
=> {
    let array = [];
    for (prop in object) 
    {
      array.push(object[prop]);
    }
    return array;
  }