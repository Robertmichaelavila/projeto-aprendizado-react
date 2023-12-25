import {useState} from 'react'

function Condicional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e){
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre o email:</h2>
            <form>
            <input
             type="email"
             placeholder="Digite o seu email"
             onChange={(e) => setEmail(e.target.value)}
             />
            <button onClick={enviarEmail}>
                Enviar
            </button>
                {userEmail && ( //Condição
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional