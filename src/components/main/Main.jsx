import { useState } from "react";
import Form from "../form/Form";
import FoodView from "../foodView/FoodView";

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleOpen = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-slate-200 p-6 rounded-2xl my-6 flex justify-between items-center">
        <h2 className="text-xl font-bold uppercase">Food store</h2>
        <button
          onClick={handleOpen}
          className="bg-slate-900 text-white size-8 rounded-lg text-xl"
        >
          &#10011;
        </button>
      </div>
      {isVisible && <Form onClose={handleClose} />}
      <FoodView/>
    </div>
  );
};

export default Main;
