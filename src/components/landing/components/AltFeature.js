import React from 'react';
import PropTypes from 'prop-types';
import "../styles/AltFeature.sass"

/**
 * @class AltFeature
 * @desc Display a product image and talk about one of the
 * features.
 */

const AltFeature = (props) => (
  <section className="alt-feature-container">
    <div className="alt-feature">
      <div className="image-container">
        <img src={props.picture}></img>
      </div>
      <div className="content-container">
        <h2>{props.header}</h2>
        <h4>{props.subHeader}</h4>
        <p>{props.paragraphOne}</p>
        <p>{props.paragraphTwo}</p>
        <p>{props.paragraphThree}</p>

      </div>
    </div>
  </section>
)

AltFeature.propTypes = {
  picture: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string,
  paragraphOne: PropTypes.string,
  paragraphTwo: PropTypes.string,
  paragraphThree: PropTypes.string

}

export default AltFeature;
