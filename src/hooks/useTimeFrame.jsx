import { useContext } from 'react';
import { TimeFrameContext } from '../contexts/TimeFrame';

export const useTimeFrame = () => {
  return useContext(TimeFrameContext);
};
