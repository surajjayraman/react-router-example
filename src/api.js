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





