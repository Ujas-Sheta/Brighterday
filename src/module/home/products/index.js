import React from 'react'
import './products.css';
import Product1 from '../../../assests/image/bag.png'
import Product2 from '../../../assests/image/line-grap.png'
import Product3 from '../../../assests/image/sfdr.png'
import Product4 from '../../../assests/image/chart.png'
import Product5 from '../../../assests/image/star-round.png'
import Product6 from '../../../assests/image/carbon.png'

export default function Products() {
    return (
        <div className='products-section'>
            <div className='products-text'>
                <h2>Our Products</h2>
            </div>

            <div className='products-main-grid'>

                <div className='products-main-grid-item'>
                    <div className='products-grid'>
                        <div className='products-image'>
                            <img src={Product1} alt='Product1'></img>
                        </div>
                        <div className='products-details'>
                            <h3>IQ for Investors</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                            </p>
                            <span>Learn more</span>
                        </div>
                    </div>


                    <div className='products-grid'>
                        <div className='products-image'>
                            <img src={Product2} alt='Product2'></img>
                        </div>
                        <div className='products-details'>
                            <h3>IQ for Assets</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                            </p>
                            <span>Learn more</span>
                        </div>
                    </div>


                    <div className='products-grid'>
                        <div className='products-image'>
                            <img src={Product3} alt='Product3'></img>
                        </div>
                        <div className='products-details'>
                            <h3>SFDR Module</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                            </p>
                            <span>Learn more</span>
                        </div>
                    </div>
                </div>

                <div className='products-main-grid-item'>
                    <div className='products-grid'>
                        <div className='products-image'>
                            <img src={Product4} alt='Product4'></img>
                        </div>
                        <div className='products-details'>
                            <h3>IQ for Managers</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                            </p>
                            <span>Learn more</span>
                        </div>
                    </div>


                    <div className='products-grid'>
                        <div className='products-image'>
                            <img src={Product5} alt='Product5'></img>
                        </div>
                        <div className='products-details'>
                            <h3>EU Taxonomy Module</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                            </p>
                            <span>Learn more</span>
                        </div>
                    </div>


                    <div className='products-grid'>
                        <div className='products-image'>
                            <img src={Product6} alt='Product6'></img>
                        </div>
                        <div className='products-details'>
                            <h3>EU Taxonomy Module</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                            </p>
                            <span>Learn more</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
