import { useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import Product from '../Product/Product'
import Footer from '../Footer/Footer'
import Cart from '../Cart/Cart'
import './Shop.css'

const Shop = () => {
    const [itemsInCart, setItemsInCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productElements, setProductElements] = useState();
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics?limit=10', { mode: 'cors' })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json()
            })
            .then((response) => setProducts(response))
            .catch((error) => setError(error))
            .finally(() => {
                setLoading(false);
            })
    }, []);

    useEffect(() => {
           

        if (loading == false) {
            let newProducts = products.map(item =>
                <Product item={item} key={item.id} className='product' />
            )   
            setProductElements(newProducts);
        }
    }, [loading, products, itemsInCart, totalItems, totalPrice])


    const openCart = () => {
        document.getElementById('cart').style.width = "320px";
    }

    const closeCart = () => {
        document.getElementById('cart').style.width = "0";
    }

    if (error) return <p className="error">A network error was encountered</p>;
    if (loading) return <p className="loading">Loading...</p>

    return (
        <div id="shop">
            <Nav openCart={openCart} totalItems={totalItems}/>
            <div className="products">{productElements}</div>
            <Footer />
            <Cart itemsInCart={itemsInCart} closeCart={closeCart} totalItems={totalItems} totalPrice={totalPrice} setItemsInCart={setItemsInCart} setTotalItems={setTotalItems} setTotalPrice={setTotalPrice}/>
        </div>
    )
}

export default Shop;
