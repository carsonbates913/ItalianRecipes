import React from 'react'
import './Locations.css'
import { useEffect, useState } from 'react' 

function Locations() {

  const [mollyReviews, setMollyReviews] = useState([]);

  const [showDiv, setShowDiv] = useState(false);

  const Apikey = 'vBwgxDLdqe23Rsx5Ms1XYiS03bL8Vg3Q3V-humpP6hUHAIdjdQAic-eVqw3UkmI6yMRkL3QF5hA8btf3inpHM7Yb504HGjPjKn7w3UblwxMYWlYfX3dXADoyKTw4ZnYx'

  const fetchData = async () => {
    const data = await fetch (`https://api.yelp.com/v3/businesses/search?term=${"Molly's"}&location=${"Hanover"}`, {
      headers: {
        Authorization: `Bearer ${Apikey}`
      }
    });
    const restaurantData = await data.json();

    const businessId = restaurantData.businesses[0].id;

    const reviewsResponse = await fetch(`https://api.yelp.com/v3/businesses/${businessId}/reviews`, {
      headers: {
        Authorization: `Bearer ${Apikey}`
      }
    });
    const reviewsData = await reviewsResponse.json();
    setMollyReviews(reviewsData.reviews);

  }

  const handleButtonClick = () => {
    fetchData();
    setShowDiv(true);
  };

  

  return (
    <>
    <div className="locations-container">
    <div className="locations-component">
    <div className="locations-image-wrapper">
      <img style={{objectFit: 'cover', width: '100%'}}src= './Mollys_Image.jpeg' />
    </div>
    <div className="locations-review-holder">
        <ul>
        {showDiv && mollyReviews && mollyReviews.map((review, index) =>  
        {
          return(
        <li key={index}>{review.text}</li>)
      }
        )}
      </ul>
      <button className="review-button" onClick={handleButtonClick}>See Reviews</button>
    </div>
    </div>
    </div>
    </>
  )
}


export default Locations