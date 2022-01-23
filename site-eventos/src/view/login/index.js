import React, { useState } from 'react'
import '../../view/login/login.css'
import  auth  from '../../config/firebase'

import firebase from '../../config/firebase'
import 'firebase/auth'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

function Login() {

    const [registerEmail, setRegisterEmail] = useState()
    const [registerSenha, setRegisterSenha] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()


    const register = async () => {
        try {
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerSenha)
        } catch (erro) {
            console.log(erro.message)
        }
    }

    const logar = async () => {
        
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                email, 
                senha)
                console.log('Login realizado!')
            } catch (erro) {
                console.log(erro.message)
            }
        
    }

    return (
    <div className="login-content d-flex align-items-center">
        <form className="form-signin mx-auto">
            
            <h1 className="h3 mb-3 fw-bold text-white font-weight-bold text-center">Login</h1>

            
            <input onChange={(e) => setEmail(e.target.value) }type="email" id="inputEmail" class="form-control my-2" placeholder="email"/>

            <input onChange={(e) => setSenha(e.target.value) }type="password" id="inputPassword" className="form-control my-2" placeholder="senha"/>

            <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"/> Remember me
            </label>
            </div>
            <button onClick={logar} className="w-100 btn btn-lg btn-login" type="button">Login</button>

            <div className="msg-login text-white text-center my-4">
                <span><strong>Foi!</strong> Voce esta conectado! &#129299;</span>
                <br></br>
                <span><strong>Ops!</strong> Verifique se a senha ou o usuario estao corretos! &#128556;</span>
            </div>

            <div className="opcoes-login mt-5 text-center">
                <a href="#" className='mx-2'>Recuperar senha</a>
                <span className="text-white">&#9733;</span>
                <a href="#"className='mx-2'>Quero Cadastrar</a>
            </div>

            
        </form>
    </div>
    )
}

export default Login 