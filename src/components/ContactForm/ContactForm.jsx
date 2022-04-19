import React from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.props.onAddContact(contact);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <form className={s.form} onSubmit={this.handleSubmitForm}>
          <label>
            Name
            <input className={s.input}
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Number
            <input className={s.input}
              name="number"
              type="tel"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit" className={s.button}>Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
// import React, { Component } from 'react';
// import s from './ContactForm.module.css';
// import { nanoid } from 'nanoid';

// export default class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   onChengeValue = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };
//   handleSubmit = evt => {
//     evt.preventDefault();
//     const id = nanoid();
//     this.props.onSubmit({ id, ...this.state });
//     this.resetForm();
//   };
//   resetForm() {
//     this.setState({ name: '', number: '' });
//   }
//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={s.form} onSubmit={this.handleSubmit}>
//         <label className={s.title}>
//           name
//           <input
//             className={s.input}
//             type="text"
//             name="name"
//             onChange={this.onChengeValue}
//             value={name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <label className={s.title}>
//           number
//           <input
//             className={s.input}
//             type="tel"
//             name="number"
//             onChange={this.onChengeValue}
//             value={number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <button className={s.button} type="submit">
//           add to contact
//         </button>
//       </form>
//     );
//   }
// }