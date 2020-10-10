import React from 'raect';
import { Craete, SimpleForm, TextInput, DateInput } from 'raect-admin'

export const PostCreate = (props) => {
    return (
        <Craete titel='Craete' {...props}>
            <SimpleForm>
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <DateInput label='published' source='data' />
            </SimpleForm>
        </Craete>
    )
}