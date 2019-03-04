import React from 'react'
import Link from 'gatsby-link'

import showCaseStyles from '../styles/ShowCaseSectionStyles.module.css'

import companySmallOne from '../img/companies-resized-1.png'
import companySmallTwo from '../img/companies-resized-2.png'
import companySmallThree from '../img/companies-resized-3.png'
import companies from '../img/companies.png'

class ShowCaseSection extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render = () => {
    return (
      <div>
        <section className={showCaseStyles.container}>
          <div className={showCaseStyles.graphicsContainer}>
            <img style={{ maxHeight: '888px' }} src={this.props.leftPicture} />
          </div>
          <div className={showCaseStyles.textContainer}>
            <div>
              <h1>{this.props.textContainerHeader}</h1>
              <h1>{this.props.textContainerSubHeader}</h1>
            </div>

            <div className={showCaseStyles.standardParagraph}>
              {this.props.firstSectionParagraph}
            </div>
            <div className={showCaseStyles.standardParagraph}>
              {this.props.secondSectionParagraph}
            </div>

            <div className={showCaseStyles.regularWhosOn}>
              <div className={showCaseStyles.whosOnContainer}>
                <div className={showCaseStyles.whosOn}>
                  Who's on our platform?
                </div>
              </div>
              <img
                className={showCaseStyles.companiesShowCase}
                src={companies}
              />
              <div style={{ margin: '0' }} className={showCaseStyles.andMore}>
                ...and many more!
              </div>
            </div>
          </div>
        </section>
        <div className={showCaseStyles.resizedWhosOn}>
          <div className={showCaseStyles.whosOnContainer}>
            <div className={showCaseStyles.whosOn}>Who's on our platform?</div>
          </div>
          <img className={showCaseStyles.companiesShowCase} src={companies} />

          <div className={showCaseStyles.tinyScreens}>
            <img src={companySmallOne} />
            <img src={companySmallTwo} />
            <img src={companySmallThree} />
          </div>

          <div style={{ margin: '0' }} className={showCaseStyles.andMore}>
            ...and many more!
          </div>
        </div>
      </div>
    )
  }
}

ShowCaseSection.defaultProps = {
  textContainerHeader: '',
  textContainerSubHeader: '',
  firstSectionParagraph: '',
  secondSectionParagraph: '',
  leftPicture: '',
}

export default ShowCaseSection
