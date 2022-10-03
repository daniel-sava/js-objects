// COPIERE OBJECTS

let person1 = {
    firstName: 'Marius',
    lastName: 'Popescu',
    age: 28,
    country: 'Romania',
};

// destructuring
let person2 = { ...person1 };

person2.age = 40;

console.log(person1);
console.log(person2);

// COPIERE TIPURI PRIMITIVE

let someNumber1 = 40;
let someNumber2 = someNumber1; // someNumber2 = 40

someNumber2 = 80;

console.log(someNumber1);
console.log(someNumber2);
