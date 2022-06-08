import './App.css';
import SetColor from './components/SetColor';
import LazySetState from './components/LazySetState';
import PrevState from './components/PrevState';
import SetStateClass from './components/SetStateClass';
import SetStateFunction from './components/SetStateClass';
import SetSatateFunctionPrev from './components/SetStateFunctionPrev';
import SetStateForm from './components/SetStateform';

function App() {
  return (
    <div className="App">
      <SetColor/>
      <LazySetState/>
      <PrevState/>
      <SetStateClass/>
      <SetStateFunction/>
      <SetSatateFunctionPrev/>
      <SetStateForm/>
    </div>
  );
}

export default App;
