import { AiTwotoneDelete } from "react-icons/ai";
function SingleItem({ id, completed, name, removeItem, editItem }) {
  return (
    <div key={id} className="single-item">
      <input
        type="checkbox"
        name="chbx"
        id="chbx"
        checked={completed}
        onChange={() => {
          editItem(id);
        }}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: completed && "line-through",
        }}
      >
        {name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(id)}
      >
        <AiTwotoneDelete />
        <span>&nbsp;</span>
        <span>Remove</span>
      </button>
    </div>
  );
}
export default SingleItem;
