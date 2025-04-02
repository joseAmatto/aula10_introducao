'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import "./dogs.css"

function Dogs() {
    
    const [dogs, alteraDogs] = useState([]);
    
    const [selectedBreed, setSelectedBreed] = useState('');

    
    async function buscaTodosDogs() {
        const response = await axios.get("https://dog.ceo/api/breeds/image/random/30");
        alteraDogs(response.data.message);
    }

   
    async function buscaPorRaca(raca) {
        const response = await axios.get(`https://dog.ceo/api/breed/${raca}/images/random/30`);
        alteraDogs(response.data.message);
    }

    
    const handleBreedClick = (raca) => {
        setSelectedBreed(raca); 
        if (raca === 'all') {
            buscaTodosDogs(); 
        } else {
            buscaPorRaca(raca); 
        }
    };

    
    useEffect(() => {

        buscaTodosDogs();

    }, []);

    return (


        <div >

            <h1 className="text"> Lista de Doguinhos </h1>

            <p className="text">Os melhores hotdogs estão aqui:</p>

          
            <button className="button" onClick={() => handleBreedClick('all')}> Ver todos </button>
            <button className="button" onClick={() => handleBreedClick('pitbull')}> Pitbull </button>
            <button className="button" onClick={() => handleBreedClick('labrador')}> Labrador </button>
            <button className="button" onClick={() => handleBreedClick('beagle')}> Beagle </button>

            <hr />

           
            {
                dogs.length > 0 ? (
                    <div className="flex gap-5 flex-wrap">
                        {
                            dogs.map((i, index) => 

                                <img key={index} src={i} alt="Dog" width={150}  />
                            )
                        }
                    </div>
                ) : (
                    <p>Carregando...</p>
                )
            }
        </div>
    );
}

export default Dogs;