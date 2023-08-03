 
   import {useState} from "react";
   
   import "./Apps.css";
const Apps = () => {

    const[count, setCount] = useState(0);
    function decreaseHandler() {
        setCount(count-1);
    }

    function increaseHandler() {
        setCount(count+1);
    }
    function resetHandler() {
        setCount(0);
    }
    return(

       <div className='body '> 
         <div className="counter">Increment & Dcrement Counter</div>
        <div className="btn">
         <button onClick={decreaseHandler} className="buttons" >
            -
         </button>
         <div className="count" >
         {count}
         </div>
         <button onClick={increaseHandler} className="buttons">
            +
         </button>
         
        </div>
         <button onClick={resetHandler}className="reset" >
            Reset
         </button>
    </div>
    );
        
    }

    


export default Apps;