import styled from './AccountCard.module.css';
import { useTimeFrame } from '../../../hooks/useTimeFrame';

const AccountCard = () => {
  const { timeframe, setTimeframe } = useTimeFrame();
  return (
    <article className={styled['account']}>
      <div className={styled['user']}>
        <img
          src='/assets/image-jeremy.png'
          alt='Jeremy Robson'
          className={styled['image']}
        />
        <h2>
          <span className={styled['title']}>Report for</span>
          <span className={styled['name']}>Jeremy Robson</span>
        </h2>
      </div>
      <div className={styled['buttons']}>
        <button
          className={`${timeframe === 'daily' ? styled['active'] : ''}`}
          onClick={() => setTimeframe('daily')}>
          Daily
        </button>
        <button
          className={`${timeframe === 'weekly' ? styled['active'] : ''}`}
          onClick={() => setTimeframe('weekly')}>
          Weekly
        </button>
        <button
          className={`${timeframe === 'monthly' ? styled['active'] : ''}`}
          onClick={() => setTimeframe('monthly')}>
          Monthly
        </button>
      </div>
    </article>
  );
};

export default AccountCard;
