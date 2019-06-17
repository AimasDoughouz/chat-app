import React, { Component } from 'react'
import Chat from './Chat';
import Form from './Form';
import Users from './Users';
import UsersHeader from './UsersHeader';
import WelcomeHeader from './WelcomeHeader';
import { MainBox } from '../style';

export default class MainContainer extends Component {
    render() {
        return (
            <MainBox>
                <UsersHeader />
                <WelcomeHeader />
                <Chat />
                <Form />
                <Users />
            </MainBox>
        )
    }
}
