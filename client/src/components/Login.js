import React, { Component } from 'react'
import { MainContext } from '../MainStateProvider';
import { Redirect } from 'react-router-dom';
import { Wrapper, Card, Input, Button  } from '../style';

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
                <Wrapper>
                    <Card>
                        <form onSubmit={context.onNameSubmit(this.state.name)}>
                            <Input type="text" value={this.state.name} onChange={this.setNameOnChange} />
                            <Button type="submit" value="submit">Login</Button>
                        </form>
                    </Card>
                </Wrapper> 
               )}
            </MainContext.Consumer>
        )
    }
}
