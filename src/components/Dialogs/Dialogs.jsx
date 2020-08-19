import React from 'react';
import s from './Dialogs.module.scss';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Redirect} from 'react-router-dom';

function Dialogs(props) {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} />);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };
  if (!props.isAuth) {
    return <Redirect to={'/login'} />;
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            placeholder='Enter your message...'
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Enter your message...')}
            value={newMessageBody}
            onChange={onNewMessageChange}></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Add message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
