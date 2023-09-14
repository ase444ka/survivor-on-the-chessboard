import {useState} from 'react';

import './App.css';

import Chessboard from './components/chessboard/Chessboard';

import JSConfetti from 'js-confetti';

function App() {
  const [step, setStep] = useState(1);

  const [trying, setTrying] = useState(1);
  const [successOrNot, setSuccessOrNot] = useState('');

  const tryAgain = () => {
    setStep(1);
    setTrying((prev) => prev + 1);
  };

  const showSuccessOrNot = (status) => {
    const canvas = document.querySelector('.canvas');

    const jsConfetti = new JSConfetti({canvas});
    console.log(canvas);
    switch (status) {
      case 'success':
        setSuccessOrNot('Congratulations!');

        jsConfetti.addConfetti();
        break;
      case 'error':
        setSuccessOrNot('Oh, noo :(');
        jsConfetti.addConfetti({
          emojis: ['💩'],
          emojiSize: 40,
       })
        break;
      default:
        setSuccessOrNot('Something went wrong o_O');
    }
    setTimeout(() => {
      doStep();
      setSuccessOrNot('');
      jsConfetti.clearCanvas();
    }, 2000);
  };

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
    case 4:
      text = successOrNot;
      break;

    default:
      break;
  }
  return (
    <div className="App">
      {step === 4 && <canvas className="canvas"></canvas>}
      <div className="header">
        {step === 5 ? (
          <button onClick={tryAgain}>try again</button>
        ) : (
          <h1>{text}</h1>
        )}
        
      </div>
      <Chessboard
        doStep={doStep}
        step={step}
        trying={trying}
        showSuccessOrNot={showSuccessOrNot}
      />
    </div>
  );
}

export default App;
