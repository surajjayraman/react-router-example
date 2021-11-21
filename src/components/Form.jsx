import { useState } from 'react';
const Form = (props) => {
    const { onSubmit } = props; 
    const [username, setUsername] = useState("");

    // submits username
    // prevents browser from reloading
    const updateUser = (event) => {
        onSubmit(username);
        event.preventDefault();
        setUsername("");
    }

    return (
        <div>
            <h2> User Registration Form!</h2>
            <UserForm onSubmit={updateUser}>
                <label>
                    Your name:
                    <input type="text" value={username} 
                    onChange={event => setUsername(event.target.value)}
                    />
                </label>

                <button type="submit">Send</button>

            </UserForm>
            
        </div>
    )

}

const UserForm = ({ onSubmit, children }) => (
    <form onSubmit={onSubmit}>{children}</form>
  );

export default Form;