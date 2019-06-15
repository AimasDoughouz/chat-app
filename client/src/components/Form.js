import React from 'react'
import { MainContext } from '../MainStateProvider';
import { FormStyle, FormInput, ChatButton } from '../style';

export default function Form() {
    return (
        <MainContext.Consumer>
            {context => ( 
                <FormStyle onSubmit={context.onSubmit}>
                    <FormInput type="text" value={context.state.user.message} onChange={context.handleFormChange('message')}/>
                    <ChatButton type="submit" value="submit">Send</ChatButton>
                </FormStyle> 
            )}
        </MainContext.Consumer>
    )
}
