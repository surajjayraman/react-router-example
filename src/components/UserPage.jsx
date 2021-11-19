import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../App.css"

const UserPage = () => {
  
  // Getter and setter for user state
  const [user, setUser] = useState({});
  const { id } = useParams();

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {

    const getUser = () => {
       
        // Make a request for a user with a given ID
        axios.get(`https://api.github.com/users/${id}`)
        .then((response) => {
             // handle success
             console.log(response.data);
             // Update state
             setUser(response.data);
            })
        .catch((error) => {
            // handle error
            console.log(error);
            }); 
        
      }

    // Invoke the async function
    getUser();

  }, [id]); // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

  // Return a table with some data from the API.
  return (
    <div className='App'>
      <h1>{id}</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Website</th>
            <th>Followers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.location}</td>
            <td>
              <a href={user.html_url}>{user.html_url}</a>
            </td>
            <td>{user.followers}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )

}

export default UserPage;