import { ReactComponent as Logo } from './logo.svg';
import './App.css';
import JSConfetti from 'js-confetti'

const clickHander = () => {
  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti(
    {
      emojis: [
        '🌈',
        '⚡️',
        '💥',
        '✨',
        '💫',
        '🌸',
      ],
    }
  )
}

function App() {

  return (
    <div className="App">

      <header className="App-header">

        <Logo className="App-logo" />

        <button
          className="bg-blue-200 hover:bg-white text-gray-700 font-bold py-2 px-4 rounded"
          onClick={clickHander}>
          🎉 WOOT 🎉
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
