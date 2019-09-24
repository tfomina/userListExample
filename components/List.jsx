import React from 'react';

const List = ({ list }) => (
    <ul>
        {list.map((item, index) => <li key={index}>{item.todo}</li>)}
    </ul>
);

export default List;
