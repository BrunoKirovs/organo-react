import './Rodape.css'

const Rodape = () => {
    return(<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="www.facebook.com" target="_blank">
                        <img src="/imagens/facebook.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="www.twitter.com" target="_blank">
                        <img src="/imagens/twitter.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="www.instagram.com" target="_blank">
                        <img src="/imagens/instagram.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/Rodapé.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>
    )
}

export default Rodape