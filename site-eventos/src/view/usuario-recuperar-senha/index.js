import React, { useState } from 'react';
import './usuario-recuperar-senha.css'
import Navbar from '../../components/navbar/index'


import firebase from '../../config/firebase'
import 'firebase/auth'
import  auth  from '../../config/firebase'
import { sendPasswordResetEmail } from 'firebase/auth';


function UsuarioRecuperarSenha() {

    const [email, setEmail] = useState()
    const [msg, setMsg] = useState()

    const recuperarSenha = async () => {
        
        try {
            const user = await sendPasswordResetEmail(auth,email)
                setMsg('Enviamos um link para o seu email')
            } catch (error) {
                setMsg('Verifique se os dados estão corretos')
                console.log(error)
            }
        
    }    
               
                    

  return(   
    <>
    <Navbar/>
    
        <form className='text-center from-login mx-auto mt-5'>
            <h3 className='mb-3 font-weight-bold'>Recuperar Senha</h3>
            <input onChange={(e) => setEmail(e.target.value)} type='email' className='form-control my-2' placeholder='Email'/>

            <div className='msg my-4 text-center'>
                <span>{msg}</span>
            </div>

            <button onClick={recuperarSenha} type='button' className='btn btn-lg btn-block btn-enviar'>Recuperar Senha</button>
        </form>
    
         
    </>

  )
};

export default UsuarioRecuperarSenha