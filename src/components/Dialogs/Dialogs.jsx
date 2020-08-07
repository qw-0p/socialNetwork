import React from 'react';
import s from './Dialogs.module.scss';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {
    updateNewMessageBodyCreator,
    sendMessageCreator,
} from '../../redux/dialogsReducer';

function Dialogs(props) {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id} />
    ));
    let messagesElements = state.messages.map((m) => (
        <Message message={m.message} />
    ));
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea
                        placeholder="Enter your message..."
                        onFocus={(e) => (e.target.placeholder = '')}
                        onBlur={(e) =>
                            (e.target.placeholder = 'Enter your message...')
                        }
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                    ></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
