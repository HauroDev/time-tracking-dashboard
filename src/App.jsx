import Footer from './components/footer/Footer';
import activityData from './mocks/data.json';
import ActivityCard from './components/cards/activity/ActivityCard';
import AccountCard from './components/cards/account/AccountCard';

const App = () => {
  return (
    <>
      <main className='container'>
        <AccountCard />
        {activityData.map((activity, index) => {
          return (
            <ActivityCard
              key={index}
              title={activity.title}
              timeframes={activity.timeframes}
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default App;
