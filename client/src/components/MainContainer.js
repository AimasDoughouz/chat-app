import React, { Component } from 'react'
import Chat from './Chat';
import Form from './Form';
import Users from './Users';
import { MainBox } from '../style';

export default class MainContainer extends Component {
    render() {
        return (
            <MainBox>
                <Chat />
                <Form />
                <Users />
            </MainBox>
        )
    }
}
