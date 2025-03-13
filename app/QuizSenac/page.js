'use client'
import { useState } from "react";
import "./projeto.css";

function QuizSenac() {

  const [p1, setP1] = useState(0)
  const[p2, setP2] = useState(0)
  const[p3, setP3] = useState(0)
  const[p4, setP4] = useState(0)
  const[p5, setP5] = useState(0)


  const [selecionado, setSelecionado] = useState(["", "", "", ""]);

  const [ShowP1, setShowP1] = useState(true);
  const[ShowP2, setShowP2] = useState(false)
  const[ShowP3, setShowP3] = useState(false)
  const[ShowP4, setShowP4] = useState(false)
  const[ShowP5, setShowP5] = useState(false)

  function validaNome(){


  return (
    <div>
      <h1>Quiz Pokémon</h1>
      <br />
      <br />

      {ShowP1 === true && (
        <div className="alinha-imagem">
          <img src="https://placehold.co/500x500/png" alt="Imagem Pokémon" />

          <br />
          <div className="container">

                    <div className="opcao">
                        <button name="p1" className={selecionado[0]} onClick={()=>{ setP1(1); setSelecionado(["selecionado","","",""])}}> Pikachu </button>
                    </div>
                    <div className="opcao">
                        <button name="p1" className={selecionado[1]} onClick={()=>{ setP1(0); setSelecionado(["","selecionado","",""])}}> Gengar </button>
                    </div>
                    <div className="opcao">
                        <button name="p1" className={selecionado[2]} onClick={()=>{ setP1(0); setSelecionado(["","","selecionado",""])}}> Ratata </button>
                    </div>
                    <div className="opcao">
                        <button name="p1" className={selecionado[3]} onClick={()=>{ setP1(0); setSelecionado(["","","","selecionado"])}}> Beedril </button>
                    </div>
            
          </div>
          <button className="enviar">Enviar</button>
        </div>
      )}
    </div>
  );
}

export default QuizSenac;