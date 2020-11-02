import React, {useEffect} from 'react';

export const Overlay = () => {
	useEffect(() => {
		onEscClick();
	}, []);

	const onEscClick = () => {
		const checkEsc = (ev) => {
			if (ev.keyCode === 27) {
				const overlay = document.querySelector('.overlay');
				overlay.classList.remove('open');
			}
		};
		window.addEventListener('keydown', checkEsc);
		return () => {
			window.removeEventListener('keydown', checkEsc);
		};
	}

	return (
		<div className="overlay"></div>
	);
}

