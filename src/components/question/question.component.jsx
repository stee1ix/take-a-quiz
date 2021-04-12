import React from "react";
import "./question.style.css";

const Question = () => {
	return (
		<div className="question-main">
			<h1 className="question">
				{"Who is the best footballer in the world?"}
			</h1>
			<div className="options">
				<div className="option">{"1. Ronlado"}</div>
				<div className="option">{"2. Messi"}</div>
				<div className="option">{"3. Kroos"}</div>
				<div className="option">{"4. Bale"}</div>
			</div>
		</div>
	);
};

export default Question;
