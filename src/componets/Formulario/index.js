import {useState} from 'react'
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {
    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    

    const aoSalvar = (e) => {
        e.preventDefault()
        console.log(nome, cargo, imagem, time)
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        
    }

    return(
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                 obrigatorio={true}
                 label="Nome"
                 placeholder="Digite seu nome"
                 valor={nome}
                 aoAlterado={valor => setNome(valor)}
                   />

                <CampoTexto
                 obrigatorio={true}
                 label="Cargo"
                 placeholder="Digite seu cargo"
                 valor={cargo}
                 aoAlterado={valor => setCargo(valor)}
                 />

                <CampoTexto
                 label="Imagem"
                 placeholder="Digite sua imagem"
                 valor={imagem}
                 aoAlterado={valor => setImagem(valor)}
                 />
                <ListaSuspensa
                 obrigatorio={true}
                 label="Time"
                 itens={props.time}
                 valor={time}
                 aoAlterado={valor => setTime(valor)}
                 />
                <Botao texto="Criar card"/>
            </form>
        </section>
    )
}

export default Formulario