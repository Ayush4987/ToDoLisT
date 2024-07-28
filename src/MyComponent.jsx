
import React, { useState } from "react";

function MyComponent(){
    const [cars,setCars] = useState([]);
    const [carYear, setCarYear]  = useState(new Date().getFullYear());
    const[carMake,setCarMake] = useState("");
    const[carModel,setCarModel] = useState("");

    const handleAddCar = () =>{
        const newCar = {year:carYear, make:carMake, model:carModel};
        setCars(c => [...c, newCar]);

        setCarMake("");
        setCarModel("");
        setCarYear(new Date().getFullYear());
    }

    const handleRemoveCar = (index) =>{
        setCars(c => c.filter((_,i)=>i!=index));
    }

    const handleYearChange = (e) => {
        setCarYear(e.target.value)
    }

    const handleMakeChange = (e) => {
        setCarMake(e.target.value);
    }

    const handleModelChange = (e) => {
        setCarModel(e.target.value);
    }

    return (
        <>
            <div>
                <h2>List Of Car Objects</h2>
                <ul>
                    {cars.map((car,index) => <li key={index} onClick={ () => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
                </ul>
                <input type="number" value = {carYear} onChange={handleYearChange}/> <br />
                <input type="text" value = {carMake} onChange={handleMakeChange} placeholder="Enter Car Make"/> <br />
                <input type="text" value = {carModel} onChange={handleModelChange} placeholder="Enter Car Model"/> <br />
                <button onClick={handleAddCar}>Add car</button>
                {/* <button onClick={handleRemoveCar}>Remove car</button> */}
            </div>
        </>
    );
}
export default MyComponent