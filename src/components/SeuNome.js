//import {userstate} from 'react' cole isso no app para testar

function SeuNome({setNome}){
    return(
        <div>
            <p>Digite</p>
            <input 
            type='text'
            placeholder="Escreva"
            onChange={(e) => setNome(e.target.value)}
            />
        </div>
    )
}

export default SeuNome