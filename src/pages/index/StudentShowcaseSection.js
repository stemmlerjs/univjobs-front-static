import React from 'react' 
import leftside from '../../img/leftside.png'
import companies from '../../img/companies.png'
import studentShowCaseStyles from '../../styles/StudentShowCaseSectionStyles.module.css'

import companySmallOne from '../../img/companies-resized-1.png'
import companySmallTwo from '../../img/companies-resized-2.png'
import companySmallThree from '../../img/companies-resized-3.png'

const StudentShowCaseSection = () => {
  return (
    <div>
      <section className={studentShowCaseStyles.container}>
        <div className={studentShowCaseStyles.graphicsContainer}>
          <img style={{ maxHeight: '888px' }} src={leftside} />
        </div>
        <div className={studentShowCaseStyles.textContainer}>
          <div>
            <div className="heading-large">One profile, one resume</div>
          </div>

          <div className={studentShowCaseStyles.standardParagraph}>
            Making multiple cover letters and resumes, on top of your exams and
            projects, can be stressful and time consuming.
          </div>
          <div className={studentShowCaseStyles.standardParagraph}>
            The next time you apply to a job, you can relax. UnivJobs eliminates
            having to create multiple cover letters and resumes; that way, you
            can get back to your studies.
          </div>

          <div className={studentShowCaseStyles.regularWhosOn}>
            <div className={studentShowCaseStyles.whosOnContainer}>
              <h1 className={studentShowCaseStyles.whosOn}>
                Who's on our platform?
              </h1>
            </div>
            <img
              className={studentShowCaseStyles.companiesShowCase}
              src={companies}
            />
            <div
              style={{ margin: '0' }}
              className={studentShowCaseStyles.andMore}
            >
              ...and many more!
            </div>
          </div>
        </div>
      </section>
      <div className={studentShowCaseStyles.resizedWhosOn}>
        <div className={studentShowCaseStyles.whosOnContainer}>
          <h1 className={studentShowCaseStyles.whosOn}>
            Who's on our platform?
          </h1>
        </div>
        <img
          className={studentShowCaseStyles.companiesShowCase}
          src={companies}
        />

        <div className={studentShowCaseStyles.tinyScreens}>
          <img src={companySmallOne} />
          <img src={companySmallTwo} />
          <img src={companySmallThree} />
        </div>

        <div style={{ margin: '0' }} className={studentShowCaseStyles.andMore}>
          ...and many more!
        </div>
      </div>
    </div>
  )
}

export default StudentShowCaseSection;