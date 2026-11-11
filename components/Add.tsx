import {useState , useEffect} from "react";

function Add () {
  
const [username , setUsername] = useState<string>("");
const [email , setEmail] = useState<string>("");
const [address , setAddress] = useState<string>("");
const [users , setUsers] = useState([]);



useEffect( () => {
    // to save the array when we do refresh
  const saved = JSON.parse(localStorage.getItem("users") || "[]");
  setUsers(saved);
  
}, []) 

function handelAdd() {
    if(!username.trim() || !email.trim() || !address.trim()) {
        alert("Please Fill in all fields ! ");
        return ;
    } 

    const newUser = {
        username: username ,
        email : email,
        address : address
    };
    const updateUsers = [...users , newUser];

  //setUsers(users.push(updateUsers));

  setUsers(updateUsers);
  localStorage.setItem("users" , JSON.stringify(updateUsers));
}

return (
  <>
  <div>
    
  <label htmlFor="">Username</label>
   <input type="text"  onChange={ (e) => {
          setUsername(e.target.value)
        }}/>
         <label htmlFor="">Email</label>
   <input type="text" onChange={ (e) => {
          setEmail(e.target.value)
        }}/>
         <label htmlFor="">Address</label>
   <input type="text"  onChange={ (e) => {
          setAddress(e.target.value)
        }}/>

</div>
<button onClick={handelAdd}>Add</button>

</>
)
}


export default Add;