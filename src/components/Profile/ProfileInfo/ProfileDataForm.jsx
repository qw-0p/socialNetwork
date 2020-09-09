import React from 'react';
import {createField, Input, Textarea} from '../../common/FormsControls/FormsControls';
import s from './ProfileInfo.module.scss';
import {reduxForm} from 'redux-form';

const ProfileDataForm = ({handleSubmit, profile}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            <div>
                <b>My full name:</b>
                {createField('Full name', 'fullName', [], Input)}
            </div>

            <div>
                <b>Looking for a job:</b>
                {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>

            <div>
                <b>My professional skills:</b>
                {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>

            <div>
                <b>About me:</b>
                {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>Contacts:</b>:{' '}
                {Object.keys(profile.contacts).map((key) => {
                    return (
                        <div className={s.contact}>
                            <b>
                                {key}:{createField(key, 'contacts.' + key, [], Input)}
                            </b>
                        </div>
                    );
                })}
            </div>
        </form>
    );
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
