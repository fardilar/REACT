import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

/*function Hello(props){
  return <h2>{props.title}</h2>
}*/

//const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render (){
    return <h2>{this.props.title}</h2>
  }
}

class Title extends Component {
  render (){
    return <h2>{this.props.text}</h2>
  }
}
Title.defaultProps ={
  text: 'Titulo por defecto'
}
class Text extends Component {
  render (){
    const { 
      arrayOfNumbers, 
      isActivated, 
      multiply,
      objectWithInfo,
      title} = this.props
    const textoSegunBool = isActivated ? 'on' : 'off'
    const mappedNumbers = arrayOfNumbers.map(multiply)
    
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textoSegunBool}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWithInfo.key}</p>
        {title}
      </div>
    )
  }
}
class Contador extends Component{
  constructor(props){
    super(props)
    this.state = {contador: this.props.contadorInicial}
    setInterval(()=>{
      this.setState({contador : this.state.contador + 1})
    },1000)
  }
  render(){
    return <ContadorNumero numero = {this.state.contador}/>
  }
}
Contador.defaultProps = {
  contadorInicial : 0
}

class ContadorNumero extends Component{
  render(){
    console.log('ContadorNumero render()')
    return <span>{this.props.numero}</span>
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Hola mundo'/>
        <h3>Vamos a aprender React</h3>
        <Text 
          arrayOfNumbers={[2,3,10]}
          isActivated
          number={2}
          multiply={(number) => number * 4}
          objectWithInfo={{key: 'First value', key2: 'otherValue'}}
          text='Texto en string' 
          title = {<h1>Este es el titulo</h1>}         
        />
        <Title/>
        <Contador contadorInicial={100}/>
      </header>         
       
    </div>   
  );
}

export default App;
