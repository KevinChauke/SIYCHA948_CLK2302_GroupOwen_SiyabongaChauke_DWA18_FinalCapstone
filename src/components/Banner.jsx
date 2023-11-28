import React from "react";
import { Link } from "react-router-dom";

// The Banner 

const Banner = () => {
    const date = new Date();
    const hours = date.getHours();
    const [timeOfDay, setTimeOfDay] = React.useState("");

    React.useEffect(() => {
        if (hours > 4 && hours < 12) {
            setTimeOfDay("morning");
        } else if (hours >= 12 && hours < 18) {
            setTimeOfDay("afternoon");
        } else if (hours >= 18 && hours < 20) {
            setTimeOfDay("evening");
        } else {
            setTimeOfDay("night");
        }
    }, []);

    return (
        <section className="banner">
            <small className="greeting">Good {timeOfDay},</small>
            <div className="account--user">
                <h2 className="user">Guest</h2>
                <Link to="login">
                    <button>Login/Register</button>
                </Link>
            </div>
            <small className="notify">
                Create an account by signing up.
            </small>
        </section>
    );
};

export default Banner;
