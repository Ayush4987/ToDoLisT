
import React, { useState } from "react";
function ToDoList(){
    const [tasks,setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) =>{
        setNewTask(e.target.value)
    }

    const addTask = () => {
        if(newTask.trim()!==""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }

    }

    const deleteTask = (index) =>{
        const updatedTasks = tasks.filter((_,i)=>i!==index)
        setTasks(updatedTasks);
    }

    const moveTaskUp = (index) => {
        if(index>0){
            const updateTasks = [...tasks];
            [updateTasks[index],updateTasks[index-1]] = [updateTasks[index-1],updateTasks[index]]
            setTasks(updateTasks);
        }
    }

    const moveTaskDown = (index) =>{
        let p = tasks.length;
        if(index>=0 && index<p-1){
            const updateTasks = [...tasks];
            [updateTasks[index],updateTasks[index+1]] = [updateTasks[index+1],updateTasks[index]]
            setTasks(updateTasks);
        }
    }

    return (
        <>
            <div className="to-do-list">
                <h1>To - Do - List</h1>
                <div>
                    <input type="text" placeholder="Enter a Task..." value={newTask} onChange={handleInputChange}/>
                    <button className="add-btn" onClick={addTask}>Add</button>
                </div>
                <ol>
                    {tasks.map((task,index)=>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                            <button className="move-btn" onClick={() => moveTaskUp(index)}>👆</button>
                            <button className="move-btn" onClick={() => moveTaskDown(index)}>👇</button>
                        </li>
                    )}
                </ol>

            </div>
        </>
    );
}

export default ToDoList