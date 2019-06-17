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
            users:[]
        }
    }

    getUsers = async () => {
        const socket = socketIOClient('http://localhost:8000');
        await socket.on("getUsers", users => {
            this.setState({
                ...this.state,
                users:[...this.state.users, users]
            })
        })
        socket.emit("getUsers", this.state.users)
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
      // socket.emit('connected', this.state.users) 
        socket.on("connected", name => {
            console.log('name:', name)
            this.setState({
                ...this.state,
                users: [...this.state.users, name]
            })
            socket.emit('getUsers', this.state.users)
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
       const socket = socketIOClient('http://localhost:8000');
       socket.emit('connected', name) 
    //   this.props.history.push('/chat')
       socket.on('getUsers', users => {
           console.log(users)
           this.setState({
               ...this.state,
               users: [...this.state.users, users]
           })
       })
       this.setState({
            ...this.state,
            user:{
            ...this.state.user,
            name: name,
            color: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
            },   
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