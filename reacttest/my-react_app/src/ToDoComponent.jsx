import { useState } from "react"

function ToDoComponent(){
    const [todo,setTodo]=useState([])
    const [newTask ,setNewTask]=useState("")
    

    function handleInputChange(event){
       setNewTask(event.target.value)
    
    }

    function handleAddTask(){
        if(newTask.trim() !=="")
           setTodo(t=>[...t,newTask])
           setNewTask("");
    }
    function handleRemoveTask(index){
        
        const updatedToDo = todo.filter((_,i)=> i!==index)
        setTodo(updatedToDo)
        
    }

    function moveTaskUp(index){
       if(index >  0){
        const updatedToDo=[...todo];
       [updatedToDo[index],updatedToDo[index - 1]]=
       [updatedToDo[index - 1],updatedToDo[index]] 
       setTodo(updatedToDo);
       }
    }

    function moveTaskDown(index){
        if(index < todo.length-1){
            const updatedToDo=[...todo];
           [updatedToDo[index],updatedToDo[index + 1]]=
           [updatedToDo[index + 1],updatedToDo[index]] 
           setTodo(updatedToDo);
           }
    }

    return (
        <div className="to-do-list">
            <h1>To Do List ✅</h1>

            <div>
                <input type="text" 
                placeholder="Enter a Task ..."
                value={newTask}
                onChange={handleInputChange}/>
            </div>
            <button className="add-button" onClick={handleAddTask}>
                Add !
            </button>

            <ol>
                {todo.map((task,index)=>
                <li key={index}> 
                    <span className="text">{task}</span>
                    <button className="delete-button" 
                    onClick={()=>handleRemoveTask(index)}>
                        Delete 
                    </button>
                    <button className="move-button" 
                    onClick={()=>moveTaskUp(index)}>
                        👆
                    </button>
                    <button className="move-button" 
                    onClick={()=>moveTaskDown(index)}>
                        👇
                    </button>
                 </li>
                 )}
            </ol>
          
        </div>
    )
}
export default ToDoComponent