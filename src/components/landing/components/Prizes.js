import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Prizes.sass'

import taxants from '../../../img/prizes/taxants.png'
import google_home_mini from '../../../img/prizes/google_home_mini.jpg'
import starbucks from '../../../img/prizes/starbucks.png'


const prizeList = [
  {
    name: 'Tax Ants internship',
    quote: `“Work with the CEO to learn about sales and marketing skills.”`,
    picture: taxants,
  },
  {
    name: 'Google home mini',
    quote: `“Use Google Home Mini to listen to Spotify, set reminders, at the comforts of your home”`,
    picture: google_home_mini,
  },
  {
    name: '$50 Starbucks gift card',
    quote: `“Buy your favourite Starbucks drink to give you a boost of energy while at school.”`,
    picture: starbucks,
  },

  {
    name: 'Free tax filing',
    quote: `“Taxants will give you a free tax filing, save time doing taxes.”`,
    picture: taxants,
  },
  
]

/**
 * @class Student
 * @desc A student testimonial.
 */

const PrizesSection = ({ name, quote, picture }) => (
  <div className="prizes-card">
    <div className="top">
      <div className="image-container">
        <img src={picture} />
      </div>
      <div className="details-container">
       { name.toLowerCase().includes('tax') 
         ? <div className="name"><a href={'https://taxants.ca/'}>{name}</a></div>
         : <div className="name">{name}</div>
       }
      </div>
    </div>
    <div className="quote">{quote}</div>
  </div>
)

PrizesSection.propTypes = {
  name: PropTypes.string,
  quote: PropTypes.string,
  picture: PropTypes.string,
}

/**
 * @class Prizes
 * @desc Shows all prizes.
 */

const Prizes = () => (
  <section className="prizes-container">
     <div className="title">
      <h2 className="title-name">Top 4 Winners Choose 1 of 4 Prizes</h2>
    </div>
    <div className="prizes">
      {prizeList.map((prize, i) => (
        <PrizesSection key={i} {...prize} />
      ))}
    </div>
  </section>
)

export default Prizes
