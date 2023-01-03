import React from 'react';
import { Component } from 'react';

import { nanoid } from 'nanoid';


import ContactForm from './ContactForm/ContactForm ';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


class App extends Component {
  state = {
    filter: '',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

  };

//новый контакт для добавления
  addForm = data => {
    const newContact = {
      id: nanoid(),

      ...data,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  getFilterContact = () => {
    const normalizeFilter = this.state.filter.toLowerCase();
    // console.log('normalizeFilter:', normalizeFilter);
    // console.log('contacts_filtered', this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter)));
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filterContact = filter ? this.getFilterContact() : contacts;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addForm} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={filterContact} />
      </>

    );
  };

}

export default App;
