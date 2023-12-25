import './App.css'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'

function App() {

  const nome = 'Carlos'

  return (
    <div className="App">
      <Frase/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="Rodi"
        idade="56"
        profissao="junior"
        foto="https://via.placeholder.com/150"
      />
      <List/>
      <Evento/>
      <Form/>
    </div>
  )
}

export default App
