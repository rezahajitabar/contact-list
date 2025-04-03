import React from "react";
import ContactItem from "./ContactItem";
function ContactList({ contacts,deleteHandler }) {
  return (
    <div>
      {contacts.length ? (      <ul>
        {contacts.map((contact) => (
         <ContactItem key={contact.id} data={contact} deleteHandler={deleteHandler}/>
        ))}
      </ul>) : (<p>No yet contact</p>)}

    </div>
  );
}

export default ContactList;
