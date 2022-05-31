import './App.css';
import img1 from './assets/newyork.jpg';
import parisImg from './assets/paris.jpg';
import CardContent from './components/Card/CardContent';
import CardImage from './components/Card/CardImage';
import MyBtn from './components/UI/MyBtn';

const card1Data = {
  title: 'newyork',
  image: img1,
  date: '2022-05-15',
  text: 'Heloo from new york',
};

function App() {
  return (
    <div className='App'>
      <MyBtn text='I am reusable component' />
      {/* <CardImage img={parisImg} /> */}
      <h1 className='main-title'>Heloo again world</h1>
      <article className='card'>
        <CardImage img={img1} />
        <CardContent
          title='New York'
          date='Tue May 31 2022'
          text='Welcome to new York, have a great time'
        />
      </article>
      <article className='card'>
        <CardImage img={parisImg} />
        <CardContent
          title='Paris'
          date='Tue May 31 2019'
          text='Welcome to Paris, eat a baguet'
        />
      </article>
    </div>
  );
}

export default App;
