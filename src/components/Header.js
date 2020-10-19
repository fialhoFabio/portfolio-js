import React from 'react';
import styles from './Header.module.css';

const headerItems = [
	{label: 'Home', path: '/'},
	{label: 'Projects', path: '/Projects'},
	{label: 'About', path: '/About'},
];

function Header() {
	const items = headerItems.map(data => {
		return (
			<div className="header-item" key={data.path}>
				{data.label}
			</div>
		);
	})

	return (
		<div className={styles.wrapper}>
			{items}
		</div>
	)
}

export default Header;
