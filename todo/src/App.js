import React from 'react';
import ToDoItem from './components/ToDoItem';
import UserForm from './components/UserForm';

function App() {
  return (
    <div>
      <UserForm />
      <ToDoItem />
    </div>
  );
}

export default App;
