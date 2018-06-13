
import React from 'react'

import styles from '../styles/EmployerReviews.module.css'

import anomaly from '../img/reviews/an.png'
import paladin from '../img/reviews/paladin.png'
import teamStudy from '../img/reviews/team-study.png'
import ur from '../img/reviews/ur.png'

import product from '../img/reviews/product.png'
import product2 from '../img/reviews/product-2.png'

const Review = (props) => {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.quote}>{props.quote}</div>
      <div className={styles.author}>{props.author}</div>
      <div className={styles.title}>{props.title}</div>
      <img className={styles.image} src={props.image}/>
    </div>
  )
}

const ProductImage = (props) => {
  return (
    <div className={styles.productImageContainer}>
      <img className={styles.productImage} src={props.image}/>
    </div>
  )
}

const EmployerReviews = (props) => {
  return (
    <section>
      <Review
        quote={`"UnivJobs enabled our small team to 
reach, recruit and engage early 
candidates quickly and efficiently 
from multiple universities."`}
        author={'Jay V'}
        title={'Founder'}
        image={anomaly}
      />
      <ProductImage image={product}/>
      <Review
        quote={`"Univjobs really is a great platform.
It helped us speed up and simplify
our hiring process at Team Study."`}
        author={'Aditya Chugh'}
        title={'Founder'}
        image={teamStudy}
      />
      <ProductImage image={product2}/>
      <Review
        quote={`"Univjobs is a fantastic site!
I heartly recommend them."`}
        author={'JENNIFER MULHOLLAND'}
        title={'Founder'}
        image={ur}
      />
      <Review
        quote={`"What makes Univjobs so great is 
that all your job postings are all 
in one place, saving me time 
from having to check multiple 
job boards."`}
        author={'COURTNEY CLOUT'}
        title={'HR Generalist'}
        image={paladin}
      />
    </section>
  )
}

export default EmployerReviews;