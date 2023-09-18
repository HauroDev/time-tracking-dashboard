import styled from './ActivityCard.module.css';
import PropTypes from 'prop-types';

const TimeFrameLabels = ({ current, previous, label }) => {
  return (
    <>
      <p className={styled['current']}>
        {current}
        {current > 1 ? 'hrs' : 'hr'}
      </p>
      <p className={styled['previous']}>
        {label} - {previous}
        {previous > 1 ? 'hrs' : 'hr'}
      </p>
    </>
  );
};

TimeFrameLabels.propTypes = {
  current: PropTypes.number.isRequired,
  previous: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
};

export default TimeFrameLabels;
