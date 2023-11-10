import React from 'react'
import '../Comentario.css'

const Comentario = ({ imagens, alt, comentario, nomes}) => {
    return (
    <div className="coment">
    
    <img src={imagens}  alt={alt} className='teste'/>  
    <h2 className='nomes'>{nomes}</h2> 
    <p className='comentario'>{comentario}</p>
  
    </div>
)}

export default Comentario