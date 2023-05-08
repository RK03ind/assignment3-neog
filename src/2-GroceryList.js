import { useRef, useState } from "react";

// Create a list of Grocery list items with checkboxes and as the user checks out the item those checked-out items should be listed in another section named ‘Completed list’. Add the list of items via an input field.
export const GroceryList = () => {
  const [groceryList, setGroceryList] = useState({
    toBuy: [],
    bought: [],
  });
  const addItemRef = useRef();

  const addItemToList = () => {
    let itemName = addItemRef.current.value;
    setGroceryList(({ toBuy, bought }) => {
      return {
        toBuy: [
          ...toBuy,
          { itemName, id: `${itemName}-${Math.floor(Math.random() * 1000)}` },
        ],
        bought,
      };
    });
  };

  const removeItemFromList = (removeId) => {
    setGroceryList(({ toBuy, bought }) => {
      return {
        toBuy: [...toBuy.filter((item) => item.id !== removeId)],
        bought: [...bought, toBuy.find((index) => index.id === removeId)],
      };
    });
  };

  return (
    <div className="grocery-list">
      <h2>Grocery List</h2>
      <div className="add-item">
        Add Item: <input type="text" ref={addItemRef} />
        <button onClick={addItemToList}>+</button>
      </div>

      <ul>
        {groceryList.toBuy.map(({ itemName, id }, index) => {
          return (
            <li key={id}>
              <input
                type="checkbox"
                name={itemName}
                onClick={() => removeItemFromList(id)}
              />
              <label htmlFor={itemName}>{itemName}</label>
            </li>
          );
        })}
      </ul>
      {groceryList.bought.length ? <h3>Completed List</h3> : ""}
      <ul>
        {groceryList.bought.map(({ itemName, id }, index) => {
          return (
            <li key={id}>
              <label>{itemName}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
