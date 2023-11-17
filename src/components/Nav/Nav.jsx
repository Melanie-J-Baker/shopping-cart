import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Nav.css';

function Nav({openCart, totalItems}) {
    return (
        <nav>
            <Link to="/" className="nav-link home-link">Home</Link>
            {location.pathname == '/shop' &&
            <>
                <Link to="/shop" className="nav-link">Products</Link>
                <p className="heading">ALL TECH</p>
                <div className="nav-link cart-link" onClick={openCart} data-testid="cart-btn"></div>
                <div className="total-items">{totalItems} items</div>
                <div className="added">Added to Cart!</div>
            </>
            }
            {location.pathname == '/' &&
            <>
                <p className="heading">ALL TECH</p>
                <Link to="/shop" className="nav-link">Products</Link>
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