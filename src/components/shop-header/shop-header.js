import React from "react-dom";
import "./shop-header.css"
import {Link} from "react-router-dom";

const ShopHeader = ({numItems, total}) => {
    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark">ReStore</div>
            </Link>
            <Link to="/cart-item">
                <i className="cart-icon fa fa-shopping-cart">
                    {numItems} items (${total})
                </i>
            </Link>

        </header>
    )
};

export default ShopHeader;