import styles from './lista.module.css';

export default function Lista({ listado }) {
    return (
        <ul>
            {listado.map(elem => (
                <li className={styles.item}>{elem}</li>
            ))}
        </ul>
    )
}