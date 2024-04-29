import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

const Hero = () => {
	return (
		<div className="hero">
			<div cLassName="left-h">I
				<Header/>
		{/* the best ad part */}
				<div className="the-best-ad">
					<div></div>
					<span> the best fitness club in the town </span>
				</div>
			{/* Hero Heading part */}
				<div className="hero-text">
					<div>
						<span>Shape </span>
						<span> Your </span>
					</div>
					<div>
						<span>Ideal body </span>
					</div>
				</div>
			</div>
			<div cLassName="right-h">right side </div>
		</div>
	)
}

export default Hero
