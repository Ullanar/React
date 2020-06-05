import React from 'react';
import css from './Content.module.css'
import ProfileContainer from './../../profile/profileConteiner'
import MessagesContainer from "../../messages/messagesContainer";
import NewsContainer from "../../news/News";
import FaqContainer from "../../faq/FAQ";
import {BrowserRouter, Route} from "react-router-dom";


function Content(props) {
    return (
        <div className={css.content}>
            <Route path exact='' render={() => <ProfileContainer
                profilePageDate={props.profilePageDate}/>}/> {/*Отображается по дефолту*/}
            <Route path='/profile' render={() => <ProfileContainer profilePageDate={props.profilePageDate}/>}/>
            <Route path='/messages' render={() => <MessagesContainer dialogsPageDate={props.messagesPageDate}/>}/>
            <Route path='/faq' render={() => <FaqContainer/>}/>
            <Route path='/news' render={() => <NewsContainer/>}/>
        </div>
    );
}


export default Content;
