import reactss, { useState } from "react";
function Todo(props){
    
    return(
        <div onClick={()=>{props.onchecked(props.id)}}> 
        
<li>{props.text}</li>
<button  className="btn"onClick={() => { props.onDelete(props.id) }}>Delete</button>
</div>
    )
}
export default Todo;
