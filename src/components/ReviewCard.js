import React from "react";
import "./components.css";

const ReviewCard = props => {
	return (
		<>
			<p>{props.review}</p>
			<p>{props.author}</p>
		</>
	);
};

export default ReviewCard;
