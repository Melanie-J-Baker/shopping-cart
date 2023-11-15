import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Nav.css';

function Nav({openCart, totalItems}) {
    return (
        <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Products</Link>
            <p className="heading">ALL TECH</p>
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