import React, { useState } from "react";
import ContactList from "./ContactList";
import inputs from "./inputs";
import { v4 } from 'uuid';
function Contact() {


  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({});

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const clickHandler = () => {
    if (!contact.name || !contact.family || !contact.email || !contact.phone) {
      setAlert("please inter value");
      setTimeout(() => {
        setAlert("");
      }, 3000);
    }
    const newContact={...contact,id:v4()}
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      id: "",
      name: "",
      family: "",
      email: "",
      phone: "",
    });
    console.log(newContact);
    
  };

  const deleteHandler=(id)=>{
    const newContact=contacts.filter((contact)=> contact.id !== id);
    setContacts(newContact)
  }

  return (
    <div>
      <div>
        {inputs.map((input,index) => (
          <input
          key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button onClick={clickHandler}>Add Contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactList contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default Contact;
