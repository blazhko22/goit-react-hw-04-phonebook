import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';

function ContactsItem({
   name, number, id,
  onRemoveContact,
}) {
  return (
    <li className={s.item}>
      <span>
        {name}: {number}
      </span>
      <button
        className={s.button}
        type="button"
        data-id={id}
        onClick={() => {
          onRemoveContact(id);
        }}
      >
        delete
      </button>
    </li>
  );
}

export default ContactsItem;

ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onRemoveContact: PropTypes.func,
};


// import React from 'react';
// import PropTypes from 'prop-types';
// import s from './ContactsItem.module.css';

// export default function ContactsItem({
//   id,
//   name,
//   number,
//   index,
//   deleteContact,
// }) {
//   return (
//     <div className={s.item__container}>
//       <span>{index + 1}</span>
//       <span>{name}</span>
//       <span>{number}</span>
//       <button className={s.button} onClick={() => deleteContact(id)}>
//         delete
//       </button>
//     </div>
//   );
// }
// ContactsItem.propTypes = {
//   id: PropTypes.string,
//   name: PropTypes.string,
//   number: PropTypes.string,
//   index: PropTypes.number,
//   deleteContact: PropTypes.func,
// };