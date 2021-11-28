import { Link } from "react-router-dom";
const Users = (props) => {
    const { users } = props;

    return (
    <>    
      <h2>Users</h2>  
      <ul>
          {users.map((user)=> (
              <li key={user.id}>
                  <Link to={`/users/${user.id}`}>
                      {user.fullName}
                   </Link> 
              </li>
          ))}
      </ul> 
     </> 
    );
  };

  export default Users;