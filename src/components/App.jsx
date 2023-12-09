import React, { useState } from 'react';
import Todo from "./Todo";
import Inputarea from "./Inputarea"

const App = () => {
  
  const [item,setitem]=useState([]);
  
  function additem(input){
setitem((prev)=>{
return[...prev,input]
});



  }
  function deleteItem(id){
  setitem((prev)=>{
    return prev.filter((item,index)=>{
return index!==id;
    })
  });
}
  return (
    <div className='container'>
        <div className='heading'>
            <h1>To-Do List</h1>
        </div>
       <Inputarea   add={additem}/>
        <ul>
             
             { item.map((items,index)=>(
<Todo key={index} id={index} text={items}onchecked={deleteItem} />
              ))
}

        </ul>
      
    </div>
  );
}

export default App
