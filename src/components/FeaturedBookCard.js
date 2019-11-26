import React from "react";
import "./components.css";
import ImageCard from "./ImageCard";

const FeaturedBookCard = props => {
	return (
		<div className="featuredBookCard">
			<h1>{props.bookName}</h1>
			<a href="/">
				<p className="bookTitle">{props.bookTitle}</p>
			</a>
			<p>{props.text}</p>
			<ImageCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
		</div>
	);
};

export default FeaturedBookCard;
