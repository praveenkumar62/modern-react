import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div>
            <h1>Not Found !</h1>
            <p>Requested page is not available right now</p>
            <Link to='/'>Take me to Home</Link>
        </div>
    )
}

export default NotFound;