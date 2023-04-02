import React from "react";

const Order = (props) => {
    const { order, orders } = props;
    const orderCount =
        orders.indexOf(orders.find((item) => item.idMeal === order.idMeal)) + 1;
    return (
        <div>
            <p>
                {orderCount}. {order.strMeal} x {order.strQuantity}
            </p>
        </div>
    );
};

export default Order;
