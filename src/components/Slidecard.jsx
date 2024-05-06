import React from 'react'
import './Slidecard.css'
import { Link } from 'react-router-dom'

function Slidecard(props) {
  return (
    <>
    <div className="slidecards__item">
      <Link className="slidecards__item__link" to={props.path}>
      <figure className="slidecards__item__pic-wrap" data-category={props.label}>
        <img src={props.src} alt='img' className='slidecards__item__img'></img>
        </figure>
        <div className="slidecards__item__info">
          <h5 className="slidecards__item__text">{props.text}</h5>
        </div>
      </Link>
    </div>
    </>
  )
}

export default Slidecard