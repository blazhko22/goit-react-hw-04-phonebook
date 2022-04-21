import React, { useState, useEffect } from "react";
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";
import s from "./Render.module.css";

function Render() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) ?? []
  );
  const [filter, setFilter] = useState("");
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };
  const addContact = (newContact) => {
    const findinList = contacts.find(
      ({ name }) =>
        newContact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (findinList) {
      alert(`${findinList.name} is alredy in contact`);
      return;
    }
    setContacts((prev) => [...prev, newContact]);
  };
  const onChengeValue = (e) => {
    setFilter(e.currentTarget.value);
  };
  const filtredLIst = () => {
    if (filter === "") {
      return contacts;
    }
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  return (
    <div className={s.render}>
      <div>
        <h1 className={s.titleFhonebook}>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      </div>
      <div>
      <h2 className={s.titleContacts}>Contacts</h2>
        <Filter value={filter} onChengeValue={onChengeValue} />
        <ContactList contacts={filtredLIst()} deleteContact={deleteContact} />
      </div>
    </div>
  );
}

export default Render;