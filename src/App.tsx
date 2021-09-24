import React from 'react';
import './App.css';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Users from "./components/Users/Users";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {StoreType} from "./state/state";

type AppProps = {
    store: StoreType
}


function App(props: AppProps) {

    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className={s.mainWrap}>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/profile"/>
                        </Route>
                        <Route path='/profile' render={() => <Profile
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText!}
                            dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path='/dialogs' render={() => <Dialogs
                            newMessText={state.dialogPage.newMessText}
                                dispatch={props.store.dispatch.bind(props.store)}
                            dialogs={state.dialogPage.dialogs}
                            messages={state.dialogPage.messages}/>}/>
                        <Route path='/users' render={() => <Users/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </Switch>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
