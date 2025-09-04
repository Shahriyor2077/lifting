import lavash from "../../assets/lavash.webp"
import osh from "../../assets/osh.jpg"
import sushi from "../../assets/sushi.webp"
import pirog from "../../assets/pirog.jpg"
import salad from "../../assets/salad.jpg"
import somsa from "../../assets/somsa.jpeg"

const FoodView = () => {
  return (
    <div className=" container mx-auto grid grid-cols-4 gap-3">
      <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
        <div className="w-full h-48 mb-3">
          <img
            src={lavash}
            alt="Lavash"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <h3 className="text-lg font-semibold text-gray-800">Lavash</h3>
        <p className="text-sm text-gray-600">Juda mazali</p>
        <p className="text-base font-bold text-green-600">50 ming so'm</p>
        <p className="text-xs text-gray-500">Uzb · Fast Food</p>
      </div>

      <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
        <div className="w-full h-48 mb-3">
          <img
            src={osh}
            alt="Osh"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <h3 className="text-lg font-semibold text-gray-800">Osh</h3>
        <p className="text-sm text-gray-600">Juda mazali</p>
        <p className="text-base font-bold text-green-600">50 ming so'm</p>
        <p className="text-xs text-gray-500">Uzb · Milliy</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
        <div className="w-full h-48 mb-3">
          <img
            src={sushi}
            alt="Sushi"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <h3 className="text-lg font-semibold text-gray-800">Sushi</h3>
        <p className="text-sm text-gray-600">Juda mazali</p>
        <p className="text-base font-bold text-green-600">100 ming so'm</p>
        <p className="text-xs text-gray-500">Japan · Asian Food</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
        <div className="w-full h-48 mb-3">
          <img
            src={pirog}
            alt="Pirog"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <h3 className="text-lg font-semibold text-gray-800">Pirog</h3>
        <p className="text-sm text-gray-600">Juda mazali</p>
        <p className="text-base font-bold text-green-600">30 ming so'm</p>
        <p className="text-xs text-gray-500">Uzb · Dessert</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
        <div className="w-full h-48 mb-3">
          <img
            src={salad}
            alt="Salad"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <h3 className="text-lg font-semibold text-gray-800">Salatlar</h3>
        <p className="text-sm text-gray-600">Juda mazali</p>
        <p className="text-base font-bold text-green-600">20 ming so'm</p>
        <p className="text-xs text-gray-500">Uzb · Healthy Food</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
        <div className="w-full h-48 mb-3">
          <img
            src={somsa}
            alt="Somsa"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <h3 className="text-lg font-semibold text-gray-800">Somsa</h3>
        <p className="text-sm text-gray-600">Juda mazali</p>
        <p className="text-base font-bold text-green-600">15 ming so'm</p>
        <p className="text-xs text-gray-500">Uzb · Street Food</p>
      </div>
    </div>
  );
};

export default FoodView;
