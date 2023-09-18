import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const TimeFrameContext = createContext({
  timeframe: '',
  setTimeframe: () => {}
});

export const TimeFrameProvider = ({ children }) => {
  const [timeframe, setTimeframe] = useState('weekly');
  return (
    <TimeFrameContext.Provider value={{ timeframe, setTimeframe }}>
      {children}
    </TimeFrameContext.Provider>
  );
};

TimeFrameProvider.propTypes = {
  children: PropTypes.node
};
