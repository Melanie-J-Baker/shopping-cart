import { useEffect, useState } from 'react';
import Nav from '../Nav/Nav'
import Cart from '../Cart/Cart'
import './Shop.css'

const Shop = () => {
    const [itemsInCart, setItemsInCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics?limit=5', { mode: 'cors' })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json()
            })
            .then((response) => setProducts(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, []);

    const addToCart = (e) => {
        let inCart = itemsInCart.find(function (x) {
            if (x.id == e.target.value) return true;
        })
        if (!inCart) {
            let result = products.find(function (x) {
                if (x.id == e.target.value) {
                    x.quantity = 1;
                    return x
                }
            })
            setItemsInCart([...itemsInCart, result]);
        } else {
            itemsInCart.find(function (x) {
                if (x.id == e.target.value) {
                    x.quantity++// increase quantity
                }
            })
            setItemsInCart([...itemsInCart])
        }
    }

    const productElements = products.map(item =>
        <li key={item.id} className="product">
            <div className="product-title">{item.title}</div>
            <div><img src={item.image} className="product-image" /></div>
            <div className="show-desc">See Description</div>
            <div className="product-desc">{item.description}</div>
            <div className="product-price">£{item.price}</div>
            <button type="button" className="buy-btn" value={item.id} onClick={addToCart}>Buy</button>
        </li>
    );

    const removeFromCart = (e) => {
        for(var i = 0; i < itemsInCart.length; i++) {
            if (itemsInCart[i].id == e.target.value) {
                if (itemsInCart[i].quantity == 1) {
                    itemsInCart.splice(i, 1);
                    setItemsInCart([...itemsInCart]);
                    break;
                } else if (itemsInCart[i].quantity > 1) {
                    itemsInCart[i].quantity--;
                    setItemsInCart([...itemsInCart]);
                }

            }
        }
    }

    const openCart = () => {
        document.getElementById('cart').style.width = "300px";
    }

    const closeCart = () => {
        document.getElementById('cart').style.width = "0";
    }

    if (error) return <p className="error">A network error was encountered</p>;
    if (loading) return <p className="loading">Loading...</p>

    return (
        <div id="shop">
            <Nav openCart={openCart}/>
            <div>{productElements}</div>
            <Cart itemsInCart={itemsInCart} removeFromCart={removeFromCart} closeCart={closeCart} />
        </div>
    )
}

export default Shop;
