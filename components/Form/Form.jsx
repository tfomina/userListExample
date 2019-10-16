import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CreateUUID } from 'utils';

import styles from './Form.css';

const initialUser = {
  id: '',
  firstName: '',
  lastName: '',
  email: ''
};

export const Form = props => {
  const { userData } = props;
  const [user, setUser] = useState(userData ? userData : initialUser);

  const changeValue = e => {
    const { name, value } = e.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  const clearState = () => {
    setUser({ ...initialUser });
  };

  const onSubmit = e => {
    e.preventDefault();

    const { id, firstName, lastName, email } = user;
    if (!firstName || !lastName || !email) {
      alert('Заполнены не все поля!');
      return;
    }

    let userToSave = { ...user };
    if (!id) {
      userToSave.id = CreateUUID();
    }

    const { onSubmitForm } = props;
    onSubmitForm(userToSave);

    clearState();
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label className={styles.formRow}>
        <div className={styles.formLabel}>Имя</div>
        <input
          type="text"
          name="firstName"
          className={styles.formInput}
          onChange={changeValue}
          value={user.firstName}
        />
      </label>

      <label className={styles.formRow}>
        <div className={styles.formLabel}>Фамилия</div>
        <input
          type="text"
          name="lastName"
          className={styles.formInput}
          onChange={changeValue}
          value={user.lastName}
        />
      </label>

      <label className={styles.formRow}>
        <div className={styles.formLabel}>Email</div>
        <input
          type="email"
          name="email"
          className={styles.formInput}
          onChange={changeValue}
          value={user.email}
        />
      </label>
      <div className={styles.formRow}>
        <button className={styles.formSaveBtn}>Сохранить</button>
      </div>
    </form>
  );
};

Form.defaultProps = {
  userData: initialUser
};

Form.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string
  }).isRequired,
  onSubmitForm: PropTypes.func.isRequired
};
