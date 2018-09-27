import React from 'react'
import PropTypes from 'prop-types'
import DirectoryResult from './DirectoryResult'
import "../styles/DirectoryResultsList.sass"
import { scrollToY } from "../../../utils/misc";

class DirectoryResultsList extends React.Component {
  constructor (props) {
    super(props);

    this.handleScrollCardToTop = this.handleScrollCardToTop.bind(this);
  }

  /**
   * handleScrollCardToTop
   * @desc Self-explainatory. Scrolls the card to the
   * top of the display.
   */

  handleScrollCardToTop (event) {
    scrollToY(event.target.offsetTop - 50, 500, "easeInOutQuint")
  }

  render () {
    const { companies } = this.props;
    return (
      <div className="directory-results-list">
        { companies.map((company, i) => (
          <DirectoryResult 
            onClick={this.handleScrollCardToTop}
            key={i} 
            index={i} {...company}/>
        ))}
      </div>
    )
  }
}

export default DirectoryResultsList;

DirectoryResultsList.propTypes = {
  companies: PropTypes.array
}