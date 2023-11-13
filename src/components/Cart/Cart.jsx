import Nav from '../Nav/Nav'
import './Cart.css'

function Cart() {
    let itemsInCart = [{title: 'dummyProduct', id: 1, price: '£15.99', desc: 'dummy description of product', image: '/src/assets/images/dummy.jpg'}, {title: 'dummyProduct2', id: 2, price: '£24.49', desc: 'dummy description of product', image: '/src/assets/images/dummy.jpg'}];
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
            <Nav />
            <div>Shopping Cart</div>
            <ul>{itemElements}</ul>
            <a href="shop">Keep shopping</a>
        </>
    )
}

export default Cart;