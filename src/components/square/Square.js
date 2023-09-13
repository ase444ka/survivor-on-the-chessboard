import styles from './Square.module.css'

const Square = (props) => {
    return <div className={`${styles.square} ${props.white ? styles.white : styles.black}`}>
        {props.reverse && <div className={styles.reverse}></div>}
    </div>
}

export default Square