import { getUsers, createUser, updateUser, deleteUser } from '../api';

const UserData = () => {
    console.log(getUsers());
    return (
        <div>
            <h2>Hello from User Data Mock API!!</h2>
        </div>
    );
}

export default UserData;