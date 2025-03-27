import React, { useState } from 'react'

function Contact() {
    const [contacts,setContacts]=useState([]);
    const [contact,setContact]=useState({
     name:"",
     family:"",
     email:"",
     phone:""
    })

    const changeHandler=(event)=>{
         const name=event.target.name;
         const value=event.target.value;

         setContact((contact)=> ({...contact,[name]:value}))
    }

    const clickHandler=()=>{
        console.log({contact});
    }

  return (
    <div>
      <input type="text" placeholder='name'  value={contact.name} name='name' onChange={changeHandler}/>
      <input type="text" placeholder='family' value={contact.family} name='family' onChange={changeHandler}/>
      <input type="text" placeholder='email' value={contact.email} name='email' onChange={changeHandler}/>
      <input type="text" placeholder='phone' value={contact.phone} name='phone' onChange={changeHandler}/>
      <button onClick={clickHandler}>Add Contact</button>
    </div>
  )
}

export default Contact
