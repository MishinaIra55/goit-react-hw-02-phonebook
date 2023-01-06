import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ( { contacts, onDelete }) => {

  return (
    <ul>
      {contacts.map(({ name, id, number} ) => (
      <li  key={id}>
        <p>{name}</p>
        {/*<p>{id}</p>*/}
        <p>{number}</p>
        <button type='button' onClick={()=>{onDelete(id)}}>Delete</button>
      </li>
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.proTypes = {
  onDelete:PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      number:PropTypes.number.isRequired,
    })
  )
}


