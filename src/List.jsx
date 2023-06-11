import SingleItem from "./SingleItem";

const List = ({ list, removeItem, editItem }) => {
  return (
    <div className="items">
      {list.map((item) => {
        return (
          <SingleItem
            key={item.id}
            {...item}
            editItem={editItem}
            removeItem={removeItem}
          />
        );
      })}
    </div>
  );
};

export default List;
