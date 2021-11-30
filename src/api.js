import { v4 as uuidv4 } from 'uuid';

const idOne = uuidv4();
const idTwo = uuidv4();

let users = {
    [idOne]: {
        id: idOne,
        firstName: 'Suraj',
        lastName: 'Nair',
        isDeveloper: true
    } 

}