import React from 'react';
import css from './Content.module.css'
import ProfileContainer from './../../profile/profileConteiner'
import MessagesContainer from "../../messages/messagesContainer";
import NewsContainer from "../../news/News";
import FaqContainer from "../../faq/FAQ";
import {BrowserRouter, Route} from "react-router-dom";


function Content() {
    return (
            <div className={css.content}>
                <Route path='/profile' component={ProfileContainer}/>
                <Route path='/messages' component={MessagesContainer}/>
                <Route path='/faq' component={FaqContainer}/>
                <Route path='/news' component={NewsContainer}/>
            </div>
    );
}


export default Content;