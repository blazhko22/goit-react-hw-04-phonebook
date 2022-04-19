import React, { Component } from 'react';
import  ContactForm from '../ContactForm';
import  ContactsList from '../ContactList';
import Filter from '../Filter';
import s from './Render.module.css';


class Render extends Component {
  state = {
    contacts: [],
    filter: '',
  };

componentDidMount() {

    const contacts = localStorage.getItem('contacts');
    const parsedId = JSON.parse(contacts);

    if (parsedId) {
      this.setState({ contacts: parsedId });
    }
  }

   componentDidUpdate(prevProps, prevState) {

    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  addContact = newContact => {
    this.state.contacts.find(contact => contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase())
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });
  };
  onChangeFilter = value => {
    this.setState({
      filter:value
    });
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const contacts = this.state.contacts;
    const filter = this.state.filter;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );
    return (
      <div className={s.render}>
        <div>
          <h1 className={s.titleFhonebook}>Phonebook</h1>
          <ContactForm onAddContact={this.addContact}></ContactForm>
        </div>
        <div>
          <h2 className={s.titleContacts}>Contacts</h2>
          {contacts.length > 1 ? (
            <Filter value={filter}  onChangeFilter={this.onChangeFilter} />
          ) : null}
          <ContactsList
            contacts={filteredContacts}
            onRemoveContact={this.removeContact}>
          </ContactsList>
        </div>
        </div>
    );
  }
}

export default Render;
// import React, { Component } from 'react';
// import  ContactForm from '../ContactForm';
// import  ContactsList from '../ContactList';
// import Filter from '../Filter';
// import s from './Render.module.css';

// export default class Render extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
//   componentDidMount() {
//     const value = JSON.parse(localStorage.getItem('contacts'));
//     if (value === null) {
//       return;
//     }
//     this.setState({ contacts: value.contacts });
//   }
//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts !== contacts) {
//       localStorage.setItem(
//         'contacts',
//         JSON.stringify({
//           contacts: contacts,
//         }),
//       );
//     }
//   }
//   deleteContact = contactId => {
//     this.setState(({ contacts }) => ({
//       contacts: contacts.filter(contact => contact.id !== contactId),
//     }));
//   };
//   addContact = newContact => {
//     const findinList = this.state.contacts.find(
//       ({ name }) =>
//         newContact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
//     );
//     if (findinList) {
//       alert(`${findinList.name} is alredy in contact`);
//       return;
//     }
//     this.setState(({ contacts }) => ({
//       contacts: [newContact, ...contacts],
//     }));
//   };
//   onChengeValue = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };
//   filtredLIst = () => {
//     const { contacts, filter } = this.state;
//     const normalizeFilter = filter.toLocaleLowerCase();
//     return contacts.filter(({ name }) => {
//       return name.toLocaleLowerCase().includes(normalizeFilter);
//     });
//   };
//   render() {
//     const filtredLIst = this.filtredLIst();
//     const { filter } = this.state;
//     return (
//       <div className={s.wraper}>
//         <h1 className={s.title}>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />
//         <h2 className={s.subtitle}>Contacts</h2>
//         <Filter value={filter} onChengeValue={this.onChengeValue} />
//         <ContactsList
//           contacts={filtredLIst}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }