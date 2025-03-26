import React, { useState } from 'react'

function Contact() {
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

  return (
    <div>
      <input type="text" placeholder='name'  value={contact.name} name='name' onChange={changeHandler}/>
      <input type="text" placeholder='family' value={contact.family} name='family' onChange={changeHandler}/>
      <input type="text" placeholder='email' value={contact.email} name='email' onChange={changeHandler}/>
      <input type="text" placeholder='phone' value={contact.phone} name='phone' onChange={changeHandler}/>
    </div>
  )
}

export default Contact
