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
        '🦄',
        '🚽',
      ],
    }
  )
}

function App() {

  return (
    <div className="App">

      <header className="App-header">

        <Logo className="App-logo animate-bounce fill-brand-primary" />

        <button
          className="bg-brand-primary hover:bg-white text-brand-bg font-bold py-2 px-4 rounded"
          data-testid="woot-btn"
          onClick={clickHander}>

          <div className="flex space-x-4">
            <div class="button-icon">🎉</div>
            <div>WOOT</div>
            <div class="button-icon">🎉</div>
          </div>

        </button>

      </header>

    </div >
  );
}

export default App;
