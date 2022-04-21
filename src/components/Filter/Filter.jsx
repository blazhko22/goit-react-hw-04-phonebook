import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, onChengeValue }) {
  return (
    <label className={s.label}>
      find contact by name
      <input
        onChange={onChengeValue}
        type="text"
        name="filter"
        value={value}
      />
    </label>
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChengeValue: PropTypes.func,
};