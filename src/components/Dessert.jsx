import React from 'react'
import { useEffect, useState } from 'react' 
import Slidecard from './Slidecard.jsx'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import './Dessert.css'

function Dessert() {

  const ApiKey = '828c44bb845d44858bd7293d3f5ce747'

  const [dessert, setDessert] = useState([]);

  useEffect(() => {
    getDessert();
  }, []) ;

  const getDessert = async () => {

    const check = localStorage.getItem('dessert');

    if(check){
      setDessert(JSON.parse(check));
    }else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${ApiKey}&number=9&include-tags=italian,dessert`);
      const data = await api.json();

      localStorage.setItem("dessert", JSON.stringify(data.recipes));
      console.log(data); 
      setDessert(data.recipes)
    }
  }

  return (
    <div className="dessert-container">
      <div className="dessert-title">
        <div className="dessert-top-clip dessert-left-clip"></div>
        <div className="dessert-top-clip dessert-right-clip"></div>
        <div className="dessert-bottom-clip dessert-left-clip"></div>
        <div className="dessert-bottom-clip dessert-right-clip"></div>
        <div className="dessert-title-left-section"></div>
        <h1 className="dessert-title-text">Dessert</h1>
        <div className="dessert-title-right-section"></div>

      </div>
      <Splide className="dessert-slide" options={{
        perPage: 4,
        gap: "5rem",
      }}>
      {dessert.map((recipe, index) => {
        return (
          <SplideSlide key={index}>
          <Slidecard key={index} path={"/details/" + recipe.id} label=
          {(recipe.readyInMinutes) + " min"} src={recipe.image} text={recipe.title} />
          </SplideSlide>
        )
      })
      }
      </Splide>
    </div>
  )
}

export default Dessert