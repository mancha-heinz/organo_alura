import Botao from '../Botao/indesx';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {
    const times = [
        'programação',
        'front-end',
        'data science',
        'devops',
        'ux e design',
        'mobile',
        'inovação e gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('form foi enviado')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados p/ criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="informe uma imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
                <Botao>
                    criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;