import './App.css';
import Key from './components/Key';
import Keyboard from './components/Keyboard';
import Screen from './components/Screen.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Screen />
        <Keyboard>
          <Key className="grey">AC</Key>
          <Key className="grey">+/-</Key>
          <Key className="grey">%</Key>
          <Key className="yellow">÷</Key>

          <Key className="dark">7</Key>
          <Key className="dark">8</Key>
          <Key className="dark">9</Key>
          <Key className="yellow">X</Key>

          <Key className="dark">4</Key>
          <Key className="dark">5</Key>
          <Key className="dark">6</Key>
          <Key className="yellow">-</Key>

          <Key className="dark">1</Key>
          <Key className="dark">2</Key>
          <Key className="dark">3</Key>
          <Key className="yellow">+</Key>

          <Key className="dark double">0</Key>
          <Key className="dark">,</Key>
          <Key className="yellow">=</Key>
        </Keyboard>
      </div>
    </div>
  );
}

export default App;
