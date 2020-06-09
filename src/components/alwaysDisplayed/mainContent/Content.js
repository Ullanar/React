import React from 'react';
import css from './Content.module.css'
import ProfileContainer from '../../profile/profileAreaDisplay'
import MessagesAreaDisplay from "../../messages/messagesAreaDisplay";
import NewsContainer from "../../news/News";
import FaqContainer from "../../faq/FAQ";
import {Route} from "react-router-dom";
import {updatePostChange} from "../../../redux/store";


function Content(props) {
    return (
        <div className={css.content}>
            <Route path exact='' render={() => <ProfileContainer
                profilePageData={props.profilePageData}
                dispatch={props.dispatch}/>}/> {/*Отображается по дефолту*/}
            <Route path='/profile' render={() => <ProfileContainer profilePageData={props.profilePageData}
                                                                   dispatch={props.dispatch}/>}/>
            <Route path='/messages' render={() => <MessagesAreaDisplay dialogsPageData={props.messagesPageData}
                                                                       dispatch={props.dispatch}/>}/>
            <Route path='/faq' render={() => <FaqContainer/>}/>
            <Route path='/news' render={() => <NewsContainer/>}/>
        </div>
    );
}


export default Content;
