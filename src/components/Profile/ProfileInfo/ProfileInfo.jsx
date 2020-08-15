import React from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2017/10/10/22/24/wide-format-2839089_960_720.jpg"
                    alt=""
                    className={s.titleImg}
                />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <h2>{props.profile.fullName}</h2>
                <p className={s.description}>
                    {props.profile.lookingForAJob
                        ? props.profile.lookingForAJobDescription
                        : 'Не ищу работу'}
                </p>
            </div>
        </div>
    );
};
export default ProfileInfo;
