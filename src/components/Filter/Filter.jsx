import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, onChangeFilter }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        name="filter"
        type="text"
        value={value}
        onChange={(e)=>onChangeFilter(e.target.value)}
      />
    </label>
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};