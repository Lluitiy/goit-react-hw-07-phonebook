export const LoginForm = () => {
	const handleAddContact = e => {
		e.preventDefault();
		// const { name, number } = e.target.elements;
		// // const nameValue = name.value;
		// // const numberValue = number.value;
	};

	return (
		<form onSubmit={handleAddContact}>
			<label htmlFor="name">
				Name
				<input
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
					value={this.state.name}
					onChange={this.handleChange}
					id={this.nameId}
				/>
			</label>
			<label htmlFor="number">
				Number
				<input
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					value={this.state.number}
					onChange={this.handleChange}
					id={this.numberId}
				/>
			</label>
			<button type="submit">Add contact</button>
		</form>
	);
};
