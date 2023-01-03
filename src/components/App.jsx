import React from 'react';
import { Component } from 'react';

import ContactForm from './ContactForm/ContactForm ';


 class App extends Component {
   state = {
     contacts: [],

   }

formSubmit = data => {
     console.log(data);
};


  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSub={this.formSubmit}/>
      </>

    );
  };

}

export default App;
