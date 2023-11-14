import {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import './Cart.css'

function Cart({ itemsInCart, removeFromCart, closeCart }) {
    const [itemElements, setItemElements] = useState(itemsInCart);
    useEffect(() => {
        if (itemsInCart.length !== 0) {
            let cartItems = itemsInCart.map(item =>
                <li key={item.id} className="cart-product">
                    <div>{item.title}</div>
                    <div><img src={item.image} className="cart-item-image"/></div>
                    <div>{item.desc}</div>
                    <div>£{item.price}</div>
                    <div>Quantity:{item.quantity}</div>
                    <button type="button" value={item.id} onClick={removeFromCart}>Remove item</button>
                </li>
            );
            setItemElements(cartItems);
        } else {
            setItemElements(<li className="cart-product"><div>Your cart is empty!</div></li>);
        }

    },[itemsInCart, removeFromCart]);

    return (
        <div id="cart">
            <div>Shopping Cart</div>
            <ul className="cart-list">{ itemElements }</ul>
            <div className="close-cart" onClick={closeCart}>Keep shopping</div>
        </div>
    )
}

Cart.propTypes = {
    itemsInCart: PropTypes.array,
    removeFromCart: PropTypes.func,
    closeCart: PropTypes.func
}

export default Cart;