import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";

const Animals = () => {

    let [_state, objectAnimals] = useState([
        {
            idAnimal: 1,
            firstAnimalInfo: "Тигр",
            secondAnimalInfo: "2 года",
            thirdAnimalInfo: "Кошачьи",
        },
        {
            idAnimal: 2,
            firstAnimalInfo: "Лев",
            secondAnimalInfo: "5 лет",
            thirdAnimalInfo: "Кошачьи",
        },
        {
            idAnimal: 3,
            firstAnimalInfo: "Барс",
            secondAnimalInfo: "10 лет",
            thirdAnimalInfo: "Кошачьи",
        }
    ]);

    let [_stateAnimalInfo, setAnimalInfo] = useState({
        idAnimal: 4,
        firstAnimalInfo: "",
        secondAnimalInfo: "",
        thirdAnimalInfo: "",
    });


    function addAnimal() {
        const valueAnimals = new Object()

        let idAnimal = _stateAnimalInfo.idAnimal
        valueAnimals.idAnimal = idAnimal
        valueAnimals.firstAnimalInfo = _stateAnimalInfo.firstAnimalInfo
        valueAnimals.secondAnimalInfo = _stateAnimalInfo.secondAnimalInfo
        valueAnimals.thirdAnimalInfo = _stateAnimalInfo.thirdAnimalInfo

        localStorage.setItem('valueAnimals', JSON.stringify(valueAnimals));

        objectAnimals([..._state, JSON.parse(localStorage.getItem('valueAnimals'))])

        idAnimal++
        setAnimalInfo({idAnimal: idAnimal, firstAnimalInfo: "", secondAnimalInfo: "", thirdAnimalInfo: ""});
    }

    function changeFirstAnimalInfo(event) {
        setAnimalInfo({..._stateAnimalInfo, [event.target.name]: event.target.value});
    }

    function changeSecondAnimalInfo(event) {
        setAnimalInfo({..._stateAnimalInfo, [event.target.name]: event.target.value});
    }

    function changeThirdAnimalInfo(event) {
        setAnimalInfo({..._stateAnimalInfo, [event.target.name]: event.target.value});
    }

    function deleteAnimal(event) {
        const objectAnimalArr = _state
        objectAnimalArr.splice(event.target.value, 1)
        objectAnimals([..._state, {...objectAnimalArr}])
    }

    return (<div>
        <div className="row m-4">
            <div className="col-4 p-2">
                <NavBar/>
            </div>
            <div className="col-8 p-2">
                <div className="card">
                    <div className="card-body">
                        <h3>Учет животных</h3>
                        <div className="card p-2 m-2">
                            <div className="card-body">
                                <div className="input-group m-2">
                                    <span className="input-group-text">Имя</span>
                                    <input onChange={changeFirstAnimalInfo} name="firstAnimalInfo"
                                           value={_stateAnimalInfo.firstAnimalInfo}
                                           type="text" className="form-control"/>
                                </div>
                                <div className="input-group m-2">
                                    <span className="input-group-text" id="inputGroupSecond">Возраст</span>
                                    <input onChange={changeSecondAnimalInfo}
                                           type="text" className="form-control"
                                           name="secondAnimalInfo" value={_stateAnimalInfo.secondAnimalInfo}
                                           aria-describedby="inputGroupSecond"/>
                                </div>
                                <div className="input-group m-2">
                                    <span className="input-group-text" id="inputGroupThird">Вид</span>
                                    <input onChange={changeThirdAnimalInfo} name="thirdAnimalInfo"
                                           value={_stateAnimalInfo.thirdAnimalInfo}
                                           type="text" className="form-control" aria-describedby="inputGroupThird"/>
                                </div>
                                <div className="d-flex">
                                    <button onClick={addAnimal} className="btn btn-warning">Добавить</button>
                                </div>

                            </div>
                        </div>
                        <table className="table table-warning table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Имя</th>
                                <th scope="col">Возраст</th>
                                <th scope="col">Вид</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {_state.map(item =>
                                <tr key={item.idAnimal}>
                                    <td>{item.idAnimal}</td>
                                    <td>{item.firstAnimalInfo}</td>
                                    <td>{item.secondAnimalInfo}</td>
                                    <td>{item.thirdAnimalInfo}</td>
                                    <td>
                                        <button onClick={deleteAnimal} value={item.idAnimal}
                                                className="btn btn-warning">Удалить
                                        </button>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>);


}

export default Animals;