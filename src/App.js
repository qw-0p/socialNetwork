import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://c7.hotpng.com/preview/266/92/934/iphone-computer-icons-apple-messages-whatsapp-whatsapp.jpg"
                    alt=""
                />
            </header>
            <nav className="nav">
                <ul>
                    <li>
                        <a href="#">Profile</a>
                    </li>
                    <li>
                        <a href="#">Messages</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Music</a>
                    </li>
                    <li>
                        <a href="#">Settings</a>
                    </li>
                </ul>
            </nav>
            <div className="content">
                <img
                    src="https://lh3.googleusercontent.com/proxy/9OXIvdZQZvyOH6_ZqJtpHOsOUw-XiUq1LjOAAO9srQkawV5VD5Xmi4y3ZCoBhxjeehhXd1bEiPyuVfa_fmQKOd1VUCn_hYeUur9bFaCVz_mp2kY34MaJ1UY44Ikq7YsZuFF911EWrd9F7CNJ10T3oyix5rLomGYE8na7cVsX-Dz7nFc"
                    alt=""
                />
            </div>
        </div>
    );
}

export default App;
