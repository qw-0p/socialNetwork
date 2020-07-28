import React from 'react';
import s from './ProfileInfo.module.scss';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2017/10/10/22/24/wide-format-2839089_960_720.jpg"
                    alt=""
                    className={s.titleImg}
                />
            </div>
            <div className={s.descriptionBlock}>ava + desc</div>
        </div>
    );
};
export default ProfileInfo;
