import ContactsItem from '../ContactsItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactsList({ contacts, onRemoveContact }) {
  console.log(contacts)
  return (
    <ul className={s.list}>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }, index) => (
          <li key={id} className={s.list_item}>
            <ContactsItem
              id={id}
              index={index}
              name={name}
              number={number}
              onRemoveContact={onRemoveContact}
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

export default ContactsList;

ContactsList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  index: PropTypes.number,
  onRemoveContact: PropTypes.func,
};
