import { Box } from 'Box/Box';
import { Component } from 'react';
import { Container, FormTitle, ContactsTitle } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { nanoid } from 'nanoid';

export class App extends Component {
	state = {
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
			Report.failure(
				'This contact already existst',
				'Please make sure you are adding the new contact',
				'Ckeck again'
			);
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
				<Box
					display="flex"
					justifyContent="space-evenly"
					flexWrap="wrap"
					pt={3}
					mt={3}
					ml="auto"
					mr="auto"
					width="850px"
					background="#e5f1ff"
					borderRadius="4px"
					boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
				>
					<Box
						display="flex"
						flexDirection="column"
						p={2}
						gap="10"
						width="320px"
						height="300px"
						justifyContent="start"
						alignItems="center"
						background="#131a35"
						border={p => p.theme.borders.normal}
						borderRadius="4px"
						boxShadow="rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;"
					>
						<FormTitle>Phonebook</FormTitle>
						<ContactForm onSubmit={this.formSubmitHandler} />
					</Box>
					<Box
						display="flex"
						flexDirection="column"
						gap="10"
						width="400px"
						min-height="100vh"
						justifyContent="center"
						alignItems="center"
					>
						<ContactsTitle>Contacts</ContactsTitle>
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
