import React, {useEffect} from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';


export const Card = props => {
	useEffect(() => {
		sort();
	}, []);

	const sort = () => {
		$('.cats').sortable({
			update: () => {
				let arr = [];
				$('.cats-item').each(function (index, item) {
					let id = item.getAttribute('data-target');
					arr.push(id);
				});
				console.log(arr);
			}
		});
	}

	const showModal = event => {
		const element = event.currentTarget.querySelector('img');
		const overlay = document.querySelector('.overlay');
		const image = element.getAttribute('src');

		overlay.style.backgroundImage = 'url(' + image + ')';
		overlay.classList.add('open');
	}

	const onLoadDone = event => {
		let element = event.currentTarget;
		element = element.closest('.cats-item').querySelector('.loader');

		element.remove();
	}

	return (
		<div className="cats-item" data-target={props.card.id} onClick={showModal}>
			<h2>Title:{props.card.title} | Type: {props.card.type}</h2>
			<img src={props.card.image} alt={props.card.title} onLoad={onLoadDone}
			/>
			<div className="loader"></div>
		</div>
	)
}

