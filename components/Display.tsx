import { useState } from "react";


function Display () {
   
  const [arr , setArr] = useState([]);

  function handelDisplay () {
    const data = JSON.parse(localStorage.getItem("users") || "[]");
    setArr(data);
  }

   

  function handelDelete (indexToDelete : number) {
   const users = JSON.parse(localStorage.getItem("users") || "[]");
     users.splice(indexToDelete,1);
   localStorage.setItem("users" , JSON.stringify(users));
   setArr(users);
  }



  return (
     <>
      <button onClick={handelDisplay}>Display</button>
    
    <div>
      
       <ul>
        {arr.map( (items , index) => (
            <li key={index}> Username : {items.username} || Email : {items.email} || Address : {items.address} <button onClick={ ()=> handelDelete(index)}>Delete</button></li>
        ))}
    
      </ul>
     
    </div> 
    </>
  )
}

export default Display;
