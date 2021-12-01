import { v4 as uuidv4 } from 'uuid';

const idOne = uuidv4();
const idTwo = uuidv4();

// pseudo database
let users = {
    [idOne]: {
        id: idOne,
        firstName: 'Suraj',
        lastName: 'Nair',
        isDeveloper: true
    },
    [idTwo]: {
        id: idTwo,
        firstName: 'John',
        lastNmae: 'Doe',
        isDeveloper: false
    }
}

// retrieve all items from the database
// with one pseudo API request
const getUsers = () => {
    return new Promise((resolve, reject) => {
        if(!users){
            return setTimeout(() => reject(new Error("Users not found")), 250);
        }
        setTimeout(() => resolve(Object.values(users)), 250);
    });
}

// retrieve a single user
const getUser = (id) => {
    const user = users[id];
    return new Promise((resolve, reject) => {
        if(!user){
            return setTimeout(() => reject(new Error("User not found")), 250);
        }
        setTimeout(() => resolve(users[id], 250));

    });
}

// create a user item
const createUser = (data) => {
    return new Promise((resolve, reject) => {
        if (!data.firstName || !data.lastName) {
          reject(new Error('Not all User information provided'));
        }
    
        const id = uuidv4();
        const newUser = {id, ...data};
        users = {...users, [id]: newUser};
        setTimeout(() => resolve(true), 250);
    });
}

// update a user item
const updateUser = (id, data) =>
  new Promise((resolve, reject) => {
    if (!users[id]) {
      return setTimeout(
        () => reject(new Error('User not found')),
        250
      );
    }

    users[id] = { ...users[id], ...data };

    return setTimeout(() => resolve(true), 250);
  });





