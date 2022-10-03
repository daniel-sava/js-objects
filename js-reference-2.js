let laptop = {
    screenSize: 13.3,
    color: 'black',
    year: 2021,
    os: 'v17.2',
};

function updateOs(laptopDevice) {
    console.log(laptopDevice);
    laptopDevice.os = 'v18.0';
}

updateOs(laptop);

/*
    A SE TRADUCE IN

    updateOs(laptopDevice = laptop)
*/
