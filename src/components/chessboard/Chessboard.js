import styles from './Chessboard.module.css';
import {useState, useEffect} from 'react';

import Square from '../square/Square';

const generateNewArray = () => {
  const arr = [];
  for (let i = 0; i < 64; i++) {
    arr.push(+!!(Math.floor(Math.random() * 10) % 2));
  }
  return arr;
};

const array = generateNewArray();

const Chessboard = (props) => {
  let firstWhite = true;
  let white = true;
  let k = 0;
  const [resultArray, setResultArray] = useState(array);
  const [guessed, setGuessed] = useState(null);
  const [purposed, setPurposed] = useState(null);

  const [effect, setEffect] = useState(false);

  useEffect(() => {
    if (props.step === 1) {
      setResultArray(generateNewArray());
      setGuessed(null)
      setPurposed(null)
    }
  }, [props.step]);

  useEffect(() => {
    if (guessed === null || purposed === null) return
    if (guessed === purposed) {
      props.showSuccessOrNot('success')
    } else {
      props.showSuccessOrNot('error')
    }

  }, [guessed, purposed])

  const guess = (id) => {
    setGuessed(id);
    setEffect(true);
    setTimeout(() => {
      setEffect(false);
    }, 500);
  };

  const purpose = (id) => {
    setPurposed(id)
    setEffect(true);
    setTimeout(() => {
      setEffect(false);
    }, 500);
  }

  const changeBoardState = (id) => {
    setResultArray((prev) => {
      const newState = [...prev];
      newState[id] = +!newState[id];
      return newState;
    });
  };

  const checkClick = (k) => {
    return (k === guessed || k === purposed) && effect;
  };

  const checkRight = (k) => {
    return (purposed !== null && guessed === k)
  }

  const checkWrong = (k) => {
    return (purposed !== null && purposed !== guessed && purposed === k)
  }

  const handleClick = (e) => {
    switch (props.step) {
      case 1:
        guess(+e.currentTarget.id);
        break;
      case 2:
        changeBoardState(+e.currentTarget.id);
        break;
      case 3:
        purpose(+e.currentTarget.id)
        break;
      default:
        return;
    }
    props.doStep();
  };

  let resultView = [];
  for (let i = 0; i < 8; i++) {
    white = firstWhite;
    for (let j = 0; j < 8; j++) {
      resultView.push(
        <Square
          white={white}
          key={k}
          id={k}
          reverse={!!resultArray[k]}
          clicked={checkClick(k)}
          clickable={props.step < 4}
          onClick={handleClick}
          right={checkRight(k)}
          wrong={checkWrong(k)}
        />
      );
      white = !white;
      k++;
    }
    firstWhite = !firstWhite;
  }
  return <div className={styles.chessboard}>{resultView}</div>;
};

export default Chessboard;
