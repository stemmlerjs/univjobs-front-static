import React from 'react'
import PropTypes from 'prop-types'
import "../styles/Pack.sass"

const Pack = ({ items, registered }) => {
  items = !registered ? items.slice(0, 6) : items;
  return (
    <div className="pack">
      <h3>What's in the pack?</h3>
      <hr/>

      <div className="pack-container">
        { !registered ? <div className="hidden-transparency"></div> : '' }
        { items.map((item) => (
          <a href={registered ? item.link : ''} target="_blank" className="pack-item">
            <div className="logo-container"><img src={item.logo}/></div>
            <div className="description">{item.companyDescription}</div>
            <div className="offering-container"><span className="offering">Discount</span> <span className="offering-description">- {item.offering}</span></div>
          </a>
        ))}
        <div style={{ height: '0px', width: '300px' }}></div>
        <div style={{ height: '0px', width: '300px' }}></div>
      </div>
      
    </div>
  )
}

export default Pack;