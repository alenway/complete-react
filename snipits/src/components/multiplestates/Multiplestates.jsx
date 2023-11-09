import { useState } from "react";
const Multiplestates = () => {
  const [quantity, setQuantity] = useState({
    Pizza: 0,
    Juice: 0,
    Shake: 0,
  });

  const handleQuentity = (item, action) => {
    setQuantity((prevState) => {
      return {
        ...prevState,
        [item]: action === "up" ? prevState[item] + 1 : prevState[item] - 1,
      };
    });
  };
  return (
    <>
      <div className="mt-11 ml-12">
        <div className="flex">
          <span>Pizza</span>
          <button
            disabled={quantity.Pizza <= 0}
            onClick={() => handleQuentity("Pizza", "down")}
          >
            -
          </button>
          <span>{quantity.Pizza}</span>
          <button onClick={() => handleQuentity("Pizza", "up")}>+</button>
        </div>

        <div className="flex">
          <span>Juice</span>
          <button onClick={() => handleQuentity("Juice", "down")}>-</button>
          <span>{quantity.Juice}</span>
          <button onClick={() => handleQuentity("Juice", "up")}>+</button>
        </div>

        <div className="flex">
          <span>Shake</span>
          <button onClick={() => handleQuentity("Shake", "down")}>-</button>
          <span>{quantity.Shake}</span>
          <button onClick={() => handleQuentity("Shake", "up")}>+</button>
        </div>
      </div>
    </>
  );
};

export default Multiplestates;
