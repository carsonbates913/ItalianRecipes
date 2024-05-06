import React from 'react'
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Carditem from './Carditem.jsx'
import './Searchresults.css'

function Searchresults() {

  const ApiKey = '828c44bb845d44858bd7293d3f5ce747';

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${ApiKey}&number=9&cuisine=italian&query=${name}`);
      const recipes = await data.json();

      setSearchedRecipes(recipes.results)
    }

    useEffect(() => {
      getSearched(params.search)
    }, [params.search])

  return (
    <>
    <div className="results-title"><span className="results-italian">Italian</span> Recipes for</div>
    <div className="results-keyword">{params.search}</div>
    <div className="results-container">
      {searchedRecipes.map((recipe, index) => {
        return(
          <Carditem key={index} path={"/details/" + recipe.id} label=
          {" "} src={recipe.image} text={recipe.title} />
        )
      }
       )}
    </div>
    </>
    

  )
}

export default Searchresults