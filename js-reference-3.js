let laptop = {
    screenSize: 13.3,
    color: 'black',
    year: 2021,
    os: 'v17.2',
};

let laptop2 = {
    screenSize: 13.3,
    color: 'black',
    year: 2021,
    os: 'v17.2',
};

function updateOs(device) {
    device.os = 'v18.0';
    console.log(device);
}

updateOs(laptop2);

console.log(laptop);
console.log(laptop2);
