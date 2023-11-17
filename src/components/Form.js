import styles from './Form.module.css'
import HabilitacaoOptions from './HabilitacaoOptions';

function Form(){
    return(
        <>
        <div className={styles.formWrapper}>
            <form className={styles.formulario}>
                <label for="nome" className={styles.labelStyle}>Nome: <input type="text" id="nome" placeholder="Digite o nome"></input></label>
                <label for="email" className={styles.labelStyle}>Email: <input type="text" id="email" placeholder="Digite o email"></input></label>
                <label for="endereco" className={styles.labelStyle}>Endereço: <input type="text" id="endereco" placeholder="Digite o endereço"></input></label>
                <label for="cpf" className={styles.labelStyle}>CPF: <input type="text" id="cpf" placeholder="Digite o CPF"></input></label>

                <label for="selecaoHabilitacao" className={styles.labelSelect}>Tem carteira de motorista?
                    <HabilitacaoOptions></HabilitacaoOptions>
                </label>
                <label for="birthDate" className={styles.labelDate}>Data de nascimento:<input type='date' id="birthDate" className={styles.date}></input></label>
            </form>
        </div>
        </>
    )
}

export default Form