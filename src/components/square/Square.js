import styles from './Square.module.css';

const Square = (props) => {
  const computedClassName = `${styles.square} ${
    props.white ? styles.white : styles.black
  } ${props.clickable ? styles.clickable : ''} ${
    props.clicked ? styles.choosen : ''
  }`;
  return (
    <div
      className={computedClassName}
      onClick={props.onClick}
      id={props.id}
      
    >
      {props.reverse && <div className={styles.reverse}></div>}
    </div>
  );
};

export default Square;
