import React from  'react'
import PropTypes from 'prop-types'
import "../styles/StudentPackHero.sass"
import packImage from '../../../img/pack/pack.svg'
import { Button } from '../../shared/button';
import SocialShareButtons from '../../shared/social/components/SocialShareButtons';
import { detectEnterPress } from '../../../utils/enterPress'

const StudentPackHero = ({ onSubmitEmail, onUpdateEmail, email, registered, url }) => {
  return (
    <div className="student-pack-hero" style={{ backgroundImage: `url(${packImage})`}}>
      <div className="content-container">
        <h1>Get the <b>student discount pack</b></h1>
        <h2>18 discounts & resources for students from companies that ❤️ students</h2>
        <div className="buttons">
          {!registered ? (
            <div>
              <input 
                onKeyUp={(e) => detectEnterPress(e) ? onSubmitEmail() : '' } 
                onChange={onUpdateEmail} 
                value={email} 
                placeholder="Your email" 
                type="text" 
              />
              <Button text="Get your pack" onClick={onSubmitEmail}/>
            </div>
          ) : (
            <div>
              <p>Scroll down to <b>see the deals!</b>👇 </p>
              <p>Please share if this was useful 😇</p>
              <p>And make sure to bookmark this page for more deals</p>
            </div>
          )}
          
          <SocialShareButtons 
            message={'I just got the free student discount pack from Univjobs!'} 
            url={url}
            facebookShareCount={88}
          />
        </div>
      </div>
    </div>
  )
}

export default StudentPackHero;

StudentPackHero.propTypes = {
  onSubmitEmail: PropTypes.func.isRequired,
  onUpdateEmail: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  registered: PropTypes.bool.isRequired
}