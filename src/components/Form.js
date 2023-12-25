import {useState} from 'react'

function Form(){
    function cadastrarUsuario(e){ // esse (e) é referente ao evento, ele está com o atributo default  para anular o envio do formulário pro Backend
        e.preventDefault()
        console.log(`Usuário ${name} cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <>
            <h1>Meu Cadeistro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)} // modifica o valor do State
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                     type="password" 
                     id="password"
                     name="password"
                     placeholder="Digite sua senha"
                     onChange={(e) => setPassword(e.target.value)} // modifica o valor do State
                     />
                </div>
                <div>
                    <input 
                    type="submit" 
                    value="Cadastrar"/>
                </div>
            </form>
        </>
    )
}

export default Form