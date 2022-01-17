import React from 'react'
import '../../view/login/login.css'

function Login() {
    return (
    <div className="login-content d-flex align-items-center">
        <form className="form-signin mx-auto">
            <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="Login" width="72" height="57"/>
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"/> Remember me
            </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
    </div>
    )
}

export default Login 