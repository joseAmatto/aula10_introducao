//'use client'

import { useState } from "react";
import "./home.css"

 //testando
export default function Home() {

   let [carrinho, setCarrinho] = useState(0)


   





  return (
    
        <div >
            
        
       

           <h1> Conradito Market </h1>    
           <p> O melhor supermercado do bairro! </p>   
           <hr/>
           <p className="carrinho"> itens no carrinho: {carrinho} </p> 
           <hr/>


           <h2> Produtos </h2>
           <div className="produto">

               <img src="https://placehold.co/150"/>
                <p> Cenoura </p>
                <p> R$: 4,50 (kg)</p>
                <button onClick={()=> setCarrinho()  }> Comprar </button>
</div>
        </div>


   );
}




