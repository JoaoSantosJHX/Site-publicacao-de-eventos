import React, { useState } from 'react'
import 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import './usuario-novo.css'
import { async } from '@firebase/util'
import  auth  from '../../config/firebase'
import Navbar from '../../components/navbar/index'


function NovoUsuario() {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [msgTipo, setMsgTipo] = useState()
    const [msg, setMsg] = useState()
    const [carregando, setCarregando] = useState()

    const cadastrar = async () => {
        
        setCarregando(1)
        setMsgTipo(null)

        if(!email || !senha){
            setMsgTipo('erro')
            setMsg('Voce precisa informar o email e a senha para fazer o cadastro.')
            return
        }

        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                email, 
                senha)
                setCarregando(0)
                setMsgTipo('Sucesso!')
            } catch(erro) {
                setCarregando(0)
                setMsgTipo('erro')
                console.log(erro.message)
                switch(erro.message) 
                {
                case 'Firebase: Error (auth/invalid-email).':
                    setMsg('Email inválido');
                    break
                case 'Firebase: Error (auth/email-already-in-use).':
                    setMsg('Este email já está cadastrado.')
                    break
                case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
                    setMsg('A senha deve ter pelo menos 6 caracteres.')
                    break
                default:
                    setMsg('Não foi possível cadastrar. Tente mais tarde.')

                }
                
            }
        
    }

    return (
        <>
        <Navbar />
        <div className='form-cadastro'>
         <form className='text-center form-login mx-auto mt-5'>

             <h1 className='h3 mb-3 text-black font-weight-bold'>Cadastro</h1>

             <input onChange={(e) => setEmail(e.target.value)} type="email" className='form-control my-2' placeholder='Email' />
             <input onChange={(e) => setSenha(e.target.value)}  type="password" className='form-control my-2' placeholder='Senha' />

             { carregando ? <div class="spinner-border text-primary" role="status">
                 <span class="visually-hidden">Loading...</span>
            </div> : <button onClick={cadastrar} type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro'>Cadastrar</button>}          
                                                             
             
             <div className="msg-login text-black text-center my-5">
            { msgTipo === 'Sucesso!' && <span><strong>Foi!</strong> Usuário Cadastrado com sucesso! &#129299;</span>} 
            { msgTipo === 'erro' && <span><strong>Ops!</strong> {msg} &#128556;</span>}
            </div>
         </form>
        </div>
        </>
    )
}

export default NovoUsuario
