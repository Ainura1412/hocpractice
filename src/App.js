import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Hover from './components/Hover';
import InputForm from './components/Input';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Hover />
        <InputForm />
      </header>
    </div>
  );
}

export default App;
