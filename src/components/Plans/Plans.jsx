import React from 'react';
import './Plans.css';
import { plansData } from '../data/plansData';
import whiteTick from '../assets/whiteTick.png';

function Plans(props) {
    return (
        <div className='plans-container'>
            <div className="blur plans-blur-1"></div> 
            <div className="blur plans-blur-2"></div> 
            <div className='programs-header'>
                <span className='stroke-text'>Ready TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>

            {/* Plan Data */}
            <div className='plans'>
                {plansData.map((plan, i) => (
                    <div className='plan' key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className='features'>
                            {plan.features.map((feature, j) => (
                                <div className='feature' key={j}>
                                    <img src={whiteTick} alt=""/>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span  className='see'>see more benefits</span>
                        </div>
                        <button className='btn'>Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Plans;

