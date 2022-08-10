import React, { useState } from "react";
const Home = () => {
    const [inputValue, setInputValue]=useState("");
    const [tasks, setTasks]=useState([]);
    const handlerInput = (e)=> {
        setInputValue(e.target.value)
    }
    const handleButton = () => {
        // tasks.push(inputValue)
        setTasks([...tasks, inputValue]);
        setInputValue("");
    }
    const handlePress = (e) => {
        // if (e.keyCode == 13){
        if (e.key == "Enter"){
            setTasks([...tasks, inputValue]);
            setInputValue("");
        }
    }
    const resetButton= (index) => {
        let temp=tasks;
        tasks.splice(index, 1);
        setTasks([...temp]);
    }
    const html =tasks.map((e, i)=>{
        return <li key={i}>{e}
        <button className="btn btn-success" onClick={()=>resetButton(i)}value={tasks}>X</button>
        </li>
    })
    return (
        <div className="text-center contenedor" >
            <h1>ToDos</h1>
            <input className="todo-input form-control" type="text" onChange={handlerInput} onKeyDown={(e)=>handlePress(e)} value={inputValue}/>
            {/* <button className="btn button-text" onClick={handleButton}></button> */}
            <ul>
                {html}
            </ul>
        </div>
    );
};
export default Home;



