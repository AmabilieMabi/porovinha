import React from 'react'
import '../Post.css'

const Post = ({titulo, imagem, descricao, alt ,categoria}) => {
    return (
    <div className="card">
    <h2 className='titulo'> {titulo} </h2>
    <img src={imagem} alt={alt} className='testes'/>     
    <p className='categoria'>{categoria}</p>
    <p className='descricao'>{descricao}</p>


    </div>
)}

export default Post