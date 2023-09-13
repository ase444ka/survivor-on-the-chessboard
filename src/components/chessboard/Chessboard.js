import styles from './Chessboard.module.css';
import {useState} from 'react';

import Square from '../square/Square';

// const chessArray = Array.from({length: 64}, (v, i) => i);
//
const Chessboard = () => {
  let firstWhite = true;
  let white = true;
  let k = 0;
  const result = [];
  const [guessed, setGuessed] = useState(null);
  
  for (let i = 0; i < 8; i++) {
    white = firstWhite;
    for (let j = 0; j < 8; j++) {
      result.push(<Square white={white} key={k++} reverse={!!(Math.floor(Math.random() * 10) % 2)} />);
      white = !white;
    }
    firstWhite = !firstWhite;
  }
  return <div className={styles.chessboard}>{result}</div>;
};

export default Chessboard;
