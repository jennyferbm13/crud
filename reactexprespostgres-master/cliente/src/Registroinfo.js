import React, {useState} from 'react'

import axios from 'axios'
export const Registroinfo = () => {

  const [documento, setDocumento] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')



    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarpacientes', { numid: documento, nombre, apellido });
        console.log(res.data)
        setDocumento('')
        setNombre('')
        setApellido('')

      }
      //lo puse yo
      const eliminar = async () => {
        const res = await axios.post('/basedatos/borrarpacientes', { numid: documento, nombre, apellido });
        console.log(res.data)
        setDocumento('')
        setNombre('')
        setApellido('')

      }
      //lo puse yo
      const actualizamos = async () => {
        const res = await axios.post('/basedatos/actualizarpacientes', { numid: documento, nombre , apellido });
        console.log(res.data)
        setDocumento('')
        setNombre('')
        setApellido('')

      }
    
      const onChangedc = (e) => {
        setDocumento(e.currentTarget.value);
        console.log(documento)
      };
    
      const onChangenm = (e) => {
        setNombre(e.currentTarget.value);
        console.log(nombre)
      }; 
      //lo puse yo
      const borra = async() =>{
        console.log("se hizo click en borrar")
        eliminar ()
      }

       //lo puse yo
       const actualizar = async() =>{
        console.log("se hizo click en actualizar")
        actualizamos ()
      }
      const onChangeap = (e) => {
        setApellido(e.currentTarget.value)
      }

    const inserta = () => {
        console.log('Se hizo click');
         guardabase()
      }
    return (
        <div  className="formdb__box-containter">
            <h3 className="auth__title">Envio INFO</h3>
            <form>
               <input 
                className="auth__input"
                type="text"
                placeholder="documento"
                name="documento"
                value={documento}
                autoComplete="off"
                onChange={onChangedc}
                />
            

            <input 
                className="auth__input"
                type="text"
                placeholder="nombre"
                name="nombre"
                value={nombre}
                autoComplete="off"
                onChange={onChangenm}
                />
               <input 
                className="auth__input"
                type="text"
                placeholder="apellido"
                name="apellido"
                value={apellido}
                onChange={onChangeap}
                autoComplete="off"
                />

                
                
                <button
                className="btn btn-primary" 
                type="button"
                onClick={()=>inserta()}
                > 
                enviar info
                </button>
                
                <button
                //lo puse yo
                className="btn btn-primary" 
                type="button"
                onClick={()=>borra()}
                > 
                borrar
                </button>      
                <button
                //lo puse yo
                className="btn btn-primary" 
                type="button"
                onClick={()=>actualizar()}
                > 
                actualiza
                </button>  
            </form>
        </div>
    )
}
