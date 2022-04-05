// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let roman = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }

    if(s == '') return 0;
    if(s.length == 1) return roman[s];

    let sum = 0;
    let arr = s.split('');

    while(arr.length > 0) {
        if (arr.length > 1) {
            if (arr[0] == 'I' && arr[1] == 'V') { sum += 4; arr.shift(); arr.shift(); continue; }
            if (arr[0] == 'I' && arr[1] == 'X') { sum += 9; arr.shift(); arr.shift(); continue; }
            if (arr[0] == 'X' && arr[1] == 'L') { sum += 40; arr.shift(); arr.shift(); continue; }
            if (arr[0] == 'X' && arr[1] == 'C') { sum += 90; arr.shift(); arr.shift(); continue; }
            if (arr[0] == 'C' && arr[1] == 'D') { sum += 400; arr.shift(); arr.shift(); continue; }
            if (arr[0] == 'C' && arr[1] == 'M') { sum += 900; arr.shift(); arr.shift(); continue; }
        }
        sum += roman[arr[0]];
        arr.shift();
    }
    return sum;
};

console.log(romanToInt('III'));