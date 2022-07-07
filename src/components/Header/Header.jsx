import React from 'react';
import styles from './Header.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet";

const Header = () => {
    const router = useNavigate()
    const handleRoute = (event) => {
        const route = event.target.name
        router(`${route}`)
    }
    return (
        <div className={styles.header}>
            <Helmet>
                <meta charSet="utf-8"/>
                <meta name="description" content="Sha2a is the best Real E-state platform in all across Egypt"/>
                <title>Sha2a - Real E-state</title>
                <link rel="canonical" href="https://sha2a.com/"/>
            </Helmet>
            <div className={styles.header__container}>
                <div className={styles.header__logo}>
                    <h3>LOGO</h3>
                </div>
                <nav className={`${styles.header__nav} ${styles.header__desktop}`}>
                    <ul>
                        <li>
                            <Link to={"/home"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Service</Link>
                        </li>
                        <li>
                            <Link to={"/"}>About Us</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
                <div className={`${styles.header__options} ${styles.header__desktop}`}>
                    <button name={"login"} onClick={handleRoute} className={styles.header__loginOption}>
                        Login
                    </button>
                    <button name={"register"} onClick={handleRoute} className={styles.header__registerOption}>
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;