import React from 'react';
import css from './Content.module.css'
import ProfileArea from '../../profile/profileArea'
import MessagesArea from "../../messages/messagesArea";
import NewsContainer from "../../news/News";
import FaqContainer from "../../faq/FAQ";
import {Route} from "react-router-dom";
import {updatePostChange} from "../../../redux/store";
import ProfileAreaContainer from "../../profile/profileAreaContainer";
import MessagesAreaContainer from "../../messages/messagesAreaContainer";
import UsersPageContainer from "../../users/usersPageContainer";


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
