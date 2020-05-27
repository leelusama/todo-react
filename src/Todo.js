import React, { useReducer, useEffect } from 'react';
import TodoItem from './TodoItem';

function action(type, payload) {
  return { type, payload };
}

const initialState = {
  todos: [],
  input: '',
};

const types = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  CHANGE_INPUT: 'CHANGE_INPUT',
};

const actions = {
  addTodo(text) {
    return action(types.ADD_TODO, text);
  },
  deleteTodo(id) {
    return action(types.DELETE_TODO, id);
  },
  changeInput(value) {
    return action(types.CHANGE_INPUT, value);
  },
};

function reducer(state, action) {
  switch (action.type) {
    case types.ADD_TODO:
      const ids = state.todos.map((todo) => todo.id);
      const maxId = Math.max(...ids, 0);
      const id = maxId + 1;
      return {
        todos: [...state.todos, { id, text: action.payload }],
        input: state.input,
      };
    case types.DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        input: state.input,
      };
    case types.CHANGE_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    default:
      throw new Error();
  }
}

function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Todo List</h2>
      <p>Current input: {state.input}</p>
      <input
        type='text'
        placeholder='new todo'
        value={state.input}
        onChange={(e) => dispatch(actions.changeInput(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(actions.addTodo(state.input));
          dispatch(actions.changeInput(''));
        }}
      >
        Добавить
      </button>
      <ul>
        {state.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => dispatch(actions.deleteTodo(todo.id))}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
