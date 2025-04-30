const Item = ({ item, onDelete, onEdit }) => {
    return (
      <div className="item">
        <span>{item.name}</span>
        <button onClick={() => onEdit(item)}>Edit</button>
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    );
  };
  
  export default Item;
  