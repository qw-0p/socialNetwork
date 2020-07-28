import React from 'react';
import s from './Dialogs.module.scss';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>;
};

function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Aleksandr" id="1" />
                <DialogItem name="Andrey" id="2" />
                <DialogItem name="Pavel" id="3" />
                <DialogItem name="Vitya" id="4" />
                <DialogItem name="Yarik" id="5" />
                <DialogItem name="Jeka" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="HI" />
                <Message message="Hello" />
                <Message message="Yo" />
            </div>
        </div>
    );
}

export default Dialogs;
