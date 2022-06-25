import React, {useState} from "react";
import CardTooltip from "./cardTooltip";

export default function CardTitle() {

	let tooltipText = "Прежде чем действовать, надо понять";
	const [textarea, setTextarea] = useState(tooltipText);

	const handleChange = (e) => setTextarea(e.target.value);

	function handleSubmit(e) {
		e.preventDefault();

		document.querySelector(".comment").classList.toggle("active");
	};


	return (
		<div className="card__title">
			<h1 className="card__hello">
				Здравствуйте, <span className="card__user-name">
					 Человек №3596941
					<CardTooltip text={textarea}/>
				</span>
			</h1>
			<div className="card__btn">
				<button className="card__btn-tooltip">Cменить статус</button>
				<form action="/" className="comment" onSubmit={handleSubmit}>
					<textarea cols={"cols=10"} id="text-comment" className="card__tooltip-input input" type="text" value={textarea} onChange={handleChange}/>
					<button className="comment__button">OK</button>
				</form>
			</div>
		</div>
	);
};
