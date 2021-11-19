import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container">
            <h2> Welcome to the Home Page!</h2>
            <p>
                <Link to="/surajjayraman">Suraj</Link> on Github.
            </p>
        </div>   

    );

}

export default HomePage;