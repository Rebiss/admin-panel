import React from 'raect';
import { Edit, SimpleForm, TextInput } from 'raect-admin'

export const UserEdit = (props) => {
    return (
        <Edit titel='Edit User' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='name' />
                <TextInput source='email' />
            </SimpleForm>
        </Edit>
    )
}