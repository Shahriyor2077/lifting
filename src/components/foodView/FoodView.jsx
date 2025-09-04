import lavash from "../../assets/lavash.webp";
import osh from "../../assets/osh.jpg";
import sushi from "../../assets/sushi.webp";
import pirog from "../../assets/pirog.jpg";
import salad from "../../assets/salad.jpg";
import somsa from "../../assets/somsa.jpeg";

const foods = [
  {
    id: 1,
    name: "Lavash",
    desc: "Juda mazali",
    price: "50 ming so'm",
    type: "Uzb · Fast Food · Is Halal",
    img: lavash,
  },
  {
    id: 2,
    name: "Osh",
    desc: "Juda mazali",
    price: "50 ming so'm",
    type: "Uzb · Milliy · Is Halal",
    img: osh,
  },
  {
    id: 3,
    name: "Sushi",
    desc: "Juda mazali",
    price: "100 ming so'm",
    type: "Japan · Asian Food · Is Halal",
    img: sushi,
  },
  {
    id: 4,
    name: "Pirog",
    desc: "Juda mazali",
    price: "30 ming so'm",
    type: "Uzb · Dessert · Is Halal",
    img: pirog,
  },
  {
    id: 5,
    name: "Salatlar",
    desc: "Juda mazali",
    price: "20 ming so'm",
    type: "Uzb · Healthy Food · Is Halal",
    img: salad,
  },
  {
    id: 6,
    name: "Somsa",
    desc: "Juda mazali",
    price: "15 ming so'm",
    type: "Uzb · Street Food · Is Halal",
    img: somsa,
  },
];

const FoodView = () => {
  return (
    <div className="container mx-auto overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-300">
        <thead className="bg-amber-300">
          <tr>
            <th className="px-4 py-2 border">Image</th>
            <th className="px-4 py-2 border">Food</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Price</th>
            <th className="px-4 py-2 border">Category</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr
              key={food.id}
              className="text-center hover:bg-gray-200 transition"
            >
              <td className="px-4 py-2 border">
                <img
                  src={food.img}
                  alt={food.name}
                  className="w-24 h-24 object-cover mx-auto rounded-lg"
                />
              </td>
              <td className="px-4 py-2 border font-semibold">{food.name}</td>
              <td className="px-4 py-2 border text-gray-600">{food.desc}</td>
              <td className="px-4 py-2 border font-bold text-green-600">
                {food.price}
              </td>
              <td className="px-4 py-2 border text-gray-500">{food.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodView;
