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
  };

  // If the user is attempting to edit an item, render the hobby form with the edit variable passed as a prop
  if (edit.id) {
    return <HobbyForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.hobby.map((item, i) => (
    <div 
    className={
      item.isComplete
      ? `hobby-row complete ${item.eagerness}`
      : `hobby-row ${item.eagerness}` 
      
    } key={i}
    >
<div key={item.id} onClick={()=> props.completeHobbyItem(item.id)}>
          {item.text}
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
