import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce( (total, course) => total + course.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price;
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Courses Ordered: {cart.length}</p>
            <p>Total Price: $ {total}</p>
        </div>
    );
};

export default Cart;