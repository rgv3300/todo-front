import React, { } from 'react';

function UserForm() {
  return (
    <form>
      <div>

        <label htmlFor="title">
          Title
          <input type="text" name="title" />
        </label>
        <label htmlFor="description">
          Description
          <input type="text" name="description" />
        </label>
        <label htmlFor="date">
          Date due
          <input type="date" name="datedue" />
        </label>

      </div>
    </form>

  );
}

export default UserForm;
