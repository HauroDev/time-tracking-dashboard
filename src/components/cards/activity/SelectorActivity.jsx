import Exercise from '../../icons/Exercise';
import Play from '../../icons/Play';
import SelfCare from '../../icons/SelfCare';
import Social from '../../icons/Social';
import Study from '../../icons/Study';
import Work from '../../icons/Work';
import styled from './ActivityCard.module.css';
import PropTypes from 'prop-types';

const SelectorActivity = ({ title }) => {
  const Options = {
    work: {
      icon: <Work />,
      class: 'work'
    },
    play: {
      icon: <Play />,
      class: 'play'
    },
    study: {
      icon: <Study />,
      class: 'study'
    },
    exercise: {
      icon: <Exercise />,
      class: 'exercise'
    },
    social: {
      icon: <Social />,
      class: 'social'
    },
    ['self care']: {
      icon: <SelfCare />,
      class: 'self-care'
    }
  };

  return (
    <div
      className={`${styled['decorator']} ${
        styled[Options[title?.toLowerCase()]?.class]
      }`}>
      {Options[title?.toLowerCase()]?.icon}
    </div>
  );
};

SelectorActivity.propTypes = {
  title: PropTypes.string.isRequired
};

export default SelectorActivity;
