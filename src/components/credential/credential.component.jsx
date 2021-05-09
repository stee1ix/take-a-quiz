import React from 'react';
import './credential.style.css';

const Credential = ({ name, type, onChange }) => {
	return (
		<div className="credential-main">
			<div className="form">
				<input
					required
					autoComplete="off"
					spellCheck="false"
					type={type}
					id={name}
					onChange={onChange}
				/>
				<label htmlFor={name} className="label-name">
					<span className="content-name">{name}</span>
				</label>
			</div>
		</div>
	);
};

export default Credential;
