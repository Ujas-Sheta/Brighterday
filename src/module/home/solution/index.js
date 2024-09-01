import React from 'react'
import './solution.css'
import GraphImage from '../../../assests/image/new-graph.png';

export default function Solution() {
    return (
        <div className='solution-section'>
            {/* <div className='container'> */}
                <div className='solution-grid'>
                    <div className='solution-item-1'>
                        <h3>Our Solution</h3>
                        <h4>MJ Hudson's digital ESG solutions offers a range of products designed to address the
                            growing and varying needs of investors, asset managers as well as portfolio companies
                            and assets themselves, delivered in an innovative and ready-to-use digital platform.
                        </h4>
                        <p>
                        Utilising a pre-built workflow to identify key themes, and streamline the collection and
                        aggregation of data, our ESG platform leverages MJ Hudson's proven ESG assessment methodology
                        and insight framework. This enables private market clients to simplify, standardise and
                        streamline ESG assessments, empowering them to identify relevant ESG themes,
                        highlight value creation opportunities and risks and importantly take action and track progress
                        over time.
                    
                        </p>
                    </div>
                    <div className='solution-item-2'>
                        <img src={GraphImage} alt='GraphImage'></img>
                        <p>
                        Our Regulatory models help clients understand and adhere to relevant regulatory requirements.
                        Our ET Taxonomy tool calculates an alignment percentage at company and fund level, indicating
                        the proportion of revenue that is derived from Taxonomy-aligned activities. We also offer a
                        digital SFDR solution that collects data related to the EUs Sustainable Finance Disclosure
                        Regulation (SFDR) and produces required disclosures. Our Carbon Foot printing tool based on the
                        Greenhouse Gas Protocol helps businesses to calculate their Scope 1, 2 and 3
                        carbon footprint and provides guidance and market place partners to support them on their road
                        to carbon neutrality.
                    </p>
                    <span>
                        Our digital ESG solutions are best suited to clients who are looking to streamline the
                        assessment, monitoring and reporting
                        of ESG themes with real-time access to our ESG & Sustainability experts when needed.
                    </span>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}
