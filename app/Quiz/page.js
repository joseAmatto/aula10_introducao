'use client'

import { useState } from "react";
import "./Quiz.css"

function Quiz () {  // baixar estensor react e usar ffc no inicio de uma pagina.
    
    // name para selecionar um campo especifico para ser selecionado.
    //onclick pro botão funcionar e colocar a função e soma pra ele se preciso.
    // useState permite alterar valores de contadores, entradas de formularios ou qualquer outro valor alterado.
    // <input onChange={(e)=> alterap4(e.target.value)}/> , função para fazer questionario de texto.



    const [p1, alterap1] = useState(0)
    const [p2, alterap2] = useState(0)
    const [p3, alterap3] = useState(0)
    const [p4, alterap4] = useState("")
    const [total, alteraTotal] = useState(0)

    const [selecionado, alteraSelecionado] = useState(["","","",""])
    

    function calculapontos(){
      alteraTotal(p1+p2+p3)

      if( p4 == "a mumia"){
        alteraTotal(p1+p2+p3 + 1)
      }else{
        alteraTotal(p1+p2+p3)
      }
    }
    


    return (  


      <div>




            <h1> Quiz conradito </h1>
            <p> assina-le a opção correta! </p>
            <hr/>




            <h2> Qual a cor do cavalo branco de napoleãum? </h2>

            <label><input name="p1" type="radio" onChange={ ()=> alterap1(0)}/> preto </label>
            <br/>
            <label><input name="p1" type="radio" onChange={ ()=> alterap1(0)}/> azul </label>
            <br/>
            <label><input name="p1" type="radio"  onChange={ ()=> alterap1(1)}/> branco </label>
            <br/>
            <label><input name="p1" type="radio" onChange={ ()=> alterap1(0)} /> tranparente </label>
            <hr/>




            <h2> Qual a melhor letra? </h2>

            <label><input name="p2" type="radio" onChange={ ()=> alterap2(1) }/> A </label> 
            <br/>
            <label><input name="p2" type="radio" onChange={ ()=> alterap2(0)} /> B </label>
            <br/>
            <label><input name="p2" type="radio" onChange={ ()=> alterap2(0)}/> C </label>
            <br/>
            <label><input name="p2" type="radio" onChange={ ()=> alterap2(0)}/> D </label>
            <hr/>


            <h2>Quanto é dois + 2?</h2>

            <p className={selecionado [0]} onClick={ ()=> {alterap3(0); alteraSelecionado(["selecionado","","",""])} }> 2 </p>
            <p className={selecionado [1]} onClick={ ()=> {alterap3(1); alteraSelecionado(["","selecionado","",""])} }> 4 </p>
            <p className={selecionado [2]} onClick={ ()=> {alterap3(0); alteraSelecionado(["","","selecionado",""])} }> 10 </p>
            <p className={selecionado [3]} onClick={ ()=> {alterap3(0); alteraSelecionado(["","","","selecionado"])} }> 6 </p>







            <hr/>







            <h2> qual é o melhor filme do mundo? </h2>

            <input onChange={(e)=> alterap4(e.target.value)}/> 



            <hr/>




            <button onClick={()=> calculapontos()}> enviar respostas </button>

            <p> Total de pontos: { total } </p>




      </div>
       

    );
}

export default  Quiz;