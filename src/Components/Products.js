import React, {Component} from 'react';
import NavBar from "./NavBar";

const Products = () => {
    return (
        <div>
            <div className="row m-4">
                <div className="col-4 p-2">
                    <NavBar/>
                </div>
                <div className="col-8 p-2">
                    <div className="card">
                        <div className="card-body">
                            <h3>Кормление животных в зоопарке</h3>
                            <div className="row p-2">
                                <div className="col-8">
                                    Кормление животных в зоопарке – это целая наука. Животные здесь самые разные, у каждого свой вкус. Одному требуются сырые яйца, другому – проростки злаков, кому-то нужна рыба, а кому-то подавай свежие фрукты. Но главное, чтобы животные в зоопарке были здоровы и нормально развивались, всем им следует обеспечить полноценное питание. На всех питомцев зоопарка ежедневно приходится готовить более сотни разных «блюд». Справиться с этой нелегкой задачей удается благодаря особому отделу – кормокухне.
                                </div>
                                <div className="col-4">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;