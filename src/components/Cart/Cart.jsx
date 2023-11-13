import Nav from '../Nav/Nav'
import './Cart.css'

function Cart() {
    let itemsInCart = [{name: 'dummyProduct', id: 1}, {name: 'dummyProduct2', id: 2}];
    const itemElements = itemsInCart.map(item =>
        <li key={item.id} className="product">item.name</li>
    );
    return (
        <>
            <Nav />
            <div>Shopping Cart</div>
            <ul>{itemElements}</ul>
            <a href="shop">Keep shopping</a>
        </>
    )
}

export default Cart;