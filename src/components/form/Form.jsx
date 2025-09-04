import { useState, useEffect } from "react";

const Form = ({ onSave, editingFood, onClose }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [isHalal, setIsHalal] = useState(false);

  useEffect(() => {
    if (editingFood) {
      setTitle(editingFood.title);
      setCategory(editingFood.category);
      setIsHalal(editingFood.isHalal);
    }
  }, [editingFood]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      id: editingFood ? editingFood.id : Date.now(),
      title,
      category,
      isHalal,
    };

    onSave(newFood);
    onClose();
    setTitle("");
    setCategory("");
    setIsHalal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[400px]">
        <h2 className="text-lg font-bold mb-4">
          {editingFood ? "Update Food" : "Create Food"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Food name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isHalal}
              onChange={(e) => setIsHalal(e.target.checked)}
              className="w-5 h-5 accent-slate-900"
            />
            <span>Is Halal</span>
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-400 text-white rounded py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-slate-900 text-white rounded py-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
