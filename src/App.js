import {useState} from 'react';

import './App.css';

import Chessboard from './components/chessboard/Chessboard';



function App() {
  const [step, setStep] = useState(1);

  const [trying, setTrying] = useState(1)

  const tryAgain = () => {
    setStep(1)
    setTrying(prev => prev + 1)
  }

  const doStep = () => {
    setStep((prev) => {
      return prev + 1;
    });
  };
  let text;
  switch (step) {
    case 1:
      text = 'Choose magic square';

      break;
    case 2:
      text = 'Turn it over!';
      break;
    case 3:
      text = 'Guess magic square';
      break;

    default:
      break;
  }
  return (
    <div className="App">
      {step === 4 ? <button onClick={tryAgain}>try again</button> : <h1>{text}</h1> }
      <Chessboard doStep={doStep} step={step} trying={trying} />
    </div>
  );
}

export default App;
