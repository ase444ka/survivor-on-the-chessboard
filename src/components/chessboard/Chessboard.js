import styles from './Chessboard.module.css';
import {useState, useMemo} from 'react';

import Square from '../square/Square';

// const chessArray = Array.from({length: 64}, (v, i) => i);
//
const Chessboard = (props) => {
  let firstWhite = true;
  let white = true;
  let k = 0;
  const resultView = [];
  const [guessed, setGuessed] = useState(null);
  const [isGuessed, setIsGuessed] = useState(false);
  /*   let zone1 = 0
  let zone2 = 0
  let zone3 = 0
  let zone4 = 0
  let zone5 = 0
  let zone6 = 0 */
  const resultArray = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 64; i++) {
        arr.push(+!!(Math.floor(Math.random() * 10) % 2))
    }
    return arr
  }, []);


  const handleClick = (e) => {
    if (isGuessed) return;
    setGuessed(e.currentTarget.id);
    setIsGuessed(true);
    props.doStep()
  };

  for (let i = 0; i < 8; i++) {
    white = firstWhite;
    for (let j = 0; j < 8; j++) {
      resultView.push(
        <Square
          white={white}
          key={k}
          id={k}
          reverse={!!resultArray[k]}
          clickable={!isGuessed}
          onClick={handleClick}
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
