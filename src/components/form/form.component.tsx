import React, { useState } from "react";

import * as ME from "../../interface";

import "./form.style.scss";

interface IProps {
	setData: React.Dispatch<React.SetStateAction<ME.IData[]>>;
	toggleForm: () => void;
}

const initialState = { name: "", age: 0, gender: "M" };

const EntryForm: React.FC<IProps> = ({ setData, toggleForm }) => {
	const [inputValue, setInputValue] = useState(initialState);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
		setInputValue({
			...inputValue,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement> | any) => {
		e.preventDefault();

		setData((data) => data.concat({ id: data.length + 1, ...inputValue }));

		setInputValue(initialState);
		setTimeout(() => {
			e.target.reset(), toggleForm();
		}, 2e2);
	};

	return (
		<div className="form-container disabled">
			<form onSubmit={onSubmitHandler}>
				<div className="box">
					<input
						type="text"
						name="name"
						id="name"
						autoFocus
						value={inputValue.name}
						onChange={onChangeHandler}
						required
					/>
					<label htmlFor="name">Name</label>
				</div>
				<div className="box">
					<input
						type="number"
						name="age"
						id="age"
						min={1}
						value={inputValue.age}
						onChange={onChangeHandler}
						required
					/>
					<label htmlFor="age">Age</label>
					<div className="select-container">
						<select name="gender" id="gender" onChange={onChangeHandler}>
							<option value="M">M</option>
							<option value="F">F</option>
						</select>
					</div>
				</div>
				<div className="end">
					<span>New Entry...</span>
					<button type="submit">Add</button>
				</div>
			</form>
		</div>
	);
};

export default EntryForm;
