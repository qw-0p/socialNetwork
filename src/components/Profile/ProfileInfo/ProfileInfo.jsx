import React from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt='' />
                <h2>{props.profile.fullName}</h2>
                <p className={s.description}>{props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : 'Не ищу работу'}</p>
                <ProfileStatus status={'Hello'} />
            </div>
        </div>
    );
};
export default ProfileInfo;
