import { useEffect, useState } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from '../api';

const UserData = () => {
    const [users, setUsers] = useState([]);   
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState(''); 

    // fetch the mock data from api
    useEffect(() => {
        getUsers()
        .then(result => { 
            console.log(result);
            setUsers(result);
        })
        .catch(error => console.log(error));

    }, []);    

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    };

    // Add a new user to the mock database
    const handleCreate = async (event) => {
        
        event.preventDefault();
    
        createUser({ firstName, lastName, isDeveloper: false })
        .then(result => console.log(result))
        .catch (error => console.log(error));
    };
  

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
            <hr />

            <span>Create User:</span>
            <p></p>

            <form onSubmit={handleCreate}>
                <label>
                First Name:
                <input type="input" onChange={handleChangeFirstName} />
                </label>

                <label>
                Last Name:
                <input type="input" onChange={handleChangeLastName} />
                </label>

                <button type="submit">Create</button>
            </form>  

        </div>
    );
}

export default UserData;