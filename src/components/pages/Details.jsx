import {useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Search from '../Search.jsx'
import Detailresults from '../Detailresults.jsx'


function Details() {
  return (
    <>
    <Search />
    <Detailresults />
    </>
  )
}

export default Details