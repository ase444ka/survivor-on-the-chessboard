import styles from './Chessboard.module.css';

import Square from '../square/Square';

// const chessArray = Array.from({length: 64}, (v, i) => i);
//
const Chessboard = () => {
  let firstWhite = true;
  let white = true;
  const result = [];
  for (let i = 0; i < 8; i++) {
    white = firstWhite;
    for (let j = 0; j < 8; j++) {
      result.push(<Square white={white} />);
      white = !white;
    }
    firstWhite = !firstWhite;
  }
  return <div className={styles.chessboard}>{result}</div>;
};

export default Chessboard;
