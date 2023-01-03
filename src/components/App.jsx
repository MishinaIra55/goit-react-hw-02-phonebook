import React from 'react';
import { Component } from 'react';


 class App extends Component {
   state = {
     contacts: [],
     name: ''
   }

   handleInputChange = event => {
     // console.log(event.currentTarget.value);
     this.setState({
       [event.currentTarget.name]: event.currentTarget.value,
     })
   };

   handleSubmit = event => {
     event.preventDefault();
   };
  render() {
    return (

        <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <button type='submit' >Add contact</button>
        </form>

    );
  };

}

export default App;
