import React from 'react';
import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2017/10/10/22/24/wide-format-2839089_960_720.jpg"
                    alt=""
                />
            </div>
            <div>ava + desc</div>
            <MyPosts />
        </div>
    );
};
