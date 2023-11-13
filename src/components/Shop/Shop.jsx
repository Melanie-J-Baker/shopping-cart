import Nav from '../Nav/Nav'
import './Shop.css'

function Shop() {
    let products = [{title: 'dummyProduct', id: 1, price: '£15.99', desc: 'dummy description of product', image: '/src/assets/images/dummy.jpg'}, {title: 'dummyProduct2', id: 2, price: '£24.49', desc: 'dummy description of product', image: '/src/assets/images/dummy.jpg'}];
    const productElements = products.map(item =>
        <li key={item.id} className="product">
            <div>{item.title}</div>
            <div><img src={item.image} className="product-image"/></div>
            <div>{item.desc}</div>
            <div>{item.price}</div>
        </li>
    );
    return (
        <>
            <Nav/>
            <div>{productElements}</div>
        </>
    )
}

export default Shop;
