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
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
            <div className={s.mainWrap}>
                
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/dialogs' render={() => <Dialogs />}/>
                <Route path='/users' render={() => <Users />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
