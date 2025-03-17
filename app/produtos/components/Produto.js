function Produto( attr ){


    return(

        <div>
            <div style={{margin: 10, border: "1px solid grey", width: 150, padding: 10 }}> 

             <h2>{ attr.nome }</h2>
             { 
               attr.desconto != null &&
             <p><strong> { attr.desconto }% off </strong></p>
             }
             <p>R$:{ attr.preco }</p>

               {
                     attr.comprar == true ?

                     <button>Comprar</button>
                :
                      <p>indisponivel</p>


                }

             <button>Comprar</button>

            </div>

        </div>

    )
}

export default Produto;