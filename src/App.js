import {useState} from 'react';

import './App.css';

import Chessboard from './components/chessboard/Chessboard';

function App() {
  const [step, setStep] = useState(1);

  const doStep = () => {
    setStep((prev) => {
      return prev + 1
    })
  }
  let text;
  switch (step) {
    case 1:
      text = 'Choose magic square';

      break;
    case 2:
      text = 'Guess magic square';
      break;

    default:
      break;
  }
  return (
    <div className="App">
      <h1>{text}</h1>
      <Chessboard doStep={doStep}/>
    </div>
  );
}

export default App;
