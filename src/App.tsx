import React from 'react';
import './App.css';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Redirect, Route, Switch} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App() {

    return (
            <div className="App">
                <Header/>
                <div className={s.mainWrap}>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/profile"/>
                        </Route>
                        <Route path='/profile' render={() => <Profile /*store={props.store}*//>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer /*store={props.store}*//>}/>
                        <Route path='/users' render={() => <Users/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </Switch>
                </div>
            </div>

    );
}

export default App;
