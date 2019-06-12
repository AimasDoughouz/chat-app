import React, { Component } from 'react'
import { MainContext } from '../MainStateProvider';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    static contextType = MainContext;
    constructor(props) {
        super(props)
        this.state = {
            name: '',
        }
    }

    setNameOnChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        if (this.context.state.user.name) {
            return <Redirect to={{
                pathname: '/chat',
            }} />
          } 
        return (
            <MainContext.Consumer>
                {context => ( 
                <div>
                    <form onSubmit={context.onNameSubmit(this.state.name)}>
                        <input type="text" value={this.state.name} onChange={this.setNameOnChange} />
                        <button type="submit" value="submit">Login</button>
                    </form>
                </div>
               )}
            </MainContext.Consumer>
        )
    }
}
