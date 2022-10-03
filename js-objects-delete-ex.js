let registeredUser = [];

let user1 = {
    name: 'User 1',
    email: 'email@gmail.com',
    password: 'passuser1',
};

let user2 = {
    name: 'User 2',
    email: 'email+1@gmail.com',
    password: 'passuser2',
};

let user3 = {
    name: 'User 3',
    email: 'email+2@gmail.com',
    password: 'passuser3',
};

function registerUser(user) {
    console.log(user.password);
    registeredUser.push(user);
    console.log('Current registered users: ');
    console.log(registeredUser);
}

function notifyUserRegistered(user) {
    console.log(user);
    console.log(
        'Hello ' + user.name + "! You've registered with email: " + user.email
    );
}

registerUser(user1);
console.log(user1.password);
delete user1.password;
console.log(user1.password);
notifyUserRegistered(user1);

setTimeout(() => {
    registerUser(user2);
    delete user2.password;
    notifyUserRegistered(user2);
}, 5000);

setTimeout(() => {
    registerUser(user3);
    delete user3.password;
    notifyUserRegistered(user3);
}, 15000);
