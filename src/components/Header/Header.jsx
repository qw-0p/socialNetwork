import React from 'react';
import s from './Header.module.scss';
import {NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <header className={s.header}>
            <img
                src="https://c7.hotpng.com/preview/266/92/934/iphone-computer-icons-apple-messages-whatsapp-whatsapp.jpg"
                alt=""
            />
            <div className={s.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    );
}
