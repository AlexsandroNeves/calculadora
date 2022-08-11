import { useState } from 'react'
import { Button, ContainerCalc, Input } from './components/componentStyles/Index'

function App() {
  const [valor, setValor] = useState('')

  const numeros = ['+', '-', '*', '/', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  
  const clear = () => {
    setValor(" ")
  }

  const calc = () => {
  try {
      setValor(eval(valor));
    }
    
    catch (e) {
    setValor("Valor invalido");
  }
} 
  const numClick = (e) => {
    setValor(valor + (e.target.value))
  }
  return (

    <div className="App">
      <ContainerCalc>
        <Input type="text" value={valor} disabled  />
        {
          numeros.map((item) => <Button onClick={numClick} value={item} key={item}> {item}</Button>)
        }
        <Button onClick={clear} color >C</Button>
        <Button onClick={calc} color value='=' >=</Button>
      </ContainerCalc>
    </div>
  )
}

export default App
