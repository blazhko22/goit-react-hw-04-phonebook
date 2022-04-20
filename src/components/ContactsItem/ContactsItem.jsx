import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';

function ContactsItem({
   name, number, id, index,
  onRemoveContact,
}) {
  return (
    <div className={s.item}>
      <span>{index + 1}</span>
      <span>{name}</span>
      <span>{number}</span>
      <button className={s.button} onClick={() => onRemoveContact(id)}>
        delete
      </button>
    </div>
  );
}

export default ContactsItem;

ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  index: PropTypes.number,
  onRemoveContact: PropTypes.func,
};