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

    const getUser = async () => {
        // Pass our param (:id) to the API call
        const { data } = await axios(
          `https://api.github.com/users/${id}`
        )
        console.log(data);    
        // Update state
        setUser(data)
      }

    // Invoke the async function
    getUser();

  }, []); // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

  

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