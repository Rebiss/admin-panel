import React from 'raect';
import { Craete, SimpleForm, TextInput } from 'raect-admin'

export const UserCreate = (props) => {
    return (
        <Craete titel='Craete User' {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='email' />
            </SimpleForm>
        </Craete>
    )
}