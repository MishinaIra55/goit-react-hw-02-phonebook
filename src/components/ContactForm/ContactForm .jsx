import React, { Component } from 'react';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleInputChange = event => {
    const { name, number, value } = event.currentTarget;

    this.setState({
      [name]: value,
      [number]: value,
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addContact(this.state);

    this.reset();
  };

  reset = () => {
    this.setState( {
      name: '',
      number: '',
    });
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit} className={styles.form}>

        <label>
          Name
          <input

            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>

        <label className={styles.label}
        >
          Number
          <input

            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </label>

        <button type='submit' >Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
