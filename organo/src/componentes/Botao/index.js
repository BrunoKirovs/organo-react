import './Botao.css'

const Botao = (prosp) => {

    return (<button className='botao'>
        {prosp.texto}
    </button>)
}

export default Botao