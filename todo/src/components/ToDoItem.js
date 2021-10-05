import React from 'react';

function ToDoItem() {
  return (
    <div>
      <div>Title</div>
      <div>Description</div>
      <div>Date due</div>
      <button type="button" onClick={() => { console.log('clicked'); }}>Delete</button>
      <input type="checkbox" />
    </div>
  );
}

export default ToDoItem;
