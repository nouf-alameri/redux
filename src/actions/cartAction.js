import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const addItem = (products) => {
  return {
    type: ADD_ITEM,
    data: products
  };
};

const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

export { addItem, deleteItem };
