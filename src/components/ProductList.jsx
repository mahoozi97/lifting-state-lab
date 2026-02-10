export const ProductList = ({ items, handleCartCount }) => {
  return (
    <div className="bg-white flex flex-col space-y-2.5 p-3 mt-5 rounded-xl">
      <div className="flex justify-center">
        <p className="font-bold">Pupolar Items</p>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-gray-100 p-2 rounded-xl"
        >
          <p className="text-gray-500">{item.itemName}</p>
          <button
            className="bg-orange-500 p-1.5 rounded-xl cursor-pointer"
            onClick={handleCartCount}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};
