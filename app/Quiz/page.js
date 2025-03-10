'use client'

import { useState } from "react";

function Quiz () {  // baixar estensor react e usar ffc no inicio de uma pagina.
    
    // name para selecionar um campo especifico para ser selecionado.
    //onclick pro botão funcionar e colocar a função e soma pra ele se preciso.
    // useState permite alterar valores de contadores, entradas de formularios ou qualquer outro valor alterado.




    const [p1, alterap1] = useState(0)
    const [p2, alterap2] = useState(0)
    const [total, alteraTotal] = useState(0)
    


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

            <button onClick={()=> alteraTotal(p1 + p2)  }> enviar respostas </button>

            <p> Total de pontos: { total } </p>




      </div>
       

    );
}

export default  Quiz;