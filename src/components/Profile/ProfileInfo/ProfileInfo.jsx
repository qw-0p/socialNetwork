import React, {useState} from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';

import ProfileStatus from './ProfileStatus';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />;
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false);
    };

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt='' />
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                {editMode ? (
                    <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                ) : (
                    <ProfileData
                        goToEditMode={() => {
                            setEditMode(true);
                        }}
                        profile={profile}
                        isOwner={isOwner}
                    />
                )}

                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>Edit</button>}
            <h2>{profile.fullName}</h2>
            <div>
                <p className={s.description}>
                    <b>Looking for a job:</b>
                    {profile.lookingForAJob ? ' Yes' : ' No'}
                </p>
            </div>
            {profile.lookingForAJob && (
                <div>
                    <p className={s.description}>
                        <b>My professional skills: </b>
                        {profile.lookingForAJobDescription}
                    </p>
                </div>
            )}

            <div>
                <b>About me:</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b>:{' '}
                {Object.keys(profile.contacts).map((key) => {
                    return <Contact contactTitle={key} contactValue={profile.contacts[key]} />;
                })}
            </div>
        </div>
    );
};

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}:</b>
            {contactValue}
        </div>
    );
};

export default ProfileInfo;
