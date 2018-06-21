import React from 'react'
import Link from 'gatsby-link'

import studentCTA from '../styles/StudentCallToActionStyles.module.css'
import altStudentCTA from '../styles/AltStudentCallToActionStyles.module.css'
import landingePageStyles from '../styles/LandingPageStyles.module.css'



class CallToAction extends React.Component {
    constructor () {
      super();
      this.state = {
      };
    }

    render  = () => {
        return (
        <section className={this.props.alt ? altStudentCTA.container : studentCTA.container}>
            <h1>{this.props.header}</h1>
            <div>{this.props.subHeader}</div>
            <a 
                href={this.props.url}
                className={`${landingePageStyles.getStartedButton} ${studentCTA.button}`}
            >
             {this.props.buttonText}
            </a>
        </section>
        )
    }
}

CallToAction.defaultProps = {
    header: '',
    subHeader: '',
    buttonText: '',
    alt: false,
    url: ''
  };

export default CallToAction