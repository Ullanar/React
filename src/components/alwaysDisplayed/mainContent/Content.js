import React from 'react';
import css from './Content.module.css'
import ProfileArea from '../../profile/profileArea'
import MessagesAreaDisplay from "../../messages/messagesAreaDisplay";
import NewsContainer from "../../news/News";
import FaqContainer from "../../faq/FAQ";
import {Route} from "react-router-dom";
import {updatePostChange} from "../../../redux/store";
import ProfileAreaContainer from "../../profile/profileAreaContainer";


function Content(props) {
    return (
        <div className={css.content}>
            <Route path='/profile' render={() => <ProfileAreaContainer state={props.state}
                                                                       dispatch={props.dispatch}/>}/>
            <Route path='/messages' render={() => <MessagesAreaDisplay state={props.state}
                                                                       dispatch={props.dispatch}/>}/>
            <Route path='/faq' render={() => <FaqContainer/>}/>

            <Route path='/news' render={() => <NewsContainer/>}/>
        </div>
    );
}


export default Content;
