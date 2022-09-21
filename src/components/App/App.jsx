import { Box } from 'Box/Box';
import { Component } from 'react';
import { Container } from './App.styled';
import { Form } from '../Form/Form';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
	state = {
		// / Объект с определённой структурой   optionalObjectWithShape: PropTypes.shape({
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		],
		filter: '',
	};

	formSubmitHandler = ({ name, number }) => {
		const newContact = {
			id: nanoid(),
			name,
			number,
		};
		if (this.findContact(name)) {
			alert(`Contact: ${name} already exists`);
			return;
		}
		this.setState(({ contacts }) => ({
			contacts: [newContact, ...contacts],
		}));
	};

	changeFilterHandler = e => {
		this.setState({ filter: e.currentTarget.value });
	};
	removeContact = contactId => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter(contact => contact.id !== contactId),
		}));
	};
	getContactsByName = () => {
		const { filter, contacts } = this.state;
		const normalizedContacts = filter.toLowerCase();
		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(normalizedContacts)
		);
	};

	findContact = name => {
		return this.state.contacts.find(contact => {
			return contact.name.toLowerCase() === name.toLowerCase();
		});
	};

	render() {
		const { filter } = this.state;

		const filteredContacts = this.getContactsByName();

		return (
			<Container>
				<Box display="flex" justifyContent="center" flexWrap="wrap" pt={5}>
					<Box>
						<h1>Phonebook</h1>
						<Form onSubmit={this.formSubmitHandler} />
						<h2>Contacts</h2>
						<Filter filter={filter} changeHandler={this.changeFilterHandler} />
						<ContactList
							contactCard={filteredContacts}
							onDeleteContact={this.removeContact}
						/>
					</Box>
				</Box>
			</Container>
		);
	}
}
