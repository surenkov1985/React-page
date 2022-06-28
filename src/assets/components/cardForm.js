import React, {useState, useEffect} from "react";
import CardCity from "./cardCity";
import CardPass from "./cardPass";
import CardEmail from "./cardEmail";
import CardCheck from "./cardCheck";
import CardButton from "./cardButton";
import getDateString from "../js/dateString";

export default function CardForm() {
	// "https://jsonplaceholder.typicode.com/posts"
	// "https://webhook.site/6f656c2a-655d-465e-9dae-08595b266f2d"
	const url = "https://jsonplaceholder.typicode.com/posts";
	const [data, setData] = useState({
		"id": "",
		"city": "",
		"password": "",
		"repassword": "",
		"email": "",
		"date": ""
	});

	console.log(data)
	const [date, setDate] = useState("15 мая 2012 в 14:55:17");
	const [id, setId] = useState("№3596941");
	const [isBlur, setIsBlur] = useState(false);
	const [passBlur, setPassBlur] = useState(false);
	const [repassBlur, setRepassBlur] = useState(false);

	const [city, setCity] = useState("");
	const [email, setEmail ] = useState("");
	const [pass, setPass ] = useState("");
	const [repass, setRepass ] = useState("");

	const [emailErr, setEmailErr ] = useState("");
	const [cityErr, setCityErr] = useState("")
	const [passErr, setPassErr ] = useState("");
	const [repassErr, setRepassErr ] = useState("");

	const [color, setColor] = useState("#999999")
	const [borderColor, setBorderColor] = useState("#999999");
	const [passColor, setPassColor] = useState("#999999");
	const [repassColor, setRepassColor] = useState("#999999");

	const [disabled, setDisabled] = useState(true)

	const typeValues = {...data};

	useEffect(() => {
			if (city && pass && repass && email) {
				setDisabled(false)
			} else {
				setDisabled(true)
			}
		}
	);

	function setCityValues(val, id){

		if (!val.length || val === "selectCity") {
			setCityErr("Выберите город");
			setCity("");
			setColor("red");
			typeValues.city = "";
			setData(typeValues);
		} else {
			setCityErr("");
			setCity(val);
			setColor("#999999");
			typeValues[id] = val;
			setData(typeValues);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		setDate(getDateString());
		typeValues.date = date;
		typeValues.id = id;
		setData(typeValues);

		localStorage[id] = JSON.stringify(typeValues);

		const userData = JSON.parse(localStorage[id]);

			fetch(url, {
				method: "POST",
				mode: "cors",
				body: JSON.stringify({...typeValues})
			})
				.then(response => response.json())
					.then(data => console.log(data))
	}

	function handleName(email, id) {

		const regexp = /^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/;

		if (!email.length){

			setEmailErr("Введите E-mail");
			setBorderColor("red")
		} else if (!regexp.test(email)) {

			setEmailErr("Неверный E-mail");
			setEmail("");
			setBorderColor("red");
			typeValues[id] = "";
			setData(typeValues);
		} else if (regexp.test(email)){

			setEmailErr("");
			setEmail(email);
			setBorderColor("#999999");
			typeValues[id] = email;
			setData(typeValues);
		}
	}

	function handlePass(pass, id) {
		const regexpPass = /\w{5,}/;

		if (!pass.length){

			setPassErr("Укажите пароль");
			setPassColor("red")
		} else if (!regexpPass.test(pass)) {

			setPassErr("Используйте не менее 5 символов");
			setPass("");
			setPassColor("red");
			typeValues[id] = "";
			setData(typeValues);
		} else if (regexpPass.test(pass)){

			setPassErr("");
			setPass(pass);
			setPassColor("#999999");
			typeValues[id] = pass;
			setData(typeValues);
		}
	}

	function handleRepass(repass, id) {

		const regexpPass = /\w{5,}/;

		if (!repass.length){

			setRepassErr("Укажите пароль");
			setRepassColor("red")
		} else if (!regexpPass.test(repass)) {

			setRepassErr("Используйте не менее 5 символов");
			setRepass("");
			setRepassColor("red");
			typeValues[id] = "";
			setData(typeValues);
		} else if (pass !== repass){

			setRepassErr("Пароли не совпадают");
			setRepass("");
			setRepassColor("red")
		} else if (regexpPass.test(repass)){

			setRepassErr("");
			setRepass(repass);
			setRepassColor("#999999");
			typeValues[id] = repass;
			setData(typeValues);
		}
	}

	function setBlurState(val, id) {

		setIsBlur(true);
		handleName(val,id);
	}

	function setPassState(val, id) {

		setPassBlur(true);
		handlePass(val, id);
	}

	function setRepassState(val, id) {

		setRepassBlur(true);
		handleRepass(val, id);
	}

	return (
		<form className="card__form form" action="localStorage" method="post" target="_self" onSubmit={handleSubmit}>
			<CardCity text="Ваш город" onChangeVal={setCityValues} error={cityErr} color={color}/>
			<CardPass onChangePass={(e) => {if (passBlur) handlePass(e)}}
			          valPass={pass}
			          passErr={passErr}
			          passColor={passColor}
			          onChangeRepass={(e) => {if (repassBlur) handleRepass(e)}}
			          repassErr={repassErr}
			          repassColor={repassColor}
			          valRepass={repass}
			          onPassBlurChange={setPassState}
			          onRepassBlurChange={setRepassState}/>
			<CardEmail onChangeVal={(e) => {if (isBlur) handleName(e)}} val={email} err={emailErr} onBlurChange={setBlurState} color={borderColor}/>
			<CardCheck text="Я согласен" id="check" type="checkbox" place="принимать актуальную информацию на емейл"/>
			<CardButton buttonText="Изменить" place={"последние изменения " + date} disabled={disabled}/>
		</form>
	);
};
