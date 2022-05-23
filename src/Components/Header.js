import React from "react"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
            <div className="container-fluid">
                <img className="m-2" width="100" src={require("./../Images/logo.png")}/>
                <Link className="navbar-brand m-2" to='/'>ZooWildAnimals</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link m-2" to='/'>Главная страница</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link m-2" to='/main-admin-panel'>Администрирование</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header