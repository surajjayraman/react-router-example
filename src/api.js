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





