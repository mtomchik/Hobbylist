import React, { useState } from 'react';
import HobbyForm from './HobbyForm';

function Hobby(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.hobby);

  const submitUpdate = (value) => {
    props.editHobbyItem(edit.id, value);
    setEdit({ id: null, value: '', eagerness: ''});
    // TODO: Write logic to update the `edit` value in state after a user updates an entry in the list

    // TODO: Set the key:value pairs in the `edit` object back to empty strings

  };

  // If the user is attempting to edit an item, render the hobby form with the edit variable passed as a prop
  if (edit.id) {
    return <HobbyForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.hobby.map((item, index) => (
    // TODO: Add a className of `hobby row complete ${item.eagerness}` for completed items, and `hobby-row ${item.eagerness}` for non-completed items
    // TODO: Add a key attribute set to the value of the index position
    // Hint: use a ternary operator
    <div className={ } key={}>

      // TODO: Add an onClick event that invokes the `completeHobbyItem` method passing the item id as a argument
      <div key={} onClick={}>
          {/* TODO: Add the item text here */}
      </div>
      <div className="icons">
        // TODO: Add an onClick event update the `edit` object with the `id`, `value`, and `eagerness` properties
        <p onClick={}> ✏️</p>
        {/* TODO: Add an onClick event that will invoke the removeHobbyItem method passing in the `item.id` */}
        <p onClick={}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Hobby;
