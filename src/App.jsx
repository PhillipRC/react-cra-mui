import { ReactComponent as Logo } from './logo.svg';
import './App.css';

const clickHander = () => {
  console.log('hi')
}

function App() {

  return (
    <div className="App">

      <header className="App-header">

        <Logo className="App-logo" />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={clickHander}>
          Confetti
        </button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>

    </div >
  );
}

export default App;
