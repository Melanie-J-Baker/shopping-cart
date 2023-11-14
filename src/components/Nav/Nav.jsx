import PropTypes from 'prop-types';
import './Nav.css';

function Nav({openCart}) {
    return (
        <nav>
            <a href="/" className="nav-link">Home</a>
            <a href="shop" className="nav-link">Shop</a>
            <p className="heading">All Tech</p>
            <div className="nav-link"></div>
            <div className="nav-link cart-link" onClick={openCart}>Cart</div>
        </nav>
    )
}

Nav.propTypes = {
    openCart: PropTypes.func
}
export default Nav;