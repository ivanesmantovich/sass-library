import React from 'react';

interface Props {
	title: string;
	body: string;
}

const Card = (props: Props) => {
	return (
		<div className="card">
			<div className="card-title">{props.title}</div>
			<div className="card-body">{props.body}</div>
		</div>
	);
};

export default Card;
