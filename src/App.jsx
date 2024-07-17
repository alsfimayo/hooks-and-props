import React,{Children, useState} from "react"; 
 function MyApp(){
  const[counter,setCounter]=useState(0)
  
  const addAction=()=>{
    if(counter<20){
      setCounter(counter+1);

    }
    else{
      console.log('you acheived maximum value')
    }
  
    
  }
  const removeVal=()=>{
    if(counter<=0){
      console.log('negative value not allowed');
    }
    else{

      setCounter(counter-1)
    }
  }
  return(
    <>
    <h1>Hello Vite</h1>
    <h2>vlaue:{counter}</h2>
    <button 
    onClick={addAction}
    >Add value {counter}</button>
    <br />
    <button onClick={removeVal}>Decrease value {counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}
export default MyApp