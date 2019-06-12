import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MainContext } from '../MainStateProvider';

export default class Chat extends Component {
    static contextType = MainContext;
    
    render() {
        if (!this.context.state.user.name) {
            return <Redirect to={{
                pathname: '/',
            }} />
          } 
    
        return (
            <MainContext.Consumer>
                {context => ( 
                <div>
                    {context.state.messages.map((user, i) => {
                        return (
                            <div style={{color : user.color}} key={i}> {user.name} :
                                <div style={{color : 'black'}}>{user.message}</div>
                            </div>
                        )
                    } )}   
                    <h1>chatting</h1>
                    <form onSubmit={context.onSubmit}>
                        <input type="text" value={context.state.user.message} onChange={context.handleFormChange('message')}/>
                        <button type="submit" value="submit">Send</button>
                    </form> 
                </div>
                )}
            </MainContext.Consumer>
        )
    }
}
