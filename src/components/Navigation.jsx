import { Link  } from "react-router-dom";

// implement the navigation in our App component
// by using React Router's Link component
const Navigation = () => {

    return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
        <Link to="/">Home </Link>
        <Link to="/users">Users </Link>
    </nav>

    );
}

export default Navigation;