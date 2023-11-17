import styles from './Habilitacao.module.css';

function HabilitacaoOptions() {
    return (
        <>
        <select id="selecaoHabilitacao" className={styles.select}>
            <option value="">N/A</option>
            <option value="habA">A</option>
            <option value="habB">B</option>
            <option value="habAB">AB</option>
            <option value="habC">C</option>
            <option value="habD">D</option>
            <option value="habE">E</option>
        </select>
        </>
    );
}

export default HabilitacaoOptions;
