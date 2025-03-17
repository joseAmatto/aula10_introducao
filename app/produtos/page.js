'use client'

import Menu from "./components/Menu";
import Produto from "./components/produto";





function Produtos(){
    
    return(


        <div>

            <Menu/>


            <h1>Produtos</h1>
            <p>Bem-vindo a pagina de produtos</p>

            <hr/>

           <Produto nome="uva" preco=" 2,99" desconto="10" comprar="true" />
           
           <Produto nome="manga" preco="4,50" desconto="5"   />

        </div>
    )
     
}

export default Produtos;