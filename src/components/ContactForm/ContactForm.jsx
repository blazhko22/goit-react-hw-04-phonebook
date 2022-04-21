import PropTypes from "prop-types";
import React, { useState } from "react";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";

function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onChengeValue = (e) => {
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const id = nanoid();
    onSubmit({ id, name, number });
    setName("");
    setNumber("");
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        name
        <input
          className={s.input}
          type="text"
          name="name"
          onChange={onChengeValue}
          value={name}
          required
        />
      </label>
      <label className={s.title}>
        number
        <input
          className={s.input}
          type="tel"
          name="number"
          onChange={onChengeValue}
          value={number}
          required
        />
      </label>
      <button className={s.button} type="submit">
        add to contact
      </button>
    </form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};