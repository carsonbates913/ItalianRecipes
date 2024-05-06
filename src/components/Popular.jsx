import React from 'react'
import { useEffect, useState } from 'react' 
import Slidecard from './Slidecard.jsx'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import './Popular.css'

function Popular() {

  const ApiKey = '828c44bb845d44858bd7293d3f5ce747'

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []) ;

  const getPopular = async () => {

    const check = localStorage.getItem('popular');

    if(check){
      setPopular(JSON.parse(check));
    }else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${ApiKey}&number=9&include-tags=italian`);
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      console.log(data); 
      setPopular(data.recipes)
    }
  }

  return (
    <div className="popular-container">
      <div className="popular-title">
        <div className="popular-top-clip popular-left-clip"></div>
        <div className="popular-top-clip popular-right-clip"></div>
        <div className="popular-bottom-clip popular-left-clip"></div>
        <div className="popular-bottom-clip popular-right-clip"></div>
        <div className="popular-title-left-section"></div>
        <h1 className="popular-title-text">Popular</h1>
        <div className="popular-title-right-section"></div>

      </div>
      <Splide className="popular-slide" options={{
        perPage: 4,
        gap: "5rem",
      }}>
      {popular.map((recipe, index) => {
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

export default Popular