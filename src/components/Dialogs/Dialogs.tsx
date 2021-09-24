import React, {SyntheticEvent, useEffect, useRef, useState} from 'react';
import s from './Dialogs.module.css';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ReceivedMessage from "./Message/ReceivedMessage/ReceivedMessage";
import SentMessage from "./Message/SentMessage/SentMessage";
import {
    ActionsType,
    addPostActionCreator,
    DialogPageType, sendMessageActionCreator,
    UpdateNewMessTextCreator,
    UpdateNewPostTextCreator
} from "../../state/state";
import SettingsIcon from "@material-ui/icons/Settings";
import UserMessageItem from "./UserMessageItem/UserMessageItem";
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';


type PropsType = {
    dispatch: (action: ActionsType) => void
}


function Dialogs(props: DialogPageType & PropsType) {

    /*    const [editMode, setEditMode] = useState(false)
        const activateEditMode = () => {
            setEditMode(true);
        }
        const activateViewMode = () => {
            setEditMode(false);
        }*/
    const messageEl = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (messageEl) {
            if (messageEl.current !== null) {
                messageEl.current.addEventListener('DOMNodeInserted', event => {
                    const {currentTarget: target} = event;
                    if (target !== null) {
                        (target as HTMLDivElement).scroll({top: (target as HTMLDivElement).scrollHeight, behavior: 'smooth'})
                    }
                    ;
                })
            }
            ;
        }
    }, [])

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator(props.newMessText))
    }

    const onMessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.dispatch(UpdateNewMessTextCreator(e.currentTarget.value))
    }


    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.dispatch(sendMessageActionCreator(props.newMessText))

        }
    }


    let dialogsElements = props.dialogs
        .map(d => <UserMessageItem /*activateEditMode={activateEditMode} activateViewMode={activateViewMode}*/
            key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.messages
        .map(m => <SentMessage key={m.id} message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogsWrap}>
            {/*USER MESSAGES LIST*/}
            {<div className={s.messagesList}>
                <div className={s.messagesListTitle}>
                    <h3>Dialogs</h3>
                    <div className={s.titleIconWrap}>
                        <SettingsIcon style={{marginRight: '5px'}}/>
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className={s.usersList}>
                    <ul>
                        {dialogsElements}
                    </ul>
                </div>
            </div>}
            {/*------END------*/}
            {{/*editMode*/} ? <div className={s.messageBox}>
                <div className={s.messageBoxTitle}>
                    <ArrowBackOutlinedIcon /*onClick={activateViewMode}*/
                        style={{marginRight: '45px', color: '#E44D3A'}}/>
                    <div className={s.messageBoxTitleImg}>
                        <img src="https://avatarfiles.alphacoders.com/169/169302.jpg" alt="userAvatar"/>
                    </div>
                    <div className={s.messageBoxTitleInfo}>
                        <h3>{props.dialogs[0].name}</h3>
                        <p>Online</p>
                    </div>
                    <MoreVertIcon
                        style={{marginLeft: 'auto', color: '#b2b2b2', paddingTop: '15px', cursor: 'pointer'}}/>
                </div>
                <div className={s.messagesArea} ref={messageEl}>
                    <ReceivedMessage/>
                    <ReceivedMessage/>
                    {messagesElements}

                </div>
                <div className={s.footerInputArea}>
                    <div className={s.inputMess}>
                        <input value={props.newMessText} onKeyPress={onKeyPressHandler} onChange={onMessChange}
                               type="text" placeholder='Type a message here'/>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div> : <></>}
        </div>
    );
}

export default Dialogs;