import React from 'react'
import '../../App.css'
import Search from '../Search.jsx'
import Cards from '../Cards.jsx'
import Popular from '../Popular.jsx'
import Dessert from '../Dessert.jsx'

function Recipes () {
  return (
    <>
      <Search />
      <Popular />
      <Dessert />
    </>
  );
}

export default Recipes