import Item from './Item'

function List(){
    return(
        <>
            <h1>Meus Carros</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={2024}/>
                <Item ano_lancamento={2024}/>
                <Item marca='Ferrari'/>
                <Item/>
            </ul>
        </>
    )
}

export default List