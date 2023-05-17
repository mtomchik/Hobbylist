import React, { useState } from "react";
import HobbyForm from "./HobbyForm";
import Hobby from "./Hobby";

function HobbyList() {
  const [hobby, setHobby] = useState([]);

  // Function to add a hobby list item
  const addHobbyItem = (item) => {
    // TODO: Write logic to add the new hobby item to the hobby state variable
  };

  // Function to mark hobby list item as complete
  const completeHobbyItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedHobby = hobby.map((item) => {
      // TODO: Write logic that marks an item as complete or incomplete when invoked
    });

    setHobby(updatedHobby);
  };

  // Function to remove hobby list item and update state
  const removeHobbyItem = (id) => {
    // TODO: Write logic that will return an array of items that don't contain the ID passed to this function
    // TODO: Update the hobby state variable
  };

  // Function to edit the hobby list item
  const editHobbyItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the id of the item that was clicked and if so, we set it to a new value
    setHobby((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your hobby list?</h1>
      <HobbyForm onSubmit={addHobbyItem} />
      <Hobby
        hobby={hobby}
        completeHobbyItem={completeHobbyItem}
        removeHobbyItem={removeHobbyItem}
        editHobbyItem={editHobbyItem}
      ></Hobby>
    </div>
  );
}

export default HobbyList;
