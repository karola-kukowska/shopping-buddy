import { useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      //console.log("No item added!");
      toast.error("No item added!");
      return;
    }
    addItem({ name: newItem.toLowerCase(), id: nanoid(), completed: false });
    setNewItem("");
  };
  return (
    <section>
      <form onSubmit={handleSubmit} className="form-control">
        <input
          type="text"
          name="item"
          id="item"
          className="form-input"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </form>
    </section>
  );
};

export default Form;
