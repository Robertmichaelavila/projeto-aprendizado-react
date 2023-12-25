import Button from './eventos/Button'

function Evento(){
    function meuEvento(){
        console.log('ativanddo')
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
        </div>
    )
}

export default Evento