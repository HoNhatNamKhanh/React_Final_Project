import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import FoodDescription from "../../components/FoodDescription/FoodDescription";
import { StoreContext } from "../../context/StoreContext";

const Food = () => {
  const { foodList,addtoCart } = useContext(StoreContext);
  const { foodId } = useParams();

  console.log("foodId:", foodId);

  // Tìm mặt hàng với `_id` tương ứng từ `foodList`
  const food = foodList.find((food) => food._id === foodId);

  console.log("food:", food);

  return (
    <div>
      {food ? (
        <FoodDescription food={food} />
      ) : (
        <div>Food not found for ID: {foodId}</div>
      )}
    </div>
  );
};

export default Food;
