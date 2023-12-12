
import React from 'react';
import styles from '../styles/navbar.module.scss';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                StudentGPT
            </div>
            <ul className={styles.menu}>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/chatbot">Chatbot</a></li>
                <li><a href="/analytics">Analytics</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </div>
    );
};

export default Navbar;
