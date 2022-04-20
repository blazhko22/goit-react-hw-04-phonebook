import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import s from './ContactForm.module.css';

function ContactForm({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    const id = nanoid();
    onSubmit({ id, name, number });
    setName("");
    setNumber("");
    
  };

  return (
    <form className={s.form} onSubmit={handleSubmitForm}>
      <label>
        Name
        <input className={s.input}
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number
        <input className={s.input}
          name="number"
          type="tel"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className={s.button}>Add contact</button>
    </form>
  );
  
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};