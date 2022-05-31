import './App.css';
import img1 from './newyork.jpg';

function MyBtn(props) {
  console.log('props ===', props);
  return <button className='btn-black'>{props.text}</button>;
}

function App() {
  return (
    <div className='App'>
      <MyBtn text='I am reusable component' />
      <h1 className='main-title'>Heloo again world</h1>
      <article className='card'>
        <img className='card-image' src={img1} alt='Card' />
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
