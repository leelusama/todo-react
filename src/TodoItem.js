import React from 'react';

function TodoItem(props) {
  const { todo, onDelete } = props;
  return (
    <li>
      <button onClick={onDelete}>Delete</button>
      {todo.text}
    </li>
  );
}

export default TodoItem;
