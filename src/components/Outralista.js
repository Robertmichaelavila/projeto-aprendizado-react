function Outralista({itens}){
    return(
        <>
            <h3>Lista de coisas:</h3>
            {itens.length > 0 ?( //Se o número de itens na lista for maior que 0
                itens.map((item, index) => ( //Key foi utilizado para simular um id
                <p key={index}>{item}</p>
            ))) : ( // : significa else
                <p>Não há itens</p>
            )}
        </>
    )
}

export default Outralista