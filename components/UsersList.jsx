import React from 'react';

const UsersList = ({ data, deleteUser }) => (
  <div>
    {data.length !== 0 ? (
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>{`First name: ${item.firstName}`}</p>
            <p>{`Second name: ${item.secondName}`}</p>
            <p>{`Email: ${item.email}`}</p>
            <button onClick={deleteUser(item.firstName)}>Удалить</button>
          </li>
        ))}
      </ul>
    ) : (
      <h4>Нет данных</h4>
    )}
  </div>
);

export default UsersList;
