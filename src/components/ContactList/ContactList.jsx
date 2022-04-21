import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import ContactListItem from "../ContactsItem";

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }, index) => (
          <li key={id} className={s.list_item}>
            <ContactListItem
              id={id}
              index={index}
              name={name}
              number={number}
              deleteContact={deleteContact}
            />
          </li>
        ))
      ) : (
        <li>
          <p> no contacts in list</p>
        </li>
      )}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};