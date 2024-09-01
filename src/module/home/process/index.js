import React from 'react'
import './process.css'

export default function Process() {
  return (
    <div className='process-section'>
        <div className='process-text'>
            <span>How we work</span>
            <h2>Our process</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className='process-grid'>

            <div className='process-item'>
                <div className='process-icon'>
                    1
                </div>
                <h3>Engage</h3>
                <p>Speak to our ESG Advisors to discuss your ESG approach and needs</p>
            </div>

            <div className='process-item'>
                <div className='process-icon'>
                    2
                </div>
                <h3>Design</h3>
                <p>Choose from one of our pre-built ESG frameworks or design your own</p>
            </div>

            <div className='process-item'>
                <div className='process-icon'>
                    3
                </div>
                <h3>Collect</h3>
                <p>Initiate data requests through the ESG IQ platform and track responses</p>
            </div>

            <div className='process-item'>
                <div className='process-icon'>
                    4
                </div>
                <h3>Analyse</h3>
                <p>Identify material themes using MJ Hudson ESG Methodology and benchmarks</p>
            </div>

            <div className='process-item'>
                <div className='process-icon'>
                    5
                </div>
                <h3>Report</h3>
                <p>Aggregate data and view findings via our click-through dashboard or share PDF reports</p>
            </div>

            <div className='process-item'>
                <div className='process-icon'>
                    6
                </div>
                <h3>Improve</h3>
                <p>Set projects to improve ESG performance, set targets and track progress</p>
            </div>

            <div className='process-item'>
                <div className='process-icon'>
                    7
                </div>
                <h3>Advisory</h3>
                <p>Optional Advisory support for futher assessment., recommendations and engagement</p>
            </div>

        </div>
    </div>
  )
}
