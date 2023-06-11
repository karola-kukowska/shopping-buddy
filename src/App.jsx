import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Form from "./Form";
import List from "./List";

const getLocalStorage = () => JSON.parse(localStorage.getItem("list") || "[]");

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const App = () => {
  const [list, setList] = useState(getLocalStorage);

  const addItem = (item) => {
    const newList = [...list, item];
    setList(newList);
    setLocalStorage(newList);
    toast.success("Item added to list");
  };

  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    setLocalStorage(newList);
    toast.info("Item removed");
  };
  const editItem = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setList(newList);
    setLocalStorage(newList);
  };

  return (
    <main>
      <ToastContainer position="bottom-center" />
      <section className="section-center">
        <h2 className="title">Shopping Buddy</h2>
        <div className="title-underline"></div>
        <Form addItem={addItem} />
        <List list={list} removeItem={removeItem} editItem={editItem} />
      </section>
    </main>
  );
};

export default App;
