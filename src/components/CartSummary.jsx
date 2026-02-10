export const CartSummary = ({ cartCount, handleCheckOut, isDisabled }) => {
  return (
    <div className="flex justify-between items-center bg-orange-500 p-5 rounded-xl h-40">
      <div className="flex flex-col gap-6 text-white">
        <p>Your Cart</p>
        <p className="font-bold text-2xl">
          {cartCount} {cartCount >= 2 ? "items" : "item"}
        </p>
      </div>
      <div>
        <button
          className="bg-orange-400 p-1.5 rounded-xl text-white cursor-pointer"
          onClick={handleCheckOut}
          disabled={isDisabled}
        >
          Check Out →
        </button>
      </div>
    </div>
  );
};
