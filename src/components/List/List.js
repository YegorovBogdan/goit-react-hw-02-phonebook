import React from 'react';
import propTypes from 'prop-types';
import s from'./List.module.css';

const List = ({ contacts, onDeleteContact }) => (
  <>
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li
        key={id}
        className={s.item}
      >
        <p className={s.text}>
          {name}: {number}
        </p>
        <button
          type="button"
          className={s.button}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
    </ul>
    </>
);

List.propTypes = {
  contacts: propTypes.array,
  onDeleteContact: propTypes.func,
}

export default List;