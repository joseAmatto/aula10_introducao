 'use client'

import { useState } from "react"
import "./painel.css"

 // const é uma variavel assim como let 

 export default function painel(){

    const [usuario, alteraUsuario] = useState("")
    const [senha, alteraSenha] = useState("")

    const [mostraErro, alteraMostraErro] = useState(false)
<<<<<<< HEAD
const [mostraAprovado, alteraMostraAprovado] = useState (false)
    

function logar (){
    if(usuario == "jose" && senha == "1234"){

        alteraMostraErro(false)
=======
    const [mostraAprovado, alteraMostraAprovado] = useState(false)
    

    function logar (){
        if(usuario === jose && senha === 1234){

           alteraMostraErro(false)
>>>>>>> e77d6dc77e2e8a3e306051dad540ff861eb660e1
           alteraMostraAprovado(true)
            


           


        }else{

            alteraMostraErro(true)
            alteraMostraAprovado(false)
            

        }

        if(usuario == "" && senha == ""){
            alteraMostraErro(false)
           alteraMostraAprovado(false)

        }
    }

     return(

        <div>

            <h1>Painel de administração</h1><br/>
            <label>
                digite o usuario: 

            <input onChange={(e)=> alteraUsuario(e.target.value)}/>
            </label>

            <br/><br/>


            <label>



                digite a senha:


                <input onChange={(e)=> alteraSenha(e.target.value)}/>
            </label>

             <br/><br/>

            <button onClick={()=> logar()}>entrar</button>

            <br/><br/>

            {/* operador ternario, funciona como um IF e ELSE, só que dentro das div */ }

            {
            
                mostraErro == true?   

                   <div className="erro">
                        <p>usuario ou senha incorretos</p>
                   </div>
                :
                
                  <div></div>

<<<<<<< HEAD
            }  {

                 mostraAprovado == true?

                   <div className="aprovado">
                        <p>aprovado</p>
                   </div>

                :

                  <div></div>
=======
            } {

                mostraAprovado == true?

                   <div className="aprovado">
                               <p>Aprovado</p>


                 
                  </div>
>>>>>>> e77d6dc77e2e8a3e306051dad540ff861eb660e1
            }

           





            


        </div>




     )






 }




    
