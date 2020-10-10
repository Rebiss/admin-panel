import React from 'raect';
import { List, Datagrid, TextField,EmailField, EditButton, DeleteButton } from 'raect-admin'

export const UserList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='name' />
                <EmailField source='email' />
                <EditButton basePath='/users' />
                <DeleteButton basePath='/users' />
            </Datagrid>
        </List>
    )
}