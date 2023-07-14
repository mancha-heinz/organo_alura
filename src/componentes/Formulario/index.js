import CampoTexto from '../CampoTexto';
import './Formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados p/ criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="digite seu nome" />
                <CampoTexto label="Cargo" placeholder="digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="informe uma imagem" />
            </form>
        </section>
    )
}

export default Formulario;