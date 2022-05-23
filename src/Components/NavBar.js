import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="list-group">
                <Link className="list-group-item bg-warning list-group-item-action" to='/main-admin-panel'>Администрирование</Link>
                <Link className="list-group-item list-group-item-action" to='/animals'>Животные</Link>
                <Link className="list-group-item list-group-item-action" to='/products'>Продукты</Link>
                <Link className="list-group-item list-group-item-action" to='/cells'>Клетки</Link>
            </div>
        </div>
    )
}

export default NavBar