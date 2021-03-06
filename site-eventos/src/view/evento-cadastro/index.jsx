import React, { useState } from 'react';
import './evento-cadastro.css'
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import firebase from '../../config/firebase'
import Navbar from '../../components/navbar/index'
// from firebase
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import { app } from '../../config/firebase'
import { getApp } from "firebase/app";
import { getStorage } from "firebase/storage";



const EventoCadastro = () => {

    // Estados 

    const [msgTipo, setMsgTipo] = useState()
    const [titulo, setTitulo] = useState()
    const [tipo, setTipo] = useState()
    const [detalhes, setDetalhes] = useState()
    const [data, setData] = useState()
    const [hora, setHora] = useState()
    const [foto, setFoto] = useState()
    const [usuarioEmail, setUsuarioEmail] = useState()

    // Constantes para chamar o database e o storage do firebase
    const firebaseApp = getApp()
    const storage = getStorage(firebaseApp, `imagem/${foto.name}`)
    const db = getFirestore(app)
    
    // Funcao para fazer o cadastro

    function cadastrar() {
        //passando como referencia a imagem com o nome para guardar no storage
        // storage.ref(`imagem/${foto.name}`).put(foto).then(() => {
        //     console.log(db.image)
        // }).catch(erro => {
        //     setMsgTipo('Nao foi possivel cadastrar o evento')
        // })
    }
    

  return (
      <>
      <Navbar/>
        <div className='col-12 container'>
            <div className='row '>
                <h3 className='mx-auto mt-3 fw-bold text-center'>Novo Evento</h3>
            </div>

            <form>
                <div className='form-group'>
                    <label className='mb-2'> Título:</label>
                    <input type="text" className='form-control' />
                </div>

                <div className='form-group'>
                    <label className='my-2'> Tipo de Evento:</label>
                    <select className='form-control'>
                        <option disabled selected value>-- Selecione um tipo --</option>
                        <option>Festa</option>
                        <option>Teatro</option>
                        <option>Show</option>
                        <option>Evento</option>
                    </select> 
                </div>

                <div className='form-group'>
                    <label className='mt-3 mb-3'> Descrição de Evento:</label>
                    <textarea className='form-control' rows='3'/>
                </div>

                <div className='form-group row'>
                    <div className='col-6'>
                        <label>Data:</label>
                        <input type="date" className='form-control' />
                    </div>

                    <div className='col-6'>
                        <label>Hora:</label>
                        <input type="time" className='form-control' />
                    </div>

                    <div className='form-group'>
                        <label>Upload da foto</label>
                        <input type="file" className='form-control' />
                    </div>
                </div>
                <button onClick={cadastrar} type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro'>Publicar Evento</button>
            </form>

            <div className="msg-login text-center my-5">
            { msgTipo === 'Sucesso!' && <span><strong>Foi!</strong> Evento Publicado! &#129299;</span>} 
            { msgTipo === 'erro' && <span><strong>Ops!</strong> Erro! Tente novamente. &#128556;</span>}
            </div>
                    





        </div>
      </>
  )
};

export default EventoCadastro;