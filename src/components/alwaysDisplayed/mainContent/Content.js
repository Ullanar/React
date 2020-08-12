import React from 'react';
import css from './Content.module.css'
import NewsContainer from "../../news/News";
import FaqContainer from "../../faq/FAQ";
import {Route} from "react-router-dom";
import ProfileAreaContainer from "../../profile/profileAreaContainer";
import MessagesAreaContainer from "../../messages/messagesAreaContainer";
import UsersPageContainer from "../../users/usersPageContainer";
import ProfileArea from "../../profile/profileArea";


function Content(props) {
    return (
        <div className={css.content}>
            <Route path='/profile' render={() => <ProfileAreaContainer/>}/>
            <Route path='/messages' render={() => <MessagesAreaContainer state={props.state}
                                                                         dispatch={props.dispatch}/>}/>
            <Route path='/faq' render={() => <FaqContainer/>}/>

            <Route path='/news' render={() => <NewsContainer/>}/>
            <Route path='/users' render={() => <UsersPageContainer/>}/>
        </div>
    );
}


export default Content;
