const FoodView = ({ foods, onEdit }) => {
  return (
    <div className="mt-6">
      <table className="w-full border-collapse border border-gray-300 text-center">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Food</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Halal</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food, index) => (
            <tr key={food.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{food.title}</td>
              <td className="border border-gray-300 px-4 py-2">
                {food.category}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {food.isHalal ? "✅" : "❌"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => onEdit(food)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
          {!foods.length && (
            <tr>
              <td
                colSpan="5"
                className="border border-gray-300 px-4 py-3 text-gray-500"
              >
                No foods yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FoodView;
