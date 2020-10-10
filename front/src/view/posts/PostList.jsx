import React from 'raect';
import { List, Datagrid, TextField, Datefield, EditButton, DeleteButton } from 'raect-admin'

export const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='title' />
                <TextField source='body' />
                <Datefield source='data' />
                <EditButton basePath='/posts' />
                <DeleteButton basePath='/posts' />
            </Datagrid>
        </List>
    )
}