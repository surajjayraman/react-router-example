import { useEffect, useState } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from '../api';

const UserData = () => {
    const [users, setUsers] = useState([]);    

    // fetch the mock data from api
    useEffect(() => {
        getUsers()
        .then(result => { 
            console.log(result);
            setUsers(result);
        })
        .catch(error => console.log(error));

    }, []);
  

    const getDeveloperText = (isDeveloper) => `is ${isDeveloper ? 'a' : 'not a'} developer`;
    return (
        <div>
            <ul>
                {users.map((user) => {
                const developerText = getDeveloperText(user.isDeveloper);

                return (
                    <li key={user.id}>
                    {user.firstName} {user.lastName} {developerText}
                    </li>
                );
                })}
            </ul>    
        </div>
    );
}

export default UserData;