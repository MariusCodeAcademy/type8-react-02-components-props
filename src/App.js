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

const cardsData = [
  card1Data,
  {
    title: 'Paris',
    image: parisImg,
    date: '2020-06-15',
    text: 'Welcome to Paris, eat a baguet',
  },
];

function TestSpread(props) {
  console.log('TestSpread props ===', props);
  return <h2>Does the spread works? {props.title}</h2>;
}

function App() {
  return (
    <div className='App'>
      <MyBtn text='I am reusable component' />
      <TestSpread {...card1Data} />
      {/* <CardImage img={parisImg} /> */}
      <h1 className='main-title'>Heloo again world</h1>
      <Icon icon='fa-facebook-official' />
      <Icon icon='fa-instagram' />
      <div className='card-container'>
        <Card data={cardsData[0]} apple='orange' />
        <Card data={cardsData[1]} />
        {/* <Card data={cardsData[3]} /> */}
      </div>
    </div>
  );
}

export default App;
