import { useState } from "react";

const Form = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [food, setFood] = useState("");
  const [isHalal, setIsHalal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const foods = {
      id: Date.now(),
      title,
      food,
    };
    console.log(foods);
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-full h-screen bg-black/30"
      ></div>
      <div className="fixed top-1/2 left-1/2 w-[450px] bg-white -translate-1/2 rounded-2xl p-6 ">
        <h2 className="text-xl font-bold">Create food</h2>
        <form onSubmit={handleSubmit} action="">
          <input
            className="border w-full h-10 indent-3 rounded-lg mt-3 border-gray-200"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="food"
          />
          <div className="mt-3 flex gap-1">
            <input
              className="border w-full h-10 indent-3 rounded-lg border-gray-200"
              value={food}
              onChange={(e) => setFood(e.target.value)}
              type="text"
              placeholder="category"
            />
            <button
              type="button"
              className="bg-slate-900 text-white px-3 rounded-lg text-xl"
            >
              &#10011;
            </button>
          </div>
          <label className="flex items-center gap-2 mt-3 cursor-pointer">
            <input
              type="checkbox"
              checked={isHalal}
              onChange={(e) => setIsHalal(e.target.checked)}
              className="w-5 h-5 accent-slate-900"
            />
            <span className="text-gray-800">Is Halal</span>
          </label>
          <div className="flex gap-2 mt-3">
            <button
              onClick={onClose}
              type="button"
              className="flex-1 bg-slate-900 text-white py-1.5 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-slate-900 text-white py-1.5 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
