import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { URL } from './config/cfg.js';
import { PostList } from './view/posts/PostList';
import { PostCreate } from './view/posts/PostCreate';
import { PostEdit } from './view/posts/PostEdit';

import { UserList } from './view/users/UserList';
import { UserCreate } from './view/users/UserCreate';
import { UserEdit } from './view/users/UserEdit';

export const App = () => {
  return (
    <Admin dataProvider={ restProvider(URL) }>
      <Resource 
        name='posts' 
        list={ PostList } 
        create={ PostCreate } 
        edit={PostEdit}
      />
      <Resource 
        name='posts' 
        list={ UserList } 
        create={ UserCreate } 
        edit={ UserEdit }
      />
    </Admin>
  )
}

