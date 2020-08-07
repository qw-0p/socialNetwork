import React from 'react';
import s from './Dialogs.module.scss';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {
    updateNewMessageBodyCreator,
    sendMessageCreator,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

function DialogsContainer(props) {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };
    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    );
}

export default DialogsContainer;
