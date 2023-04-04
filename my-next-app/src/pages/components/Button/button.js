import styles from './button.module.css';

export default function Button({ texto, color, handleClick }) {
    return (
        <>
            <button className={styles.boton} style={{ backgroundColor: color }} id="id-boton" onClick={handleClick}>{texto}</button>
        </>
    )
}