import React from "react";
import "./Orders.css";
import Order from "../Order/Order";
import "./Orders.css";

const Orders = (props) => {
    const {quantity, orders} = props;
    return (
        <div className="orders">
            <h1>Orders</h1>
            <h3>Total Orders: {quantity}</h3>
            {orders.map((order) => (
                <Order key={order.idMeal} order={order} orders={orders}></Order>
            ))}
        </div>
    );
};

export default Orders;
