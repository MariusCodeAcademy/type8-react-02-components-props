import './App.css';
import img1 from './assets/newyork.jpg';
import parisImg from './assets/paris.jpg';
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
        {/* <CardContent title date text /> */}
        <div className='card-content'>
          <h3>New york</h3>
          <p className='date'>{new Date().toDateString()}</p>
          <p className='text'>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
          <MyBtn text='Buy tickets' />
        </div>
      </article>
    </div>
  );
}

export default App;
