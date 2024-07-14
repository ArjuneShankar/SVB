import React from 'react'
import r1 from '../Assets/reviews/r1.png'
import r2 from '../Assets/reviews/r2.png'
import r3 from '../Assets/reviews/r3.png'
import r4 from '../Assets/reviews/r4.png'
import r5 from '../Assets/reviews/r5.png'
import r6 from '../Assets/reviews/r6.png'

const TestimonialDT = () => {
    return (
        <div className="testnimonial-container">
        <div className="row">
          <div className="box">
            <img src={r1} alt=" 1" />
          </div>
          <div className="box">
            <img src={r2} alt=" 2" />
          </div>
          <div className="box">
            <img src={r3} alt=" 3" />
          </div>
        </div>
        <div className="row">
          <div className="box">
            <img src={r4} alt=" 4" />
          </div>
          <div className="box">
            <img src={r5}alt=" 5" />
          </div>
          <div className="box">
            <img src={r6} alt=" 6" />
          </div>
        </div>
      </div>
      )
}

export default TestimonialDT