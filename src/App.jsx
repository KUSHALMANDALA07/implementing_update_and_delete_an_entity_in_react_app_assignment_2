import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

const API_URI = `${import.meta.env.VITE_API_URI}/doors`;


function App() {
  const [items, setItems] = useState([]);

  // Fetch items from the API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URI);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };

    fetchItems();
  }, []);

  // Delete item by id
  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    // Optionally call API to delete from backend
  };

  // Edit item logic (could open modal or similar)
  const handleEdit = (item) => {
    console.log("Editing item:", item);
    // Implement update logic here (e.g., open a form)
  };

  return <ItemList items={items} onDelete={handleDelete} onEdit={handleEdit} />;
}

export default App;
