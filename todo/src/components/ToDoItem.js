import React from 'react';

function ToDoItem() {
  return (
    <div>
      <div>{}</div>
      <div>{}</div>
      <div>{}</div>
      <button type="button" onClick={() => { console.log('clicked'); }}>Delete</button>
      <input type="checkbox" />
    </div>
  );
}

export default ToDoItem;
