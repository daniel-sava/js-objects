let car = {
    brand: 'Dacia',
    model: 'Spring',
    year: 2022,
    hp: 500,
    fuel: 100,
    drive: function () {
        this.fuel -= 10;
    },
    driver: {
        name: 'Gigi',
        age: 36,
    },
};

/*
    *** IMPORTANT ***
    Copierea unui obiect prin referinta, se numeste SHALLOW COPY
*/

// copiere prin referinta
// let car2 = car;

/*
    *** IMPORTANT ***
    Copierea unui obiect prin valoare, in care se copiaza separat toate proprietatile, se numeste DEEP COPY

    DEEP COPY adevarat se realizeaza cu ajutorul unei librarii ex. lodash
*/

// destructuring (de la nivelul 2 nu se copiaza prin valoare)
// let car2 = { manual: false, ...car };

// Object.assign (de la nivelul 2 nu se copiaza prin valoare)
// let car2 = Object.assign({ manual: false }, car);

// JSON.parse(JSON.stringify)
// Nu copiaza: Dates, functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, sparse Arrays, Typed Arrays or other complex types within your object
let car2 = JSON.parse(JSON.stringify(car));

car2.hp = 100;
car2.driver.age = 24;

console.log(car);
console.log(car2);
