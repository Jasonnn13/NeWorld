import React from 'react';
import { Link } from 'react-router-dom'; 

function NoPage() {
    return (
        <div className="no-page-container">
            <h2 className="no-page-title">Oops! Page Not Found</h2>
            <p className="no-page-text">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="back-home-link">Go back to Home</Link>
        </div>
    );
}

export default NoPage;
