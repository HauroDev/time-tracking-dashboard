import styled from './ActivityCard.module.css';
import PropTypes from 'prop-types';
import Ellipsis from '../../icons/Ellipsis';
import SelectorActivity from './SelectorActivity';
import ActivityInfo from './ActivityInfo';

const ActivityCard = ({ title, timeframes }) => {
  return (
    <article className={styled.content}>
      <SelectorActivity title={title} />
      <div className={styled.activity}>
        <div className={styled.header}>
          <h3>{title}</h3>
          <button>
            <Ellipsis />
          </button>
        </div>
        <ActivityInfo timeframes={timeframes} />
      </div>
    </article>
  );
};

ActivityCard.propTypes = {
  title: PropTypes.string.isRequired,
  timeframes: PropTypes.object.isRequired
};

export default ActivityCard;
