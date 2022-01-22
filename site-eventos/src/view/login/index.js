import React from 'react'
import '../../view/login/login.css'

function Login() {
    return (
    <div className="login-content d-flex align-items-center">
        <form className="form-signin mx-auto">
            
            <h1 class="h3 mb-3 fw-bold text-white font-weight-bold text-center">Login</h1>

            
            <input type="email" id="inputEmail" class="form-control my-2" placeholder="email"/>

            <input type="password" id="inputPassword" class="form-control my-2" placeholder="senha"/>

            <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"/> Remember me
            </label>
            </div>
            <button className="w-100 btn btn-lg btn-login" type="submit">Sign in</button>

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