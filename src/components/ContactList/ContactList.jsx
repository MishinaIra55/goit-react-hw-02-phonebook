import React, {Component} from 'react';



const ContactList = ( { contacts }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(({ name, id, number} ) => (
      <li  key={id}>
        <p>{name}</p>
        <p>{id}</p>
        <p>{number}</p>
      </li>
      ))}
    </ul>
  );
};

export default ContactList;
