import React from 'react'
import PropTypes from 'prop-types'
import withSection from './withSection'
import '../../styles/company/ListSection.sass'

const ListItem = ({ text }) => (
  <div className="list-section-item">
    <i className="fa fa-circle" />
    {text}
  </div>
)

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
}

class ListSection extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { list } = this.props

    return (
      <div className="list-section">
        {list.map((item, i) => (
          <ListItem key={i} text={item} />
        ))}
      </div>
    )
  }
}

ListSection.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  size: PropTypes.string.isRequired,
}

export default withSection(ListSection)
