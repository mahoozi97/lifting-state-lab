import { useState } from "react";
import { CounterDisplay } from "./components/CounterDisplay";
import { CounterControls } from "./components/CounterControls";
import { CartSummary } from "./components/CartSummary";
import { ProductList } from "./components/ProductList";

export const App = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (type) => {
    if (type === "+") {
      setCounter(counter + 1);
    } else if (type === "-" && counter > 0) {
      setCounter(counter - 1);
    }
  };

  // Ex:2
  const [cartCount, setCartCount] = useState(0);
  const [items, setItems] = useState([
    {
      id: 1,
      itemName: "Burger",
    },
    {
      id: 2,
      itemName: "Pizza",
    },
    {
      id: 3,
      itemName: "Fries",
    },
  ]);

  const isDisabled = cartCount === 0;

  const handleCartCount = () => {
    setCartCount(cartCount + 1);
  };

  const handleCheckOut = () => {
    alert("Not today. Come back tomorrow ✋🏼");
    setCartCount(0);
  };
  return (
    <>
      <div className="flex justify-center mt-10 mb-10">
        <div className="w-full max-w-3xl">
          <div className="flex flex-col items-center bg-black">
            <p className="text-white text-5xl font-extrabold mt-2">Latabat</p>
            <div className="w-full max-w-3xl p-6">
              <CounterDisplay counter={counter} />
              <CounterControls handleCounter={handleCounter} />
            </div>

            {/* Ex:2 */}

            <div className="w-full max-w-3xl p-6">
              <CartSummary
                cartCount={cartCount}
                handleCheckOut={handleCheckOut}
                isDisabled={isDisabled}
              />
              <ProductList items={items} handleCartCount={handleCartCount} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
