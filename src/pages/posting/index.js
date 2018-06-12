import React from 'react'
import Link from 'gatsby-link'

import ShortHero from '../../components/ShortHero'
import CTA from '../../components/CallToAction'

import job from '../../styles/JobPosting.module.css'

import haltech from '../../img/haltech.png'
import briefcase from '../../img/briefcase.svg'
import money from '../../img/money.svg'
import place from '../../img/place.svg'





const JobHeader = (props) => {
    return(
        <section className={job.jobHeaderContainer}>
            <div className={job.centeredJobContainer}>
                <div className={job.companyBrandImageContainer}>
                  <img className={job.companyBrandImage} src={haltech}/>
                </div>
                <div className={job.iconsInfo}>
                    <h3 className={job.jobTitle}>Haltech</h3>
                  </div>
                
                <div className={job.jobHeaderIconsContainer}>
                  
                    <div className={job.iconsInfo}>
                        <img className={job.icons}src={place}/>
                    </div>
                    <div className={job.iconsInfo}>
                        <p className={job.iconText}>Toronto, ON</p>
                    </div>
                    <div className={job.iconsInfo}>
                            <img className={job.icons}src={briefcase}/>
                    </div>
                    <div className={job.iconsInfo}>
                        <p className={job.iconText}>Entry-level</p>
                    </div>
                    <div className={job.iconsInfo}>
                        <img className={job.icons}src={money}/>
                    </div>
                    <div className={job.iconsInfo}>
                        <p className={job.iconText}>$15/h</p>
                    </div>
                    <div className={job.iconsInfo}>
                        <button className={job.applyHeaderButton}>APPLY NOW</button>
                </div>
                           
                 </div>   
                 
            </div>


      </section>

    )

}


const JobDetails = (props) => {
    return(
        <section className={job.jobInfoContainer}>
            <div className={job.jobInfo}>
                <h2 className={job.jobInfoTitle}>Benefits</h2>
                    <p className={job.jobInfoText}>
DePuy Synthes, a member of the Johnson & Johnson Family of Companies, is recruiting for a Customer Quality (CQ) Investigation Engineer Co-op located in West Chester, PA to support the CQ Investigation Engineering Group.
The DePuy Synthes Companies of Johnson & Johnson is the largest, most innovative and comprehensive orthopedic and neurological business in the world. DePuy Synthes offers an unparalleled breadth and depth of products, services and programs in the areas of joint reconstruction, trauma, spine, sports medicine, neurological, craniomaxillofacial, power tools and biomaterials. Our implants and instruments are used by orthopedic surgeons to treat patients with conditions resulting from traumatic injuries, degenerative diseases, deformities, and sports related injuries. Our environment is entrepreneurial, learning-driven, and is as challenging as it is rewarding. 

                    </p>

                <h2 className={job.jobInfoTitle}>Responsibilitites</h2>
                    <p className={job.jobInfoText}>
DePuy Synthes, a member of the Johnson & Johnson Family of Companies, is recruiting for a Customer Quality (CQ) Investigation Engineer Co-op located in West Chester, PA to support the CQ Investigation Engineering Group.
The DePuy Synthes Companies of Johnson & Johnson is the largest, most innovative and comprehensive orthopedic and neurological business in the world. DePuy Synthes offers an unparalleled breadth and depth of products, services and programs in the areas of joint reconstruction, trauma, spine, sports medicine, neurological, craniomaxillofacial, power tools and biomaterials. Our implants and instruments are used by orthopedic surgeons to treat patients with conditions resulting from traumatic injuries, degenerative diseases, deformities, and sports related injuries. Our environment is entrepreneurial, learning-driven, and is as challenging as it is rewarding. 

                    </p>

                 <h2 className={job.jobInfoTitle}>Qualifications</h2>
                    <p className={job.jobInfoText}>
DePuy Synthes, a member of the Johnson & Johnson Family of Companies, is recruiting for a Customer Quality (CQ) Investigation Engineer Co-op located in West Chester, PA to support the CQ Investigation Engineering Group.
The DePuy Synthes Companies of Johnson & Johnson is the largest, most innovative and comprehensive orthopedic and neurological business in the world. DePuy Synthes offers an unparalleled breadth and depth of products, services and programs in the areas of joint reconstruction, trauma, spine, sports medicine, neurological, craniomaxillofacial, power tools and biomaterials. Our implants and instruments are used by orthopedic surgeons to treat patients with conditions resulting from traumatic injuries, degenerative diseases, deformities, and sports related injuries. Our environment is entrepreneurial, learning-driven, and is as challenging as it is rewarding. 

                    </p>

                 <h2 className={job.jobInfoTitle}>About</h2>
                    <p className={job.jobInfoText}>
                    When you join Johnson & Johnson, your next move could mean the next innovation.
In the next ten years, healthcare is predicted to radically transform more than any other industry, with old models being disrupted in favor of new methods to make the world a healthier place for everyone. Johnson & Johnson has long excelled in times of transformation. Its history of firsts—from Band-Aids to feminine care to treatments for HIV, cancer, Ebola, and, most recently, Alzheimer’s — demonstrates how J&J combines passion, science and technology to create game-changing innovations.
Those epic innovations were discovered, developed and distributed by people just like you. And when you apply your talent to Johnson & Johnson's shared purpose, there’s no end to the lasting impact you can make, together. And that changes everything.


                    </p>
            </div>


      </section>

    )

}



export default () => 
  <div>
      <ShortHero
         heroTitle= 'Job Test'
         heroSubTitle= ''
         image=""
      />
      <JobHeader/>
      <JobDetails/>
      <CTA
        header="Want to apply to this job?"
        subHeader="Signup now to get started."
        buttonText="Apply now"
        alt={true}
      />
     
  </div>
