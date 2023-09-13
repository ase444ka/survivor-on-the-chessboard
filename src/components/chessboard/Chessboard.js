import styles from './Chessboard.module.css';
import {useState} from 'react';

import Square from '../square/Square';

// const chessArray = Array.from({length: 64}, (v, i) => i);
//
const Chessboard = () => {
  let firstWhite = true;
  let white = true;
  let k = 0;
  const resultArray = []
  const resultView = [];
  const [guessed, setGuessed] = useState(null);
  const [isGuessed, setIsGuessed] = useState(false)
/*   let zone1 = 0
  let zone2 = 0
  let zone3 = 0
  let zone4 = 0
  let zone5 = 0
  let zone6 = 0 */

  const handleClick = (e) => {
    if (isGuessed) return
    setGuessed(e.currentTarget.id);
    setIsGuessed(true)
  }

  for (let i = 0; i < 8; i++) {
    white = firstWhite;
    for (let j = 0; j < 8; j++) {
        const reverse = !!(Math.floor(Math.random() * 10) % 2)
      resultView.push(
        <Square
          white={white}
          key={k}
          id={k}
          reverse={reverse}
          clickable={!isGuessed}
          onClick={handleClick}
        />
      );
      resultArray.push(+reverse)
      white = !white;
      k++;
    }
    firstWhite = !firstWhite;
  }
  return <div className={styles.chessboard}>{resultView}</div>;
};

export default Chessboard;
