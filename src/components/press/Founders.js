import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/Press.module.css'

const Founder = ({ isLeftAligned, image, name, paragraph1, paragraph2 }) => {
  return isLeftAligned ? (
    <div className={styles.founderContainer}>
      <div className={styles.founderContainerLeft}>
        <img src={image} />
      </div>
      <div className={styles.founderTextBody}>
        <h3>{name}</h3>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
      </div>
    </div>
  ) : (
    <div className={styles.founderContainer}>
      <div className={styles.founderTextBody}>
        <h3>{name}</h3>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
      </div>
      <div className={styles.founderContainerRight}>
        <img src={image} />
      </div>
    </div>
  )
}

Founder.propTypes = {
  name: PropTypes.string.isRequired,
  paragraph1: PropTypes.string.isRequired,
  paragraph2: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isLeftAligned: PropTypes.bool.isRequired,
}

const Founders = ({ founders }) => {
  return (
    <section>
      <h1>Founders</h1>

      {founders.map((founder, index) => {
        return (
          <Founder
            key={index}
            name={founder.name}
            paragraph1={founder.paragraph1}
            paragraph2={founder.paragraph2}
            image={founder.image}
            isLeftAligned={founder.isLeftAligned}
          />
        )
      })}
    </section>
  )
}

Founders.propTypes = {
  founders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      paragraph1: PropTypes.string.isRequired,
      paragraph2: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      isLeftAligned: PropTypes.bool.isRequired,
    })
  ).isRequired,
}

export default Founders
