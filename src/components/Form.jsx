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
            <form onSubmit={updateUser}>
                <label>
                    Your name:
                    <input type="text" value={username} 
                    onChange={event => setUsername(event.target.value)}
                    />
                </label>

                <button type="submit">Send</button>

            </form>
            
        </div>
    )

}

export default Form;