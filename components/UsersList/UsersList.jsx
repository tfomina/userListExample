import React from 'react';
import { UsersListItem } from './UsersListItem';

import styles from './UsersList.css';

export const UsersList = ({ data, deleteUser, updateUser }) => (
  <>
    <h1>Пользователи</h1>
    {data.length ? (
      <ul className={styles.list}>
        {data.map(item => (
          <UsersListItem
            key={item.id}
            item={item}
            deleteUser={deleteUser}
            updateUser={updateUser}
          />
        ))}
      </ul>
    ) : (
      <h4>Нет данных</h4>
    )}
  </>
);
