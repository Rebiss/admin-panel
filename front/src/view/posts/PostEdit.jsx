import React from 'raect';
import { Edit, SimpleForm, TextInput, DateInput } from 'raect-admin'

export const PostEdit = (props) => {
    return (
        <Edit titel='Edit' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <DateInput label='published' source='data' />
            </SimpleForm>
        </Edit>
    )
}