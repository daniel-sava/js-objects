/*
    PASS BY VALUE
*/
let initialValue = 40;

function changeNumber(value) {
    value = 20;
    console.log(value);
}

/*
    changeNumber(value = 40)
*/

changeNumber(initialValue);
console.log(initialValue);

function changeString(text) {
    text = 'Changed String';
    console.log(text);
}

let initialString = 'Some text';
changeString(initialString);
console.log(initialString);

let changeBoolean = function (trueFalse) {
    trueFalse = !trueFalse;
    console.log(trueFalse);
};

let initialTrueFalse = false;
changeBoolean(initialTrueFalse);
console.log(initialTrueFalse);

/*
    PASS BY REFERENCE
*/

let keyboard = {
    layout: 'US',
    keys: 65,
    isBacklit: true,
    isWireless: true,
};

let keyboard2 = {
    layout: 'IT',
    keys: 100,
    isBacklit: true,
    isWireless: false,
};
console.log(keyboard);

function disableKeyboardLighting(keyboardObj) {
    console.log(keyboardObj);
    keyboardObj.isBacklit = false;
    keyboardObj.color = 'white';
    // console.log(keyboardObj);
}

disableKeyboardLighting(keyboard);
console.log(keyboard);
