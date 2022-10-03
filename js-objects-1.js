let person = {
    firstName: 'Andrei',
    lastName: 'Popescu',
    age: 32,
    gender: 'masculin',
    address: 'Timisoara - Romania',
    personalNumber: '1234567890',
};

console.log(typeof person);

console.log(person);

// afisare valoarea proprietati

console.log(person.firstName);
console.log(person['firstName']);

// modificare valoare

person.age = 27;
console.log(person.age);

person['firstName'] = 'Adrian';
console.log(person.firstName);

// adaugare proprietate

person.phoneNumber = '0733456987';
console.log(person);

person['country'] = 'Romania';
console.log(person);

// stergere proprietate

const deleteResult = delete person.personalNumber;
console.log(deleteResult);
console.log(person);
