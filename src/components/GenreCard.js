import React from "react";
import "./components.css";

const GenreCard = props => {
	return (
		<div className="genreCard">
			<h1>{props.title}</h1>
			<a href="/" rel="noreferrer noopener">
				<h3 className="bookTitle">{props.bookTitle}</h3>
			</a>
			<p>{props.text}</p>
		</div>
	);
};

export default GenreCard;
