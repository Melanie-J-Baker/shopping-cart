import PropTypes from 'prop-types';

const Product = ( title, image, price, id, description, itemsInCart, setItemsInCart, totalPrice, setTotalPrice, totalItems, setTotalItems, products) => {
    function addToCart (e) {
        let addedPopup = document.querySelector('.added');
        let inCart = itemsInCart.find(function (x) {
            if (x.id == e.target.value) return true;
        })
        let quan = document.getElementById(e.target.value);
        if (quan.value >= 1) {
            if (!inCart) {
                let result = products.find(function (x) {
                    if (x.id == e.target.value) {
                        let quantity = document.getElementById(x.id);
                        x.quantity = Number(quantity.value);
                        setTotalPrice(totalPrice + (x.price * x.quantity))
                        setTotalItems(totalItems + x.quantity)
                        return x
                    }
                })
                setItemsInCart([...itemsInCart, result]);
            } else {
                itemsInCart.find(function (x) {
                    if (x.id == e.target.value) {
                        let quantity = document.getElementById(x.id);
                        x.quantity = Number(quantity.value);
                        setTotalPrice(totalPrice + x.price)
                    }
                })
                setItemsInCart([...itemsInCart])
            }
            itemsInCart.find(function (x) {
                if (x.id == e.target.value) {
                    setTotalItems(totalItems + x.quantity)
                }
            })
            addedPopup.style.display = 'block';
            setTimeout(() => {
                addedPopup.style.display = 'none';
            }, 3000)
        }
    }
    
    return (
        <>
            <div className="product-title">{title}</div>
            <div><img src={image} className="product-image" /></div>
            <div className='price-quantity-wrapper'>
                <div className="product-price">£{price}</div>
                <div className="quantity-wrapper">
                    <label htmlFor={id}>Quantity:</label>
                    <input className="quantity" id={id} type="number" defaultValue="1"/>
                </div>
            </div>
            <div className="product-btns">
                <button type="button" className="show-desc">Description</button>
                <div className="product-desc">{description}</div>
                <button type="button" className="buy-btn" value={id} onClick={addToCart}>Add to Cart</button>
            </div>
        </> 

    )
}

Product.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
    description: PropTypes.string,
    addToCart: PropTypes.func,
    products: PropTypes.array
}

export default Product;