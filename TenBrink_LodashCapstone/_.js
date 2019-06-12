/* Capstone Project for Codecademy JS Intensive
Overview: Recreate methods from Lodash library
Submitted by: Marisa Ten Brink
June 12, 2019*/

//Creates library to hold methods
const _ = {
  
  // Beginning of clamp method
  clamp(num, lower, upper){
    if(num > lower && num < upper) {
      return num;
    }
    if (num > upper) {
      return upper;
    }
    if (num < lower) {
      return lower;
    }
  }, 
  
  //Beginning of inRange method
  inRange(num, start, end) {
    if (start === undefined) {
      return start = 0;
    } 
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let newStart = end;
      end = start;
      start = newStart;
    }
    if (num > start && num < end) {
      return true;
    } else {
      return false;
    }
  },
  
  // Beginning of words method
  words(string) {
   return newArray = string.split(" ");
  },
  
  //Beginning of pad method
  pad(string, length) {
    if(length <= string.length){
      return string;
    }
    if (length > string.length) {
    	const startPadding = (Math.floor((length - string.length) / 2));
    const endPadding = (length - string.length - startPadding);
  	const newString = " ".repeat(startPadding) + string + " ".repeat(endPadding);
    return newString;
    }
  }, 
  
  //Beginning of has method
  has(obj, key) {
    const newArray = Object.keys(obj);
    console.log(newArray);
  	return newArray.includes(key);
  }, 
  
  //Beginning of invert method
  invert(obj) {
  	const invertedObj = {};
    for (var key in obj) {
      let originalValue = obj.key;
      invertedObj.originalValue = key;
    }
    return invertedObj;
    }, 
  
  //Beginning of findKey method
  findKey(object, predicate) {
    for (var key in object) {
      let value = object[key];
      const predicateReturnValue = predicate(value);  			 if (predicateReturnValue) {
        return key;
        }
    }
    return undefined;
    }, 
  
  //Beginning of drop method
  drop(array, num) {
    if (num === undefined) {
      num = 1;
    }
    let newArray = array.slice(num);      
  	return newArray; 
	}, 
  
  //Beginning of dropWhile method
  dropWhile(array, predicate) {
    const cb = (element, index) => {
      return !predicate(element, index, array);
    };
    const dropNumber = array.findIndex(cb); 
    //console.log(dropNumber);
    const droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  }, 
  
  //Beginning of chunk method
  chunk(array, size) {
    if (size === undefined) {
      size = 1;
    }
  	const chunkedArray = [];
    for (i = 0; i < array.length; ) {
      let innerArray = array.slice(i, i+size);
      chunkedArray.push(innerArray);
      i = i+size;
    }
    return chunkedArray;
  }
};
  



// Do not write or modify code below this line.
module.exports = _;// JavaScript Document