import styles from './Square.module.css'

const Square = (props) => {
    return <div className={`${styles.square} ${props.white ? styles.white : styles.black}`}>
        {!!(Math.floor(Math.random() * 10) % 2) && <div className={styles.reverse}></div>}
    </div>
}

export default Square