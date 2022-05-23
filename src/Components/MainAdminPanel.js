import React, {Component} from 'react';
import NavBar from "./NavBar";

export class MainAdminPanel extends Component {
    render() {
        return (
            <div>
                <div className="row m-4">
                    <div className="col-4 p-2">
                        <NavBar/>
                    </div>
                    <div className="col-8 p-2">
                        <div className="card">
                            <div className="card-body">
                                <h3>Добро пожаловать!</h3>
                                <div className="row p-2">
                                    <div className="col-8">
                                        Панель администратора представляет собой раздел сайта, который предоставляет
                                        полный
                                        набор возможностей по управлению и настройке сайта.
                                    </div>
                                    <div className="col-4">
                                        <img className="image" src={require('../Images/Panda.png')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}