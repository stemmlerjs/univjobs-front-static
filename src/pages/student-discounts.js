import React from 'react'
import config from '../config'
import { SeoLayout, PageType } from '../components/seo'
import StudentPackHero from '../components/student-pack/components/StudentPackHero';
import { StudentPackMessaging, Pack, PackCTA, EmployerContributionCTA } from '../components/student-pack';
import Items from '../components/student-pack/PackItemsContstant'
import banner from '../img/pack/banner.png'
import addToMailchimp from "gatsby-plugin-mailchimp";
import { validateEmail } from '../utils/validateEmail'

class StudentDiscounts extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      registered: false
    }
  }

  componentDidMount () {
    if (this.wasPreviouslyRegistered()) {
      this.setState({ ...this.state, registered: true })
    }
  }

  getSegmentType () {
    if (typeof window !== "undefined" && window.location.search.indexOf('ref=app') !== -1) {
      return 'existing-users'
    } else {
      return 'bundle-page-subscribers'
    }
  }

  saveToLocalStorage (email) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem('student-pack', JSON.stringify({ email }))
    }
  }

  wasPreviouslyRegistered () {
    if (typeof window !== "undefined") {
      try {
        let email = JSON.parse(window.localStorage.getItem('student-pack'));
        if (validateEmail(email.email)) {
          return true;
        }
      } catch (err) {
        console.log(err);
      }

      return false;
    }
  }

  async onSubmitEmail () {
    const email = this.state.email;

    if (!validateEmail(email)) {
      alert("Whoops, that email doesn't look quite right. Want to try again in order to get your pack?")
      return;
    }

    try {
      const segmentType = this.getSegmentType();
      const result = await addToMailchimp(email, {
        FNAME: '',
        LNAME: '',
        TYPE: segmentType
      });
      console.log(result);
      this.saveToLocalStorage(email)
      this.setState({ ...this.state, registered: true });
      alert("Thanks! Scroll down to see all the 🔥 discounts 😀")
    } catch (err) {
      console.error(err);
    }
  }

  onUpdateFormField (fieldName, newValue) {
    this.setState({ ...this.state, [fieldName]: newValue })
  }
  
  scrollToTop () {
    if (typeof window !== "undefined") {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }

  render () {
    const { registered } = this.state;
    const url = typeof window !== "undefined" ? window.location.href : '';

    return (
      <div className="student-discounts">
        <SeoLayout
          requiredProps={{
            title: 'Student Discount Pack | All the best deals for students',
            description: 'List of the best deals and discounts for students and recent-grads. Updated daily.',
            url: `${config.url}student-discounts`,
            image: banner
          }}
          type={PageType.REGULAR}
          pageProps={{}}
          />
          <StudentPackHero 
            registered={registered}
            email={this.state.email}
            onSubmitEmail={this.onSubmitEmail.bind(this)}
            onUpdateEmail={(e) => this.onUpdateFormField('email', e.target.value)}
            url={url}
          />
          <StudentPackMessaging/>
          <Pack registered={registered} items={Items}/>
          <PackCTA 
            onClick={this.scrollToTop.bind(this)} 
            registered={registered}
            url={url}
          />
          
          <EmployerContributionCTA/>
      </div>
    )
  }
}

export default StudentDiscounts;