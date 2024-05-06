import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detailresults.css'

function Detailresults() {

  const ApiKey = '828c44bb845d44858bd7293d3f5ce747'

  let params = useParams();

  const [itemDetails, setItemDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${ApiKey}`);
    const detailData = await data.json();
    console.log(detailData);
    setItemDetails(detailData);
  }

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="detail-wrapper">
      <div>
        <h2 style={{paddingBottom: '20px'}}>{itemDetails.title}</h2>
        <img src={itemDetails.image} alt="" />
      </div>
      <div className="detail-info">
        <div>Information</div>
        <h3 dangerouslySetInnerHTML={{__html: itemDetails.instructions}}></h3>
        <div style={{padding: '20px'}}>Ingredients</div>
        <ul>
          {itemDetails && itemDetails.extendedIngredients && itemDetails.extendedIngredients.map((ingredient, index) =>  
          {
            return(
          <li key={index}>{ingredient.original}</li>)
        }
          )}
        </ul>

      </div>
    </div>  
  )
}

export default Detailresults