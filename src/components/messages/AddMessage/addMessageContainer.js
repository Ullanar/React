import React from 'react';
import AddMessage from "./addMessage";
import {connect} from "react-redux";



function mapStateToProps(state){
    return{
        actualMessageValue: state.messagesPage.newDialogMessageDisplay
    }
}
function mapDispatchToProps(dispatch){
    return{
        sendNewMessage: () =>{
            dispatch({type : 'ADD-MESSAGE'})

        },
        displayNewMessageValue: (newTextDisplay) => {
            dispatch( {type : 'UPDATE-NEW-MESSAGE-TEXT', newTextDisplay : newTextDisplay})
        }
    }
}


let AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default AddMessageContainer;
