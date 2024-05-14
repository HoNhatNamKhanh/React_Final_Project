import React, { useContext } from "react";
import "./FoodDescription.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const FoodDescription = ({ food }) => {
  const { addToCart, url, cartItems, removeFromCart } =
    useContext(StoreContext);

  // Kiểm tra xem dữ liệu food đã được truyền đúng chưa
  if (!food) {
    return <div>No food item selected</div>;
  }

  return (
    <div className="food-description">
      <div className="food-description-image">
        <img className="" src={url + "/images/" + food.image} alt={food.name} />
      </div>
      <div className="food-description-info">
        <h1 className="food-description-name">{food.name}</h1>
        <div className="des-1">
        <div className="food-description-price">Price:  ${food.price}</div>
        <div className="food-description-desc">
          <p>Description: {food.description}</p>
        </div>
        <p className="food-description-category">Category: {food.category}</p>
        <div className="button-1">
        {!cartItems[food._id] ? (
          
          <button onClick={() => addToCart(food._id)}
          >Add Food</button>
        ) : (
          <div className="food-description-counter">
            <button
              onClick={() => removeFromCart(food._id)}
              
            >-</button>
            <p>{cartItems[food._id]}</p>
            <button
              onClick={() => addToCart(food._id)}
              
            >+</button>
          
          </div>
        )}
        <br /><Link to="/"><button>Back To Home</button></Link>

      </div></div>
        
        </div>

    </div>
  );
};

export default FoodDescription;
