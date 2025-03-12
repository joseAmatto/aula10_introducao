'use client'

import { useState } from "react";
import "./Quiz.css"

function Quiz2 () {  // baixar estensor react e usar ffc no inicio de uma pagina.
    
    // name para selecionar um campo especifico para ser selecionado.
    //onclick pro botão funcionar e colocar a função e soma pra ele se preciso.
    // useState permite alterar valores de contadores, entradas de formularios ou qualquer outro valor alterado.
    // <input onChange={(e)=> alterap4(e.target.value)}/> , função para fazer questionario de texto.



    const [p1, alterap1] = useState(0)
    const [p2, alterap2] = useState(0)
    const [p3, alterap3] = useState(0)
    const [p4, alterap4] = useState("")
    const [total, alteraTotal] = useState(0)

    const [mostrap1, alteraMostrap1] = useState(true)
    const [mostrap2, alteraMostrap2] = useState(false)

    const [selecionado, alteraSelecionado] = useState(["","","",""])
    

    function calculapontos(){

      let totalAtualizado = 0

      if( p4 == "a mumia"){
        totalAtualizado = p1+p2+p3+1
        alteraTotal(totalAtualizado)

      }else{
        totalAtualizado = p1+p2+p3
        alteraTotal(totalAtualizado)

      }

      localStorage.setItem("total", totalAtualizado)

      
    }
    


    return (  


      <div >




            <h1> Quiz conradito </h1>
            <p> assina-le a opção correta! </p>
            <hr/>

            {

               mostrap1 == true &&

               <div>
             
                  <h2> Qual a cor do cavalo branco de napoleãum? </h2>

                  <label><input name="p1" type="radio" onChange={ ()=> {alterap1(0); alteraMostrap2(true); alteraMostrap1(false)}}/> preto </label>
                  <br/>
                  <label><input name="p1" type="radio" onChange={ ()=> {alterap1(0); alteraMostrap2(true); alteraMostrap1(false)}}/> azul </label>
                  <br/>
                  <label><input name="p1" type="radio"  onChange={ ()=> {alterap1(1); alteraMostrap2(true); alteraMostrap1(false)}}/> branco </label>
                  <br/>
                  <label><input name="p1" type="radio" onChange={ ()=> {alterap1(0); alteraMostrap2(true); alteraMostrap1(false)}} /> tranparente </label>

               </div>

               
              
            }

             <hr/>


            {
              mostrap2 == true &&

              <div>

                <h2> Qual a melhor letra? </h2>

                <label><input name="p2" type="radio" onChange={ ()=> alterap2(1) }/> A </label> 
                <br/>
                <label><input name="p2" type="radio" onChange={ ()=> alterap2(0)} /> B </label>
                <br/>
                <label><input name="p2" type="radio" onChange={ ()=> alterap2(0)}/> C </label>
                <br/>
                <label><input name="p2" type="radio" onChange={ ()=> alterap2(0)}/> D </label>




              </div>
            }


            




           
            <hr/>


            


            




            <button onClick={()=> calculapontos()}> enviar respostas </button>

            <p> Total de pontos: { total } </p>




      </div>
       

    );
}

export default  Quiz2;