import { useTimeFrame } from '../../../hooks/useTimeFrame';
import styled from './ActivityCard.module.css';
import PropTypes from 'prop-types';
import TimeFrameLabels from './TimeFrameLabels';

const ActivityInfo = ({ timeframes }) => {
  const { timeframe } = useTimeFrame();

  return (
    <div className={styled.times}>
      {timeframe === 'daily' && (
        <TimeFrameLabels
          {...timeframes.daily}
          label='Yesterday'
        />
      )}
      {timeframe === 'weekly' && (
        <TimeFrameLabels
          {...timeframes.weekly}
          label='Last week'
        />
      )}
      {timeframe === 'monthly' && (
        <TimeFrameLabels
          {...timeframes.monthly}
          label='Last month'
        />
      )}
    </div>
  );
};

ActivityInfo.propTypes = {
  timeframes: PropTypes.object.isRequired
};

export default ActivityInfo;
