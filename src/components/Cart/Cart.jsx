import {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import './Cart.css'

function Cart({ itemsInCart, removeFromCart }) {
    const [itemElements, setItemElements] = useState(itemsInCart);
    useEffect(() => {
        let cartItems = itemsInCart.map(item =>
            <li key={item.id} className="cart-product">
                <div>{item.title}</div>
                <div><img src={item.image} className="cart-item-image"/></div>
                <div>{item.desc}</div>
                <div>{item.price}</div>
                <button type="button" value={item.id} onClick={removeFromCart}>Remove item</button>
            </li>
        );
        setItemElements(cartItems);
    },[itemsInCart, removeFromCart]);

    return (
        <>
            <div>Shopping Cart</div>
            <ul>{itemElements}</ul>
            <a href="shop">Keep shopping</a>
        </>
    )
}

Cart.propTypes = {
    itemsInCart: PropTypes.array,
    removeFromCart: PropTypes.func,
}

export default Cart;