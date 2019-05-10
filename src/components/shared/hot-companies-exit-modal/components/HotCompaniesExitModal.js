import React from 'react'
import PropTypes from 'prop-types'
import "../styles/HotCompaniesExitModal.sass"
import 'rodal/lib/rodal.css';
import hotCompanies from '../../../../img/exit-modals/hot-companies.svg'

let ExitModal = ({ children }) => (
  <div>{children}</div>
)
if (typeof document !== `undefined`) {
  ExitModal = require('react-exit-modal').ExitModal
}

const HotCompaniesExitModal = () => (
  <ExitModal
    className="hot-companies-exit-modal"
    height={300}
    width={450}
    minimumSecondsOnPage={1.5}

  >
    <div className="hot-companies-exit-modal--body">
      <p className="title">Want to get matched with 🔥 
      companies looking to hire students 
      and recent-grads? 
      </p>
      <div className="companies">
        <div className="image-container">
          <img src={hotCompanies}/>
        </div>
        <div className="more">+ 100’s more</div>
      </div>

      <a href="https://app.univjobs.ca/register">Get matched with hot jobs</a>
      <div className="free-for-students">Free for students and recent-grads. Always.</div>
    </div>
  </ExitModal>
)

export default HotCompaniesExitModal;