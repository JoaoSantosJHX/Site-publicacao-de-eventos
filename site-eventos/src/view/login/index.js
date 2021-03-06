import React, { useState } from 'react'
import '../../view/login/login.css'
import  auth  from '../../config/firebase'
import { Link, Redirect } from 'react-router-dom'

import 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useSelector, useDispatch} from 'react-redux'

function Login() {

    
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [msgTipo, setMsgTipo] = useState()

    const dispatch = useDispatch()


   

    const logar = async () => {
        
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                email, 
                senha)
                setMsgTipo('Sucesso!')
                setTimeout(() => {
                    dispatch({type: 'LOG_IN', usuarioEmail: email})
                }, 2000)
                    
            } catch (error) {
                setMsgTipo('erro')
                
            }
        
    }

    return (
    <div className="login-content d-flex align-items-center">
        { useSelector(state => state.usuarioLogado) > 0 ? <Redirect to= '/' /> : null }
            
        <form className="form-signin mx-auto text-center">
                <i class="far fa-laugh-wink text-white fa-5x"></i>
            <h1 className="h3 mb-3 fw-bold text-white font-weight-bold text-center">Login</h1>

            
            <input onChange={(e) => setEmail(e.target.value) }type="email" id="inputEmail" class="form-control my-2" placeholder="email"/>

            <input onChange={(e) => setSenha(e.target.value) }type="password" id="inputPassword" className="form-control my-2" placeholder="senha"/>

            <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"/> Lembrar de mim
            </label>
            </div>
            <button onClick={logar} className="w-100 btn btn-lg btn-login" type="button">Login</button>


            <div className="msg-login text-white text-center my-5">
            { msgTipo === 'Sucesso!' && <span><strong>Foi!</strong> Voc?? esta conectado! &#129299;</span>} 
            { msgTipo === 'erro' && <span><strong>Ops!</strong> Verifique se a senha ou o usu??rio est??o corretos! &#128556;</span>}
            </div>
               
                
                
                

            <div className="opcoes-login mt-5 text-center">
                <Link to="/usuariorecuperarsenha" className='mx-2'>Recuperar senha</Link>
                <span className="text-white">&#9733;</span>
                <Link to='novousuario' className='mx-2'>Quero Cadastrar</Link>
            </div>

            
        </form>
    </div>
    )
}

export default Login 