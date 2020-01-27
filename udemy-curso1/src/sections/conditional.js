import React, { Component } from 'react';

class LoginButton extends Component{
    render(){
        return <button>Iniciar Sesión</button>
    }
}
class LogoutButton extends Component{
    render(){
        return  <div>
                    <p>Bienvenido, usuario</p> 
                    <button>Cerrar Sesión</button>
                </div>
    }
}

export default class CoditionalSection extends Component {
    constructor(){
        super()
        this.state = {isUserLogged: true}
    }
    render(){
        return(
            <div>
                <h4>Codicional Rendering</h4>
                {this.state.mostrarA 
                ? <LoginButton />
                : <LogoutButton />}
            </div> 
        )       
    }
}