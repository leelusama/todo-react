import React from 'react';

function TodoItem(props) {
  const { todo, onDelete } = props;
  const { text } = todo;
  return (
    <li>
      <button onClick={onDelete}>Delete</button>
      {text}
    </li>
  );
}

export default TodoItem;
