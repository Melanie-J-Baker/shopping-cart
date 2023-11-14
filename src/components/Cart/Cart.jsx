import {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import './Cart.css'

function Cart({ itemsInCart, removeFromCart, closeCart, totalItems, totalPrice }) {
    const [itemElements, setItemElements] = useState(itemsInCart);
    //const [totalItems, setTotalItems] = useState(0);
    //const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (itemsInCart.length !== 0) {
            // Create cart items
            let cartItems = itemsInCart.map(item =>
                <li key={item.id} className="cart-product">
                    <div className="cart-item-title">{item.title}</div>
                    <div className="cart-outer-wrapper">
                        <div><img src={item.image} className="cart-item-image"/></div>
                        <div className="cart-inner-wrapper">
                            <div className="cart-item-price">£{item.price}</div>
                            <div className="cart-item-quantity">Quantity: {item.quantity}</div>
                            <button type="button" className="remove" value={item.id} onClick={removeFromCart}>Remove item</button>
                        </div>
                    </div>
                </li>
            );
            setItemElements(cartItems);
        } else {
            setItemElements(<li className="cart-product"><div>Your cart is empty!</div></li>);
        }
    }, [itemsInCart, removeFromCart]);

    /*useEffect(() => {
        if (itemsInCart.length !== 0) {
            // Set total number of items in cart and total price
            itemsInCart.map(item => {
                setTotalItems(totalItems + item.quantity);
                setTotalPrice(totalPrice + (item.price * item.quantity))
            })
        }

    },[itemsInCart])*/


    return (
        <div id="cart">
            <div className="cart-title">Shopping Cart</div>
            <ul className="cart-list">{itemElements}</ul>
            <div className="cart-btns">
                <button type="button" className="close-cart" onClick={closeCart}>Keep shopping</button>
                <button type="button" className="checkout">Checkout</button>
            </div>
            <div className="total-items">Total items: {totalItems}</div>
            <div className="total">Total price: £{totalPrice}</div>
        </div>
    )
}

Cart.propTypes = {
    itemsInCart: PropTypes.array,
    removeFromCart: PropTypes.func,
    closeCart: PropTypes.func,
    totalItems: PropTypes.number,
    totalPrice: PropTypes.number
}

export default Cart;