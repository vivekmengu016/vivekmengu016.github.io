import React from "react";
import programmer from "./bean-bag-developer";


function dateDiff(joiningDate) {

	let startingDate = joiningDate.start;
	let endingDate = joiningDate.end || new Date();

	let startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
	if (!endingDate) {
		endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
	}
	let endDate = new Date(endingDate);
	if (startDate > endDate) {
		const swap = startDate;
		startDate = endDate;
		endDate = swap;
	}
	const startYear = startDate.getFullYear();
	const february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
	const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	let yearDiff = endDate.getFullYear() - startYear;
	let monthDiff = endDate.getMonth() - startDate.getMonth();
	if (monthDiff < 0) {
		yearDiff--;
		monthDiff += 12;
	}
	let dayDiff = endDate.getDate() - startDate.getDate();
	if (dayDiff < 0) {
		if (monthDiff > 0) {
			monthDiff--;
		} else {
			yearDiff--;
			monthDiff = 11;
		}
		dayDiff += daysInMonth[startDate.getMonth()];
	}

	let experience = yearDiff ? yearDiff + ' yrs ' : '';
	experience += monthDiff ? monthDiff + ' mon ' : '';
	return experience;
}

const Experience = () => {
	const joiningDate = {
		contentstack: {
			start: '02/01/2019',
		},
		onedigilta: {
			start: '06/01/2018',
			end: '11/01/2018',
		},
		gopbn: {
			start: '05/01/2016',
			end: '05/01/2018',
		},
		wisdmlabs: {
			start: '03/01/2014',
			end: '03/01/2016',
		},
	}
	return (
		<div className="exp-section">
			<div className="subtitle">
				<p>Employment History</p>
			</div>
			<div className="content">
				<div className="skill-card">
					<div className="card">
						<h3>Contentstack</h3>
						<p>Full Time {dateDiff(joiningDate['contentstack'])} </p>
						<p> Virar, Maharashtra, India </p>
						<div className="timeline">
							<div className="line">
								<h4>Senior Software Engineer ll</h4>
								<p>Mar 2022 - Present </p>
							</div>
							<div className="line">
								<h4>Application Engineer</h4>
								<p>Feb 2019 - Mar 2022 · 3 yrs </p>
							</div>
						</div>
					</div>
					<div className="card">
						<h3>OneDigiLTA </h3>
						<p>Full Time {dateDiff(joiningDate['onedigilta'])} </p>
						<p> Virar, Maharashtra, India </p>
						<div className="timeline">
							<div className="line">
								<h4>Frontend Engineer</h4>
								<p>Jun 2018 - Nov 2018 · 5 mon </p>
							</div>
						</div>
					</div>

				</div>
				<div className="skill-card">
					<div className="card">
						<h3>GoPBN </h3>
						<p>Full Time {dateDiff(joiningDate['gopbn'])} </p>
						<p> Virar, Maharashtra, India </p>
						<div className="timeline">
							<div className="line">
								<h4> Frontend Developer Lead </h4>
								<p> May 2016 - May 2018 · 2 yrs </p>
							</div>
						</div>
					</div>
					<div className="card">
						<h3>Wisdmlabs</h3>
						<p>Full Time {dateDiff(joiningDate['wisdmlabs'])} </p>
						<p> Thane, Maharashtra, India </p>
						<div className="timeline">
							<div className="line">
								<h4>Frontend Developer</h4>
								<p>Mar 2015 - Apr 2016 · 1 yr </p>
							</div>
							<div className="line">
								<h4>Frontend Developer Intern</h4>
								<p>Mar 2014 - Apr 2015 · 1 yrs </p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mini-coder">
				<div className="bubble">
					Hey! <br/> Nice to meet you here... If you have any questions, feel free to drop me a message on <br/> LinkedIn.
				</div>
				<img src={programmer} alt="Bean Bag Programmer" />
			</div>
		</div>
	)
}

export default Experience;