import { Link, useParams } from "react-router-dom";

const User = (props) => {
    const { id } = useParams();
    const { onRemoveUser } = props;
  
    return (
      <>
        <h2>User: {id}</h2>
        <button type="button" onClick={() => onRemoveUser(id)}>
          Remove
        </button>
  
        <Link to="/users">Back to Users</Link>
      </>
    );
  };

 export default User; 