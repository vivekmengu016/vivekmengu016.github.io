import React from "react";
import blog1 from "../static/blog1";

const Blog = () => {
	return (
		<div className="exp-section">
			<div className="subtitle">
				<p>Blogs</p>
			</div>
			<div className="content">
				<div className="blog-cards">
					<a href="https://dev.to/vivekmengu016/enhancing-user-experience-the-importance-of-pick-up-where-you-left-off-ldp" target="_blank" className="item">
            <img src={blog1} alt="Enhancing User Experience: The Importance of Pick Up Where You Left Off" />
						<h4>Enhancing User Experience: The Importance of "Pick Up Where You Left Off" </h4>
						<p>13 Jan, 2024</p>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Blog;