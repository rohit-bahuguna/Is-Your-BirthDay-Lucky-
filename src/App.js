import { useEffect, useState } from 'react';
import './App.css';

function App() {
	let [DOB, setDOB] = useState();
	const [luckyNumber, setLuckyNumber] = useState();
	let [check, setCheck] = useState();

	const isLucky = () => {
		let total = 0;
		if (DOB && luckyNumber !== undefined) {
			DOB.split('-').map(value => {
				return (total = parseInt(total) + parseInt(value));
			});
		}
		if (total % luckyNumber === 0) {
			setCheck(true);
		} else {
			setCheck(false);
		}
		setDOB('');
		setLuckyNumber('');
	};
	useEffect(() => {
		alert('we are not storing your data. feel free to use');
	}, []);
	return (
		<div className="App">
			<h1>Is Your BirthDay Lucky?</h1>

			<label>Date Of Birth:</label>
			<input
				value={DOB}
				type="date"
				onChange={e => setDOB(e.target.value)}
				onClick={() => setCheck()}
			/>
			<label>Lucky Number:</label>

			<input
				value={luckyNumber}
				type="number"
				onChange={e => {
					setLuckyNumber(e.target.value);
				}}
				onClick={() => setCheck()}
			/>

			{}
			{check
				? <img
						src="https://media.tenor.com/x8WJ3KYX9N8AAAAC/liz-medley-luck.gif"
						alt=""
						className="lucky"
					/>
				: ''}

			{check === false
				? <img src="https://media.tenor.com/FT3RGrt0xLcAAAAC/offo-facepalm.gif" />
				: ''}
			<button onClick={isLucky}>Check Number</button>
			<footer>
				<p>@ | 2022 | Rohit Bahuguna</p>
				<div className="horizontal" />
				<a href="https://twitter.com/rohitba96862397" target="_blank">
					<i className="footer_icon fab fa-2x fa-twitter" />
				</a>
				<a href="https://www.linkedin.com/in/rohit--bahuguna/" target="_blank">
					<i className="footer_icon fab fa-2x fa-linkedin" />
				</a>
				<a href="https://github.com/rohit-bahuguna/" target="_blank">
					<i className="footer_icon fab fa-2x fa-github" />
				</a>
				<a href="https://rohit-bahuguna.netlify.app/" target="_blank">
					<i class="fa fa-2x fa-home" aria-hidden="true" />
				</a>
			</footer>
		</div>
	);
}

export default App;
