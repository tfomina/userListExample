import React from 'react';
import PropTypes from 'prop-types';
import { UsersListItem } from './UsersListItem';

import styles from './UsersList.css';

export const UsersList = ({ data, deleteUser, updateUser }) => (
  <>
    <h1>Пользователи</h1>
    {data.length ? (
      <ul className={styles.list}>
        {data.map(user => (
          <UsersListItem
            key={user.id}
            user={user}
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

UsersList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string
    })
  ).isRequired,
  deleteUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired
};
