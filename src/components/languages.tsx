import React from "react";

const Languages = () => {
	return (
		<div className="exp-section">
			<div className="subtitle">
				<p>Languages Known</p>
			</div>
			<div className="content">
				<ul className="langiages-list">
					<li>
						<div className="radialProgressBar progress-100">
							<div className="overlay"> </div>
						</div>
						<p>English</p>
					</li>
					<li>
						<div className="radialProgressBar progress-100">
							<div className="overlay"> </div>
						</div>
						<p>Hindi -<b> हिंदी </b></p>
					</li>
					<li>
						<div className="radialProgressBar progress-60">
							<div className="overlay"> </div>
						</div>
						<p>Marathi -<b> मराठी </b></p>
					</li>
					<li>
						<div className="radialProgressBar progress-90">
							<div className="overlay"> </div>
						</div>
						<p>Telugu -<b> తెలుగు </b></p>
					</li>
					<li>
						<div className="radialProgressBar progress-10">
							<div className="overlay"> </div>
						</div>
						<p>Tamil -<b> தமிழ் </b></p>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Languages;