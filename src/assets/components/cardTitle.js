import React from "react";
import CardTooltip from "./cardTooltip";

function onInput() {

	let oldComment = document.querySelector(".card__tooltip-text").textContent;

	document.querySelector(".comment").classList.toggle("active");
	document.getElementById("text-comment").value = oldComment;
};

function setComment(e) {
	e.preventDefault();

	let comment = document.getElementById("text-comment").value;

	document.getElementById("text-comment").value = "";
	document.querySelector(".card__tooltip-text").textContent = comment;
	document.querySelector(".comment").classList.toggle("active");
};

export default function CardTitle() {



	return (
		<div className="card__title">
			<h1 className="card__hello">
				Здравствуйте, <span className="card__user-name">
					 Человек №3596941
					<CardTooltip/>
				</span>
			</h1>
			<div className="card__btn">
				<button className="card__btn-tooltip" onClick={onInput}>Cменить статус</button>
				<form action="/" className="comment">
					<textarea cols={"cols=10"} id="text-comment" className="card__tooltip-input input" type="text"/>
					<button className="comment__button" onClick={setComment}>OK</button>
				</form>
			</div>
		</div>
	)
}
