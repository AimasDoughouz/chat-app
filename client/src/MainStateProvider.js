import React, { Component } from 'react'
import socketIOClient from 'socket.io-client';
import { withRouter } from 'react-router-dom';

export const MainContext = React.createContext();

class MainStateProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user:{
                name: '',
                message: '',
                color: ''
            },
            messages: [],
        }
    }

    componentWillMount() {
        const socket = socketIOClient('http://localhost:8000');
        socket.on("sendMessage", user => {
            console.log(user);
            this.setState({
                messages: [...this.state.messages, user]
            })
            console.log('messeages:',this.state.messages)
        })  
    }

    onSubmit = (e) => {
        e.preventDefault();
        const socket = socketIOClient('http://localhost:8000');
        socket.emit('sendMessage', this.state.user) 
        this.setState({
            ...this.state,
            user:{
                ...this.state.user,
                message: ''
            }
        })
    }

   onNameSubmit = name => e => {
       e.preventDefault();
    //   this.props.history.push('/chat')
       this.setState({
            ...this.state,
            user:{
            ...this.state.user,
            name: name,
            color: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
        } 
       })
   }

    handleFormChange = input => e => {
        this.setState({
            ...this.state,
            user:{
                ...this.state.user,
                [input]: e.target.value
            } 
        })
    }

    render() {
        return (
            <MainContext.Provider value = {{
                state: this.state,
                handleFormChange: this.handleFormChange,
                onSubmit: this.onSubmit,
                onNameSubmit: this.onNameSubmit,
              }}>
                  {this.props.children}
            </MainContext.Provider>
        )
    }
}

export default withRouter(MainStateProvider);