import './App.css';
import img1 from './assets/newyork.jpg';
import parisImg from './assets/paris.jpg';
import Card from './components/Card/Card';
import CardContent from './components/Card/CardContent';
import CardImage from './components/Card/CardImage';
import Icon from './components/UI/Icon';
import MyBtn from './components/UI/MyBtn';

const card1Data = {
  title: 'New York',
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
      <Icon icon='fa-facebook-official' />
      <Icon icon='fa-instagram' />
      <div className='card-container'>
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
        <Card data={card1Data} />
      </div>
    </div>
  );
}

export default App;
