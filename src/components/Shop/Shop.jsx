import { useEffect, useState } from 'react';
import Nav from '../Nav/Nav'
import Cart from '../Cart/Cart'
import './Shop.css'

const Shop = () => {
    const [itemsInCart, setItemsInCart] = useState([]);
    const [products, setProducts] = useState([{title: 'dummyProduct', id: 1, price: '£15.99', desc: 'dummy description of product', image: '/src/assets/images/dummy.jpg'}, {title: 'dummyProduct2', id: 2, price: '£24.49', desc: 'dummy description of product', image: '/src/assets/images/dummy.jpg'}])
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics?limit=5', { mode: 'cors' })
            .then((response) => response.json())
            .then((response) => setProducts(response))
            .catch((error) => console.error(error));
    }, []);

    const addToCart = (e) => {
        let inCart = itemsInCart.find(function (x) {
            if (x.id == e.target.value) return true;
        })
        if (!inCart) {
            let result = products.find(function (x) {
                if (x.id == e.target.value) return x
            }) 
            setItemsInCart([...itemsInCart, result]);  
        } else {
            // increase quantity
        }

    }

    const productElements = products.map(item =>
        <li key={item.id} className="product">
            <div>{item.title}</div>
            <div><img src={item.image} className="product-image"/></div>
            <div>{item.desc}</div>
            <div>{item.price}</div>
            <button type="button" className="buy-btn" value={item.id} onClick={addToCart}>Buy</button>
        </li>
    );

    const removeFromCart = (e) => {
        for(var i = 0; i < itemsInCart.length; i++) {
            if (itemsInCart[i].id == e.target.value) {
                itemsInCart.splice(i, 1);
                setItemsInCart([...itemsInCart]);
                break;
            }
        }
        console.log(itemsInCart)
    }

    return (
        <>
            <Nav/>
            <div>{productElements}</div>
            <Cart itemsInCart={itemsInCart} removeFromCart={removeFromCart}/>
        </>
    )
}

export default Shop;
