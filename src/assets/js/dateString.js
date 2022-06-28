

export default function getDateString() {

	let getDate = "";
	const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

	let month = months[new Date().getMonth()];
	let day = new Date().getDate();
	let year = new Date().getFullYear();
	let time = new Date();
	let newTime = time.toLocaleTimeString();

	return getDate = day + " " + month + " " + year + " в " + newTime;
}