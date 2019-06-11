import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

export default class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            messages: [],
        }
    }

    componentWillMount() {
        const socket = socketIOClient('http://localhost:8000');
      
            socket.on("sendMessage", message => {
                console.log(message);
                this.setState({
                    messages: [...this.state.messages, message]
                })
                console.log(this.state.messages)
              })
        
      }


    send = (e) => {
        e.preventDefault();
        const socket = socketIOClient('http://localhost:8000');
        socket.emit('sendMessage', this.state.message) 
        this.setState({
            ...this.state,
            message: ''
        })
    }

   

    handleFormChange = (e) => {
        this.setState({
            ...this.state,
            message: e.target.value
        })
    }

    render() {
        console.log('this is state', this.state.messages)
        return (
            <div>
                <div></div>
                <h1>chatting</h1>
                <form onSubmit={this.send}>
                    <input type="text" value={this.state.message} onChange={this.handleFormChange}/>
                    <button type="submit" value="submit">Send</button>
                </form>
                
            </div>
        )
    }
}
