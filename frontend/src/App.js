import React, {useState, useEffect} from 'react';
import {Overlay} from './components/Overlay';
import {Card} from './components/Card';
import './App.css';

function App () {
	const [cardName, setCardName] = useState('');
	const [type, setType] = useState('');
	const [cardTypeList, setCardList] = useState([]);

	useEffect(() => {
		getCards();
	}, []);

	const getCards = () => {
		const fakeData = {
			data: [
				{id: 1, title: 'title_1', type: 'type 1', position: 1, image: 'https://visme.co/blog/wp-content/uploads/2020/09/Header-1200-5-500x280.png'},
				{id: 2, title: 'title_2', type: 'type 2', position: 2, image: 'https://i.pinimg.com/originals/57/9e/d2/579ed2cedf82391c07ec8ca6d4812693.jpg'},
				{id: 4, title: 'title_2', type: 'type 2', position: 2, image: 'https://eskipaper.com/images/high-resolution-photos-1.jpg'},
				{id: 5, title: 'title_2', type: 'type 2', position: 2, image: 'https://visme.co/blog/wp-content/uploads/2020/07/Header-1200-500x280.png'},
				{id: 6, title: 'title_2', type: 'type 2', position: 2, image: 'https://www.larotonde.ca/wordpress2/wp-content/uploads/2020/10/pr%C3%A9carit%C3%A9%C3%A9tudiante-500x280.png'}
			]
		};
		setCardList(fakeData.data);
	}

	const submitType = () => {
		const id = Math.floor(Math.random() * 1000) + 7;
		if (cardName && type) {
			setCardList([...cardTypeList, {id: id, title: cardName, type: type, position: 3, image: 'https://www.larotonde.ca/wordpress2/wp-content/uploads/2020/10/uni-covid-%C3%A9tudessup-500x280.png'}]);
		}
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
