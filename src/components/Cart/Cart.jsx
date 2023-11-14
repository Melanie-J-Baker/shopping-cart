import PropTypes from 'prop-types';
import './Cart.css'

function Cart({ itemsInCart }) {
    console.log(itemsInCart)
    const itemElements = itemsInCart.map(item =>
        <li key={item.id} className="cart-product">
            <div>{item.title}</div>
            <div><img src={item.image} className="cart-item-image"/></div>
            <div>{item.desc}</div>
            <div>{item.price}</div>
        </li>
    );
    return (
        <>
            <div>Shopping Cart</div>
            <ul>{itemElements}</ul>
            <a href="shop">Keep shopping</a>
        </>
    )
}

Cart.propTypes = {
    itemsInCart: PropTypes.array
}

export default Cart;