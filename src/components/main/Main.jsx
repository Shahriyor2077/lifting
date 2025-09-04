import { useState } from "react";
import Form from "../form/Form";
import FoodView from "../foodView/FoodView";

const Main = () => {
  const [foods, setFoods] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [editingFood, setEditingFood] = useState(null);

  const handleOpen = () => setIsVisible(true);
  const handleClose = () => {
    setIsVisible(false);
    setEditingFood(null);
  };

  const handleSave = (food) => {
    if (editingFood) {
      setFoods(foods.map((f) => (f.id === food.id ? food : f)));
    } else {
      setFoods([...foods, food]);
    }
  };

  const handleEdit = (food) => {
    setEditingFood(food);
    setIsVisible(true);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-amber-500 p-6 rounded-2xl my-6 flex justify-between items-center">
        <h2 className="text-xl font-bold uppercase">Food store</h2>
        <button
          onClick={handleOpen}
          className="bg-slate-900 text-white size-8 rounded-lg text-xl"
        >
          &#10011;
        </button>
      </div>

      <FoodView foods={foods} onEdit={handleEdit} />

      {isVisible && (
        <Form
          onClose={handleClose}
          onSave={handleSave}
          editingFood={editingFood}
        />
      )}
    </div>
  );
};

export default Main;
