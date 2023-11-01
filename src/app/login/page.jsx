"use client";
import React from 'react'
import { useState } from 'react';

export default function Login() {

  // Criando um useState para comportar o usuário;

  const [usuario, setUsario] = useState ({
    "email": "",
    "senha": ""
  });

  const handleChange = (e) => {
    // Destructuing
    const{name, value} = e.target;
    //Preechendo o campo , utilizando o useState com SPREAD + onChange:
    setUsario({... usuario,[name]:value})

  }

  // Função e validação e ENVIOS dos dados;
  const handleSubmit = async (e)=>{
    e.preventDefault();

    let user;
  
    try{
        const response = await fetch("http://localhost:3000/api/base/base-user/0",{
            method : "POST" ,
            headers:{
               "Content-Type":"application/json" 
            },
            body: JSON.stringify(usuario)
        });

        if(response.ok){
            let status = response.json().status;
            
            if(status){
                console.log('USUÁRIO VALIDADO COM SUCESSO!')
            }else{
                console.log("USUÁRIO OU SENHA INVÁLIDOS!")
            }
        }

    }catch(error){

    }

  }




  return (
    <>
    <div>
        <h1>INFORMAÇÃO DO USUARIOS</h1>

        <div>
            <form onSubmit={handleSubmit} >
                <fieldset>
                    <div>
                        <label htmlFor="idEmal">EMAIL</label>
                        <input type="email" name = "email" id='idEmail' placeholder='Digite seu email' value={usuario.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite a sua SENHA:" value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>LOGIN</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
    </>
  )
}
