import React from 'react';
import s from './Dialogs.module.scss';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';

function Dialogs(props) {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };
    if (!props.isAuth) {
        return <Redirect to={'/login'} />;
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component='textarea'
                name='newMessageBody'
                placeholder='Enter your message...'
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'Enter your message...')}
            />
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
