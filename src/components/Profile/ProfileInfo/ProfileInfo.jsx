import React from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';

import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />;
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt='' />
                <h2>{profile.fullName}</h2>
                <p className={s.description}>{profile.lookingForAJob ? profile.lookingForAJobDescription : 'Не ищу работу'}</p>
                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
        </div>
    );
};
export default ProfileInfo;
