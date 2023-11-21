import styles from './Sexo.module.css'

function SexoOptions() {
    return(
        <>
        <label for="sexo" className={styles.sexo}>Sexo:</label>
        <div className={styles.radioSexo}><input type="radio" class="sexo" name="sexo"></input><p>Masculino</p>
        <input type="radio" class="sexo" name="sexo"></input> <p>Feminino</p></div>
        </>
    )
}

export default SexoOptions;