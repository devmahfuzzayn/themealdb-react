import React from "react";
import Meal from "../Meal/Meal";
import "./Meals.css";

const Meals = (props) => {
    const meals = props.meals;
    const handleAddToOrder = props.handleAddToOrder;
    return (
        <div className="meals">
            <h3>Total Meals: {meals?.length}</h3>
            <div className="meals-container">
                {meals?.map((meal) => (
                    <Meal
                        key={meal.idMeal}
                        meal={meal}
                        handleAddToOrder={handleAddToOrder}
                    ></Meal>
                ))}
            </div>
        </div>
    );
};

export default Meals;
