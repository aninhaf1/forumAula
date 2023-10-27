import React, { useState } from "react";
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Menu from "../../componentes/Menu/Menu";
import { ButtonStyle, ContainerCriarPost, FormStyle, InputStyle, TextareaStyle } from "./styles";
import Historicos from "../../componentes/Historicos/Historicos";
import { createPost } from "../../services/requests";
import { useVerificarToken } from "../../hooks/useverificarToken";
import { response } from "express";

const CriarPost = () => {
 
    cosnt [title, setTitle] = useState('')
    cosnt [content, setContent] = useState('')
    cosnt [image, setImage] = useState('')
    cosnt [hashtag, setHashtag] = useState('')
    
    const CriarPostApi = async(e) =>{
      e.preventDefault()
      if(!title || !content){
        alert('Titulo e conteúdo são campos obrigatórios.')
      }

      const hashtagsArray = hashtag.split(",")

      await createPost(title, content, image, hashtagsArray)
      .then((response)=>{
        console.log('Post criado com sucesso!', response)
      })
      .catch((error)=>{
        console.error('Erro ao criar o post', error)
      })
    }

    useVerificarToken()

  return (
   <>
   criarpost
   </>
  );
};

export default CriarPost;
