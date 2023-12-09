import react,{useState} from"react"
function Inputarea(props){
    const [input,setinput]=useState("");
    function handlechange(event){
    const newvalue=event.target.value;
    setinput(newvalue);
  }
return(
    <div className='form'>
          <input onChange={handlechange}type='text' value={input} />
            <button onClick={()=>{props.add(input);
            setinput("");
            }}><span>Add</span></button>
        </div> 
)
}
export default Inputarea;