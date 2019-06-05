import './login.scss';
import React from 'react';

export const Login = () => {
	const submit = () => {
		console.log('submit');
	};
	return (
		<div className="login">
			<div className="login__body">
				<h2>Login page</h2>{' '}
				<button onclick={submit} type="submit">
					Submit
				</button>
			</div>
		</div>
	);
};
