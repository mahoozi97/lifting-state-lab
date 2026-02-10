export const CounterDisplay = ({ counter }) => {
  return (
    <div className="flex flex-col bg-white items-center h-45 justify-center rounded-xl space-y-6 md:space-y-12">
      <p className="text-gray-500">Current Count</p>
      <p className="text-orange-500 font-extrabold text-4xl">{counter}</p>
    </div>
  );
};
