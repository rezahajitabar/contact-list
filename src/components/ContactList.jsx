import React from "react";
import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";
function ContactList({ contacts, deleteHandler }) {
  return (
    <div className={styles.container}>
      <h2>ContactsList</h2>
      {contacts.length ? (
        
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No yet contact</p>
      )}
    </div>
  );
}

export default ContactList;
