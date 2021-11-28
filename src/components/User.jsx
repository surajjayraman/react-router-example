import { Link, useParams } from "react-router-dom";

const User = () => {
    const { id } = useParams();
  
    return (
      <>
        <h2>User: {id}</h2>
  
        <Link to="/users">Back to Users</Link>
      </>
    );
  };

 export default User; 