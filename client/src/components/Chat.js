import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MainContext } from '../MainStateProvider';
import { ChatBox } from '../style';

export default class Chat extends Component {
    static contextType = MainContext;

    componentDidUpdate() {
        const objDiv = document.getElementById('messageList');
        objDiv.scrollTop = objDiv.scrollHeight;
    }
    
    render() {
        if (!this.context.state.user.name) {
            return <Redirect to={{
                pathname: '/',
            }} />
          } 
    
        return (
            <MainContext.Consumer>
                {context => ( 
                <ChatBox id="messageList">
                        {context.state.messages.map((user, i) => {
                            return (
                                <div key={i} className={user.name === context.state.user.name 
                                    ? "bubble me" : "bubble you"}>
                                    <div style={{color : user.color}}> {user.name}: </div>
                                    <div style={{color : 'black'}}>{user.message}</div>
                                </ div>
                            )
                        } )}   
                </ChatBox>
                )}
            </MainContext.Consumer>
        )
    }
}
