import "./assets/scss/style.scss";
import React from "react";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
import "./assets/js/cities"

import CardTitle from "./assets/components/cardTitle";
import CardForm from "./assets/components/cardForm";


root.render(
	<div className="card">
		<div className="card__container">
			<CardTitle/>
			<CardForm/>
		</div>
	</div>
);