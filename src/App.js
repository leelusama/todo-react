import React, { useEffect } from 'react';
import Todo from './Todo';

function App() {
  useEffect(() => {
    document.title = 'Todo React';
  }, []);

  return (
    <React.Fragment>
      <h1>Todo</h1>
      <Todo />
    </React.Fragment>
  );
}

export default App;
