import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch }  from 'react-redux'

const Navbar = () => {

    const dispatch = useDispatch()
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
            <i class="far fa-laugh-wink text-white fa-3x"></i>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars text-white"></i>
                     </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item"><Link className="nav-link ms-4" to="/">Home</Link> </li>

                    {    useSelector(state => state.usuarioLogado) > 0 ?
                    <>
                    <li className="nav-item"><Link className="nav-link" to="eventocadastro">Publicar Eventos</Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="">Meus Eventos</Link> </li>
                    <li className="nav-item"><Link className="nav-link" to='/login'onClick={() => dispatch({type: 'LOG_OUT', })}>Sair</Link> </li>
                    </>
                    :
                    <>
                    <li className="nav-item"><Link className="nav-link" to="novousuario">Cadastrar</Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/login">Login</Link> </li>
                    </>
                    }
                    
                    </ul>
                </div>
            </div>
        </nav>
        


                        
    
    )
}

export default Navbar
