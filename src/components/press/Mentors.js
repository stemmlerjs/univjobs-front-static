import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/Press.module.css'

const Mentor = ({ isLeftAligned, image, name, paragraph1, paragraph2, paragraph3 }) => {
  return isLeftAligned 
    ? (
      <div className={styles.founderContainer}>
        <div className={styles.founderContainerLeft}>
          <img src={image}/>
        </div>
        <div className={styles.founderTextBody}>
          <h3>{name}</h3>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>
        </div>
      </div>
    ) : (
      <div className={styles.founderContainer}>
        <div className={styles.founderTextBody}>
          <h3>{name}</h3>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>
        </div>
        <div className={styles.founderContainerRight}>
          <img src={image}/>
        </div>
      </div>
    )
}

Mentor.propTypes = {
  name: PropTypes.string.isRequired,
  paragraph1: PropTypes.string.isRequired,
  paragraph2: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isLeftAligned: PropTypes.bool.isRequired
}

const Mentors = ({ mentors }) => {
  return (
    <section>
      <h1>Mentors</h1>

      {
        mentors.map((mentor, index) => {
          return <Mentor
            key={index}
            name={mentor.name}
            paragraph1={mentor.paragraph1}
            paragraph2={mentor.paragraph2}
            paragraph3={mentor.paragraph3}
            image={mentor.image}
            isLeftAligned={mentor.isLeftAligned}
          />
        })
      }
    </section>
  )
}

Mentors.propTypes = {
  mentors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    paragraph1: PropTypes.string.isRequired,
    paragraph2: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isLeftAligned: PropTypes.bool.isRequired
  })).isRequired
}

export default Mentors;