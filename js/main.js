
/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */

/*Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links: */

"use strict";

function sumAll(arr) {

  console.log( Math.max.apply(null, arr) + ' - ' + Math.min.apply(null, arr) );

  for (let i = Math.min.apply(null, arr) + 1; i < Math.max.apply(null, arr); i++){
    arr.push(i);
  }

  return arr.reduce( (sum, value) => (sum+value));
}


/* sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45. */


/*
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links: */

function diffArray(arr1,arr2 ) {
  var newArr = [];

  arr1.forEach( (elemento) => ( arr2.indexOf(elemento) === -1 ) ?  newArr.push(elemento) : null );

  arr2.forEach( (elemento) => ( arr1.indexOf(elemento) === -1 ) ?  newArr.push(elemento) : null );


  // Same, same; but different.
  return newArr;
}

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
/*
Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Referëncias : Regras para conversão de decimal para romano.
http://www.rapidtables.com/convert/number/how-number-to-roman-numerals.htm

Referëncias : Cálculos de potência.
http://www.oxfordmathcenter.com/drupal7/node/18
*/
function convertToRoman2(num) {
   let numberRef = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
   let romanSymbols = [[1,'I'], [4,'IV'], [5,'V'], [9,'IX'],[10,'X'],[40,'XL'],
   [50,'L'],[90,'XC'], [100,'C'], [400,'CD'], [500,'D'],[900,'CM'], [1000,'M']];
   let roman = '';
   let nRangeFim;

   while ( num !== 0){
     if (num >=1 && num < 4){
       roman += romanSymbols[0][1];
       num -= romanSymbols[0][0];
     } else if (num >=4 && num < 5){
       roman += romanSymbols[1][1];
       num -= romanSymbols[1][0];
     } else if (num >=5 && num < 9){
       roman += romanSymbols[2][1];
       num -= romanSymbols[2][0];
     } else if (num >=9 && num < 10){
       roman += romanSymbols[3][1];
       num -= romanSymbols[3][0];
     } else if (num >=10 && num < 40){
       roman += romanSymbols[4][1];
       num -= romanSymbols[4][0];
     } else if (num >=40 && num < 50){
       roman += romanSymbols[5][1];
       num -= romanSymbols[5][0];
     } else if (num >=50 && num < 90){
       roman += romanSymbols[6][1];
       num -= romanSymbols[6][0];
     } else if (num >=90 && num < 100){
       roman += romanSymbols[7][1];
       num -= romanSymbols[7][0];
     } else if (num >=100 && num < 400){
       roman += romanSymbols[8][1];
       num -= romanSymbols[8][0];
     } else if (num >=400 && num < 500){
       roman += romanSymbols[9][1];
       num -= romanSymbols[9][0];
     } else if (num >=500 && num < 900){
       roman += romanSymbols[10][1];
       num -= romanSymbols[10][0];
     } else if (num >=900 && num < 1000){
       roman += romanSymbols[11][1];
       num -= romanSymbols[11][0];
     } else if (num >=1000){
       roman += romanSymbols[12][1];
       num -= romanSymbols[12][0];
     }
   }
  return roman;
 }


 function convertToRoman(num) {
   let romanSymbols = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'], [100,'C'],
   [90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'], [4,'IV'],[1,'I']];
   let roman = '';
   let i ;

   while ( num !== 0){
     i = romanSymbols.findIndex((elemento,idx) => num >= elemento[0]);
     if (num >= romanSymbols[i][0]){
       roman += romanSymbols[i][1];
       num -= romanSymbols[i][0];
     }
 }
 return roman;
}

// console.log(convertToRoman2(1284));
// console.log(convertToRoman(1284));

/*

Wherefore art thou
Make a function that looks through an array of objects (first argument)
and returns an array of all objects that have matching property and value pairs
 (second argument).
 Each property and value pair of the source object has to be present in the
 object from the collection if it is to be included in the returned array.

For example, if the first argument is
 [{ first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }],
  and the second argument is { last: "Capulet" },
  then you must return the third object from the array (the first argument),
  because it contains the property and its value, that was passed on as the
  second argument.

  REference Find object
  https://www.linkedin.com/pulse/javascript-find-object-array-based-objects-property-rafael
*/


function whatIsInAName(collection, source) {
  'use strict';
  // What's in a name?
  var arr = [];
  var property = Object.getOwnPropertyNames(source); // source[property]
  var checkProp;
  var found;
  console.log(collection);
  console.log(source);

  collection.find( (elemento, idx) => {
    checkProp = Object.getOwnPropertyNames(source).every( (prop) =>
    elemento.hasOwnProperty(prop));

    found = Object.keys(source).every( (elem) => (elemento[elem] === source[elem]));

    if (checkProp && found) {
       arr.push(elemento);
    }
  });

  console.log(arr);

  // Only change code above this line
  return arr;
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); //should return [{ first: "Tybalt", last: "Capulet" }].
// whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }); // should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }); // should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }); // should return [{ "a": 1, "b": 2, "c": 2 }].

/*
Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it.
  For example if you mean to replace the word "Book" with the word "dog", it
  should be replaced as "Dog"

Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.

*/
function myReplace(str, before, after) {
  var newStr;
  var pos;
  var newAfter;

  pos = str.indexOf(before);

  if ( str[pos] ===  str[pos].toUpperCase() ){
    after = after[0].toUpperCase() + after.substr(1);
  }

  newStr = str.replace(before, after);

  return newStr;
}


// myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
// myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
// myReplace("His name is Tom", "Tom", "john"); // should return "His name is John".
// myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".

/*
Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Referencia:
http://web.ics.purdue.edu/~morelanj/RAO/prepare2.html
/* 1. If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add "ay."

      Example: Happy = appyh + ay = appyhay
      twoConsonants = str.substr(0,2); */
/* 2. If a word starts with two consonants move the two consonants to the end of the word and add "ay."

    Example: Child = Ildch + ay = Ildchay */

/* 3. If a word starts with a vowel add the word "way" at the end of the word.

  Example: Awesome = Awesome +way = Awesomeway */

function translatePigLatin(str) {
  var consonants = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";
  var vogals = "AEIOUaeiou";
  var pigLatin;

  if ( ( consonants.indexOf(str.substr(0,1)) != -1 ) && ( vogals.indexOf(str.substr(1,1)) != -1 ) ){
    pigLatin = str.substr(1) + str.substr(0,1) + "ay";
  } else if ( ( consonants.indexOf(str.substr(0,1)) != -1 ) && ( consonants.indexOf(str.substr(1,1)) != -1 ) ){
        pigLatin = str.substr(2) + str.substr(0,2) + "ay";
  } else if ( vogals.indexOf(str.substr(0,1)) != -1 ) {
        pigLatin = str.concat('way');
  }
  console.log(pigLatin);
  return pigLatin;
}

/*
translatePigLatin("california"); // should return "aliforniacay".
translatePigLatin("paragraphs"); // should return "aragraphspay".
translatePigLatin("glove"); // should return "oveglay".
translatePigLatin("algorithm"); // should return "algorithmway".
translatePigLatin("eight"); // should return "eightway".
*/

/*
DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code. */


function pairElement(str) {
  var baseDNA = [];
  var cadeiaDNA = "ATCGATTGAGCTCTAGCG";
  var pairDNA = "TAGCTAACTCGAGATCGC";
  var pos = -1;

  // for (var i = 0; i < str.length)
  str.split("").forEach( (elemento)=>{
    pos = cadeiaDNA.indexOf(elemento);
    baseDNA.push([elemento,pairDNA[pos]]);
  });

  console.log(baseDNA);
  return baseDNA;
}

/*
pairElement("ATCGA"); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG"); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA"); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/


/*
  Missing letters
  Find the missing letter in the passed letter range and return it.

  If all letters are present in the range, return undefined.

  Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

  Here are some helpful links:

  String.prototype.charCodeAt()
  String.fromCharCode()

*/

function fearNotLetter(str) {
  /*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
  var codeChar = str.charCodeAt(0);
  var char;

  for ( var i = 0; i < str.length; i++){
    if ( str.charCodeAt(i) != codeChar+i ){
      char = String.fromCharCode(codeChar+i);
      break;
    }
  }
  console.log( char );
  return char;
}

/*
fearNotLetter("abce"); // should return "d".
fearNotLetter("abcdefghjklmno"); // should return "i".
fearNotLetter("bcd"); // should return undefined.
fearNotLetter("yz"); // should return undefined.
*/
