import React from 'react'
import '../../view/login/login.css'

function Login() {
    return (
    <div className="login-content d-flex align-items-center">
        <form className="form-signin mx-auto">
            <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="Login" width="72" height="57"/>
            <h1 class="h3 mb-3 fw-bold text-white font-weight-bold text-center">Login</h1>

            {/* <div className="form-floating">
            <input type="email" class="form-control my-2" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
            </div> */}
            <input type="email" id="inputEmail" class="form-control my-2" placeholder="email"/>

            <input type="password" id="inputPassword" class="form-control my-2" placeholder="senha"/>

            <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"/> Remember me
            </label>
            </div>
            <button className="w-100 btn btn-lg btn-login" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
    </div>
    )
}

export default Login 