import React, {SyntheticEvent, useEffect, useRef, useState} from 'react';
import s from './Dialogs.module.css';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ReceivedMessage from "./Message/ReceivedMessage/ReceivedMessage";
import SentMessage from "./Message/SentMessage/SentMessage";
import {
    ActionsType,
    DialogPageType, StoreType,
} from "../../redux/store";
import SettingsIcon from "@material-ui/icons/Settings";
import UserMessageItem from "./UserMessageItem/UserMessageItem";
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import {sendMessageActionCreator, UpdateNewMessTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


type PropsType = {
    // store: StoreType
}


function DialogsContainer(/*props: PropsType*/) {



    return (
        <StoreContext.Consumer>{
            (store) => {
                const dialogPage = store.getState().dialogPage

                const state = store.getState().dialogPage

                const sendMessage = () => {
                    store.dispatch(sendMessageActionCreator(state.newMessText))
                }

                const onMessChange = (text: string) => {
                    store.dispatch(UpdateNewMessTextCreator(text))
                }

                return <Dialogs dialogsPage={dialogPage}
                                onChangeMess={onMessChange}
                                sendMessage={sendMessage}
                />
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;