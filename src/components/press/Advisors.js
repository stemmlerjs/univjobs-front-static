import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/Press.module.css'

const Advisor = ({
  isLeftAligned,
  image,
  name,
  paragraph1,
  paragraph2,
  paragraph3,
}) => {
  return isLeftAligned ? (
    <div className={styles.founderContainer}>
      <div className={styles.founderContainerLeft}>
        <img src={image} />
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
        <img src={image} />
      </div>
    </div>
  )
}

Advisor.propTypes = {
  name: PropTypes.string.isRequired,
  paragraph1: PropTypes.string.isRequired,
  paragraph2: PropTypes.string.isRequired,
  paragraph3: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isLeftAligned: PropTypes.bool.isRequired,
}

const Advisors = ({ advisors }) => {
  return (
    <section>
      <h1>Advisors</h1>

      {advisors.map((advisor, index) => {
        return (
          <Advisor
            key={index}
            name={advisor.name}
            paragraph1={advisor.paragraph1}
            paragraph2={advisor.paragraph2}
            paragraph3={advisor.paragraph3}
            image={advisor.image}
            isLeftAligned={advisor.isLeftAligned}
          />
        )
      })}
    </section>
  )
}

Advisors.propTypes = {
  advisors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      paragraph1: PropTypes.string.isRequired,
      paragraph2: PropTypes.string.isRequired,
      paragraph3: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      isLeftAligned: PropTypes.bool.isRequired,
    })
  ).isRequired,
}

export default Advisors
