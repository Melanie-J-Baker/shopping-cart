import './Nav.css';

function Nav() {
    return (
        <nav>
            <ul className="nav-link-ul">
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="shop" className="nav-link">Shop</a></li>
                <li><a href="cart" className="nav-link">Cart</a></li>
            </ul>
        </nav>
    )
}

export default Nav;