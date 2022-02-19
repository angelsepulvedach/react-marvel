import React, {useState,useEffect} from 'react';
import axios from "axios";
import Character from "./Character";
import Error from "./Error";
import Loader from "./Loader";
import "../assets/styles/Components/CharactersList.css";

const CharactersList = () => {
    const [characters,setCharacters] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);

    useEffect(() => {
        getCharacters();
    },[]);
    async function getCharacters(){
        const apiUrl = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=3d9d760ca0b08c91db8459407159a917&hash=f66e500afad430f0b254d5c6c7053240"
        try{
            const response = await axios.get(apiUrl);
            const result = response.data.data.results;
            setCharacters(result);
            setLoading(false);
            setError(false);
            console.log(result);
        }catch (e){
            setLoading(false);
            setError(true);
        }
    }

    return(
        <div className="container-layout">

              <div className="characters-list">
                  {loading ? (
                      <Loader/>
                  ): error ? (
                      <Error/>
                  ): (

                      characters.map((character) =>(
                          <Character key={character.id} data={character}/>
                      ))

                  )}
              </div>
        </div>
    );
};

export default CharactersList;