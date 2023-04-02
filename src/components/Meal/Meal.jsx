import React from "react";
import "./Meal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const Meal = (props) => {
    const { meal } = props;
    const handleAddToOrder = props.handleAddToOrder;
    return (
        <div className="meal">
            <img className="thumb" src={meal.strMealThumb} alt="" />
            <h3>{meal.strMeal}</h3>
            <p>Category: {meal.strCategory}</p>
            <p>Location: {meal.strArea}</p>
            <p>
                YouTube:{" "}
                <a
                    href={meal.strYoutube ? meal.strYoutube : "#"}
                    target="_blank"
                >
                    {meal.strYoutube ? meal.strYoutube : "#"}
                </a>
            </p>
            <p>
                Source:{" "}
                <a href={meal.strSource ? meal.strSource : "#"} target="_blank">
                    {meal.strSource ? meal.strSource : "unavailable"}
                </a>
            </p>
            <button onClick={() => handleAddToOrder(meal.idMeal)}>
                Add to Order List{" "}
                <span>
                    <FontAwesomeIcon icon={faUtensils} />
                </span>
            </button>
        </div>
    );
};

export default Meal;
