import { useEffect, useState } from "react";
import Meals from "./components/Meals/Meals";
import Orders from "./components/Orders/Orders";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
    const [meals, setMeals] = useState([]);
    const [orders, setOrders] = useState([]);
    const [quantity, setQuantity] = useState(0);
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
            .then((res) => res.json())
            .then((data) => setMeals(data.meals));
    }, []);
    useEffect(() => {
        let quantity = 0;
        for (const order of orders) {
            quantity += order.strQuantity;
        }
        setQuantity(quantity);
    }, [orders]);
    const handleAddToOrder = (id) => {
        let newOrders = [];
        const item = meals.find((meal) => meal.idMeal === id);
        const exists = orders.find((meal) => meal.idMeal === id);
        if (!exists) {
            item.strQuantity = 1;
            newOrders = [...orders, item];
        } else {
            item.strQuantity += 1;
            newOrders = [...orders];
        }
        setOrders(newOrders);
    };
    return (
        <div className="App">
            <Header></Header>
            <main>
                <h1>The Meal DB</h1>
                <div className="main-content">
                    <Meals
                        meals={meals}
                        handleAddToOrder={handleAddToOrder}
                    ></Meals>
                    <div className="order-container">
                        <Orders quantity={quantity} orders={orders}></Orders>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
