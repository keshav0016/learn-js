import React, {Component} from 'react'
import Register from './Register'
import Login from './Login'
import Logout from './Logout'

class Homepage extends Component{
    constructor(props){
        super(props)
        this.state = {
            register: false,
            login: false,
            loggedIn: false,
            logout : false
        }
        this.setRegister = this.setRegister.bind(this);
        this.setLogin = this.setLogin.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
        this.setLogout = this.setLogout.bind(this);

    }

    setRegister(){
        this.setState({
            register: !this.state.register,
            login: false,
            logout: false
        })
    }

    setLogin(){
        this.setState({
            login : !this.state.login,
            register : false,
            logout : false
        })
    }

    setLogout(){
        this.setState({
            register: false,
            login: false,
            loggedIn : !this.state.loggedIn,
            logout : true
        })
    }

    checkLogin(loginStatus){
        this.setState({
            loggedIn : loginStatus
        })
    }

    render(){
        return(
            <div>
                <button disabled = {this.state.loggedIn} onClick = {this.setRegister}>Register</button>
                <button disabled = {this.state.loggedIn} onClick = {this.setLogin}> Login </button> 
                <button disabled = {!this.state.loggedIn} onClick = {this.setLogout} className = "logout" > Logout </button>
                {this.state.register ? <Register/> : null}
                {this.state.login ? <Login checkLogin = {this.checkLogin}/> : null}
                {this.state.logout ? <Logout /> : null}
            </div>
        )
    }
}

export default Homepage