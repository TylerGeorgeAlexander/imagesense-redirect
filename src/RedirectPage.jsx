import { useEffect } from 'react';
import robot from './assets/odd-robot.gif';

const RedirectPage = () => {
    useEffect(() => {
        // Set a timer for 5 seconds before redirecting
        const timer = setTimeout(() => {
            window.location.href = 'https://image-sense.herokuapp.com/';
        }, 5000); // 5000 milliseconds = 5 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="redirectContainer">
            <h1 className="redirectHeading">Please wait while Heroku servers spin up...</h1>
            <img src={robot} alt="Waiting..." className="redirectImage" />
        </div>
    );
};

export default RedirectPage;
