import React from 'react'
import PropTypes from 'prop-types'
import '../styles/StudentTestimonials.sass'

import student1 from '../../../img/students/student1.png';
import student2 from '../../../img/students/student2.png';
import student3 from '../../../img/students/student3.png';

const studentsList = [
  { 
    name: "Abigal N.", 
    eduLevel: "Recent grad", 
    school: "Sheridan College", 
    location: "Mississauga",
    quote: `“UnivJobs helped me find an entry-level role in my field. 
    I love how it still notified me of new opportunities even after I graduated.”`,
    picture: student1
  },
  {
    name: "Nick D.", 
    eduLevel: "Recent grad", 
    school: "Brock University", 
    location: "St. Catharines",
    quote: `“UnivJobs makes finding an entry-level software role easy. 
    Not only that, it showed me jobs meant for students and recent grads.”`,
    picture: student2
  },
  {
    name: "Jessie L.", 
    eduLevel: "Second year", 
    school: "Sheridan College", 
    location: "Oakville",
    quote: `“This is a great tool for student job search. 
      I got called in for an interview the next day.”`,
    picture: student3
  }
]

/**
 * @class Student
 * @desc A student testimonial.
 */

const Student = ({ name, eduLevel, school, location, quote, picture }) => (
  <div className="student-card">
    <div className="top">
      <div className="image-container">
        <img src={picture}></img>
      </div>
      <div className="details-container">
        <div className="name">{name}</div>
        <div className="education-level">{eduLevel}</div>
        <div className="school">{school}</div>
        <div className="location">{location}</div>
      </div>
    </div>
    <div className="quote">
      {quote}
    </div>
  </div>
)

Student.propTypes = {
  name: PropTypes.string,
  eduLevel: PropTypes.string,
  school: PropTypes.string,
  location: PropTypes.string,
  quote: PropTypes.string,
  picture: PropTypes.string
}

/**
 * @class StudentTestimonials
 * @desc Shows all student testimonials.
 */

const StudentTestimonials = () => (
  <section className="student-testimonials-container">
    <div className="student-testimonials">
      {studentsList.map((student, i) => (
        <Student 
          key={i}
          {...student}
        />
      ))}
    </div>
  </section>
)

export default StudentTestimonials;