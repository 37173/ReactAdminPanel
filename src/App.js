import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from "./Components/Home";
import Animals from "./Components/Animals";
import Products from "./Components/Products";
import Cells from "./Components/Cells";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {AdminPanel} from "./Components/AdminPanel";
import {MainAdminPanel} from "./Components/MainAdminPanel";

export default class App extends Component {

    render () {
        return (
            <div>
                <Header/>
                <Route exact path='/' component={Home} />
                <AdminPanel>
                    <Route exact path='/main-admin-panel' component={MainAdminPanel} />
                    <Route exact path='/animals' component={Animals} />
                    <Route path='/products' component={Products} />
                    <Route path='/cells' component={Cells} />
                </AdminPanel>
                <Footer/>
            </div>
        );
    }
}
