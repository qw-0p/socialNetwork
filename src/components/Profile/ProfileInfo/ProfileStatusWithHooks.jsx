import React, {useState, useEffect} from 'react'
import styles from './ProfileInfo.module.scss'
import doubleTap from '../../../assets/images/double-tap.png'

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode && (
                <div>
                    <span className={styles.statusDesc} onDoubleClick={activateEditMode}>
                        {props.status || 'Double tap to change...'}
                        <img src={doubleTap} className={styles.doubleTap} alt='' />
                    </span>
                </div>
            )}
            {editMode && (
                <div className={styles.statusChange}>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} type='text' />
                </div>
            )}
        </div>
    )
}

export default ProfileStatusWithHooks
