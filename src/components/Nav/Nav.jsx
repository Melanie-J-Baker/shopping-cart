import PropTypes from 'prop-types';
import './Nav.css';

function Nav({openCart, totalItems}) {
    return (
        <nav>
            <a href="/" className="nav-link">Home</a>
            <a href="shop" className="nav-link">Shop</a>
            <p className="heading">All Tech</p>
            {location.pathname == '/shop' &&
            <>
                <div className="nav-link cart-link" onClick={openCart}></div>
                <div className="total-items">{totalItems} items</div>
            </>
            }
        </nav>
    )
}

Nav.propTypes = {
    openCart: PropTypes.func,
    totalItems: PropTypes.number
}
export default Nav;