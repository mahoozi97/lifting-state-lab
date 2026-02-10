export const CounterControls = ({ handleCounter }) => {
  return (
    <div className="flex justify-center mt-5 space-x-5">
      <button
        className="bg-white w-10 h-10 rounded-xl cursor-pointer"
        onClick={() => {
          handleCounter("-");
        }}
      >
        -
      </button>

      <button
        className="bg-orange-500 w-10 h-10 rounded-xl cursor-pointer"
        onClick={() => {
          handleCounter("+");
        }}
      >
        +
      </button>
    </div>
  );
};
