import React, {useState, useEffect} from 'react';
import {Overlay} from './components/Overlay';
import {Card} from './components/Card';
import Axios from "axios";
import './App.css';

function App () {
	const [cardName, setCardName] = useState('');
	const [type, setType] = useState('');
	const [cardTypeList, setCardList] = useState([]);

	useEffect(() => {
		getCards();
	}, []);

	const getCards = () => {
		console.log();
		Axios.get(`${global.config.api.url}/list`).then(res => {
			console.log(res);
			setCardList(res.data);
		});
	}

	const submitType = () => {
		if (!cardName || !type) {
			return;
		}
		Axios.post(`${global.config.api.url}/create`, {
			title: cardName,
			type:  type,
		}).then(res => {
			setCardList([...cardTypeList, res.data]);
		})
	}

	return (
		<div>
			<Overlay/>
			<div className="addItem">
				<form>
					<input type="text" placeholder="title" name="cardName"
						   onChange={e => setCardName(e.target.value)}/>
					<input type="text" placeholder="type" name="cardType"
						   onChange={e => setType(e.target.value)}/>

					<button type="button" onClick={submitType} className="addItemBtn">Add Card</button>
				</form>
			</div>
			<div className="cats">
				{cardTypeList.map((val) => {
					return <Card key={val.id} card={val}/>
				})}
			</div>
		</div>
	);
}

export default App;
