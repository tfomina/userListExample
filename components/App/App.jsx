import React, { useState, useEffect } from 'react';

import { Form } from './../Form';
import { UsersList } from './../UsersList';

import {
  getUsers,
  createUser,
  deleteUser as deleteUserFromList,
  updateUser as updateUserInList
} from 'source';
import { showError } from 'utils';

import styles from './App.css';

export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    getUsers()
      .then(({ data }) => setUsers(data))
      .catch(showError);
  };

  const deleteUser = id => () => {
    deleteUserFromList(id)
      .then(() => {
        loadUsers();
      })
      .catch(showError);
  };

  const updateUser = user => {
    updateUserInList(user)
      .then(() => {
        loadUsers();
      })
      .catch(showError);
  };

  const onSubmitForm = user => {
    createUser(user)
      .then(() => {
        loadUsers();
      })
      .catch(showError);
  };

  return (
    <>
      <UsersList data={users} deleteUser={deleteUser} updateUser={updateUser} />
      <Form userData={null} onSubmitForm={onSubmitForm} />
    </>
  );
};
