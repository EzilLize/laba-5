import React, {useState} from "react";
import './App.css';
function App(){
    const [tasks,setTasks]=useState(['task1','task2','task3'])
    const [value,setValue]=useState('')
    const [edit,setEdit]=useState(null)

    const result = tasks.map((task, index)=>{
        return <div><input type="checkbox" /><p key={index} onClick={()=> setEdit(index)}>{task}</p><button onClick={()=>remItem(index)}>Удалить</button></div>;
    });

    function remItem(index){
        setTasks([...tasks.slice(0,index),...tasks.slice(index+1)])
    }



    function changeItem(event){
        setValue(event.target.value);
        if (edit){
            setTasks([...tasks.slice(0,edit),event.target.value,...tasks.slice(edit+1)]);
        }
    }
    function changeValue(event){
        setValue(event.target.value)
    }
    function addItem(event){
        setTasks([...tasks,value])
    }

    return<div>
        <input value={value} onChange={changeValue} onChange={changeItem}  />
        <button onClick={addItem}>Добавить</button>
        {result}
    </div>

}
export default App;
