"use strict";

// TODO 1) Using Javascript classes, can you write a class that will contain one method and one getter. The method can
//  be called getField and simply return the value of your getter. The getter can return a string of foo. Then, use the
//  newly created class to call the getField method and log the return value.

class Example {
    constructor() {
        this.property = 'foo';
    }
    // Getter
    get field() {
        return this.property;
    }
    // Method
    getField() {
        return this.field;
    }
}

const example = new Example();
console.log(example.getField());

// TODO 2) Using WebdriverIO, assume there is a page with an input like <input data-field="score" />. How would you set
//  a value of 123 in the input? Then, after you set the value how would you get the value of that same input?

// it('change value of input', async () => {
//     let input = await $('[data-field="score"]');
//
//     //--| Set value
//     await input.setValue(123);
//
//     //--| Get value
//     let value = await input.getValue();
// }