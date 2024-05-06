import { React, useState } from 'react'
import './Search.css'
import { FaUtensils } from "react-icons/fa6"
import {useNavigate} from 'react-router-dom'

function Search() {

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleInputChange(event){
    setInput(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log("hello");
    navigate('/searched/' + input);
  }

  return (
    <div className="search-container">
      <img className="search-background" src="../Italian_Recipes_Background.jpeg"></img>
      <div className="search-wrapper">
        <h1 className="search-title">Search For Italian Recipes</h1>
        <form onSubmit={handleSubmit}className="search-bar-wrapper">
          <div className="search-logo">
            <FaUtensils />
          </div>
        <input type="text" className="search-bar" placeholder="Cerca..." value={input} onChange={handleInputChange} />
        </form>
      </div>
    </div>
  )
}

export default Search;