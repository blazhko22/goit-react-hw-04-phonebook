import React from 'react';
import ContactsItem from '../ContactsItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactsList({ contacts, onRemoveContact }) {
  console.log(contacts)
  return (
    <ul className={s.list}>
      {contacts.map((item, index) => {
        return <ContactsItem
         id={item.id}
          key={item.id}
          name={item.name}
          index={index}
          number={item.number}
          onRemoveContact={onRemoveContact}
        ></ContactsItem>
      })}
    </ul>
  );
}

export default ContactsList;

ContactsList.propTypes = {
  key: PropTypes.string,
  contact: PropTypes.string,
  number: PropTypes.string,
  onRemoveContact: PropTypes.func,
};


// import React from 'react';
// import PropTypes from 'prop-types';
// import s from './ContactList.module.css';
// import ContactListItem from '../ContactsItem';

// export default function ContactsList({ contacts, deleteContact }) {
//   console.log(contacts.length);
//   return (
//     <ul className={s.list}>
//       {contacts.length > 0 ? (
//         contacts.map(({ id, name, number }, index) => (
//           <li key={id} className={s.list__item}>
//             <ContactListItem
//               id={id}
//               index={index}
//               name={name}
//               number={number}
//               deleteContact={deleteContact}
//             />
//           </li>
//         ))
//       ) : (
//         <li className={s.emptyListContainer}>
//           <p className={s.emptyList}> no contacts in list</p>
//         </li>
//       )}
//     </ul>
//   );
// }
// ContactsList.propTypes = {
//   id: PropTypes.string,
//   name: PropTypes.string,
//   number: PropTypes.string,
//   deleteContact: PropTypes.func,
// };