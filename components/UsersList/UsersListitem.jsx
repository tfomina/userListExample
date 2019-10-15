import React, { useState } from 'react';
import { Form } from './../Form';

import styles from './UsersListItem.css';

export const UsersListItem = props => {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const toggleEditForm = () => {
    setIsEditFormVisible(!isEditFormVisible);
  };

  const onSubmitForm = user => {
    updateUser(user);
    setIsEditFormVisible();
  };

  const { item, deleteUser, updateUser } = props;
  const { id, firstName, lastName, email } = item;

  return (
    <>
      <li className={styles.item}>
        <div className={styles.data}>
          <p>
            <b>First name: </b>
            {firstName}
          </p>
          <p>
            <b>Last name: </b>
            {lastName}
          </p>
          <p>
            <b>Email: </b>
            {email}
          </p>
          <button className={styles.button} onClick={deleteUser(id)}>
            Удалить
          </button>
          <button className={styles.button} onClick={toggleEditForm}>
            {isEditFormVisible ? 'Отменить' : 'Изменить'}
          </button>
        </div>

        {isEditFormVisible && (
          <Form userData={item} onSubmitForm={onSubmitForm} />
        )}
      </li>
    </>
  );
};
