import React from 'react';



const ContactList = ( { contacts, onDelete }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(({ name, id, number} ) => (
      <li  key={id}>
        <p>{name}</p>
        <p>{id}</p>
        <p>{number}</p>
        <button type='button' onClick={()=>{onDelete(id)}}>Delete</button>
      </li>
      ))}
    </ul>
  );
};

export default ContactList;
