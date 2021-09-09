import React from 'react';
import s from './Dialogs.module.css';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ReceivedMessage from "./Message/ReceivedMessage/ReceivedMessage";
import SentMessage from "./Message/SentMessage/SentMessage";
import {DialogPageType} from "../../state/state";
import SettingsIcon from "@material-ui/icons/Settings";
import UserMessageItem from "./UserMessageItem/UserMessageItem";


function Dialogs(props: DialogPageType) {

    let newMessElement = React.createRef<HTMLInputElement>();
    const sendMess = () => {
        let text = newMessElement.current?.value
        alert(text)
    }


    let dialogsElements = props.dialogs
        .map(d => <UserMessageItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.messages
        .map(m => <SentMessage key={m.id} message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogsWrap}>
            {/*USER MESSAGES LIST*/}
            <div className={s.messagesList}>
                <div className={s.messagesListTitle}>
                    <h3>Messages</h3>
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
            </div>
            {/*------END------*/}
            <div className={s.messageBox}>
                <div className={s.messageBoxTitle}>
                    <div className={s.messageBoxTitleImg}>
                        <img src="https://avatarfiles.alphacoders.com/169/169302.jpg" alt="userAvatar"/>
                    </div>
                    <div className={s.messageBoxTitleInfo}>
                        <h3>Tony Stark</h3>
                        <p>Online</p>
                    </div>
                    <MoreVertIcon
                        style={{marginLeft: 'auto', color: '#b2b2b2', paddingTop: '15px', cursor: 'pointer'}}/>
                </div>
                <div className={s.messagesArea}>
                    <ReceivedMessage/>
                    <ReceivedMessage/>
                    {messagesElements}

                </div>
                <div className={s.footerInputArea}>
                    <div className={s.inputMess}>
                        <input ref={newMessElement} type="text" placeholder='Type a message here'/>
                        <button onClick={sendMess}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;