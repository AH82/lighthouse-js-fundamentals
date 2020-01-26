const lastIndexOf = function (theArray, theValue){
  let lastIndex = -1;
  for ( let i = -1 ; i < theArray.length; i++){
    if ( theArray[i] == theValue){
      lastIndex = i; 
    }
    //else lastIndex = -1; // DIDN'T WORK, FIXED BY REASSIGNING lastIndex VARIABLE TO -1 --> WHY ??
  }
  return lastIndex;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

// COMMON "HEADER" FOR BOTH TRIALS (1) & (2) : ALSO DIDN'T WORK

/*   if ( someArray == [null]){
    return -1;
  } */
  //console.log(someArray.length);

// TRIAL NUMBER (1) : FOR LOOP,  IN REVERSE ARRAY ORDER : 
// WHY DIDN'T IT WORK ?
// SCOPE : INSIDE THE FUNCTION.

/*
   for ( let i = someArray.length-1; i >= 0 ; i--){
    if (  someArray[i] === theValue){
      return i;
    }
    else return -1;
  } 
  
*/

// TRIAL NUMBER (2) : WHILE LOOP, IN REVERSE ARRAY ORDER : 
// WHY DIDN'T IT WORK ?
// SCOPE : INSIDE THE FUNCTION.
/* 
  let i = theArray.length-1;
  while (i >= 0){
    
    if ( theArray[i] === theValue){
      return  i;
    }
    else i = -1;
    i--;
  }
return i; */






 
 
 
 
 
