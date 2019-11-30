import React from "react";
import "./components.css";

const ImageCard = props => {
	return (
		<figure>
			<img
				className="imageContent"
				src="http://www.suzannecollinsbooks.com/images/ballad_of_songbirds_and_snakes_cover_3d-x_small.jpg"
				alt="Book"
			/>
			<figcaption className="imageCaption">{props.text}</figcaption>
		</figure>
	);
};

export default ImageCard;
