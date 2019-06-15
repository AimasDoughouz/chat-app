import React from 'react'
import { MainContext } from '../MainStateProvider';
import { UsersContainer, UserC } from '../style';

export default function Users() {
    return (
        <MainContext.Consumer>
            {context => ( 
                <UsersContainer>
                    { context.state.users.map(user => <UserC>{user}</UserC>)}
                </UsersContainer> 
            )}
        </MainContext.Consumer>
    )
}
