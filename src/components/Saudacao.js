function Saudacao({nome}){
    function gerarSaudacao(algumNome){
        return `Olá ${algumNome}, tudo Show?`
    }

    return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
}

export default Saudacao