import { Box } from 'Box/Box';
import { useState, useEffect } from 'react';
import { Container, FormTitle, ContactsTitle } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Report } from 'notiflix/build/notiflix-report-aio';

const contactArr = [
	{ id: '1', name: 'Pasha', number: '+3803132562' },
	{ id: '2', name: 'Lera', number: '+3805054422' },
];
export const AppHook = props => {
	const StorageContacts = localStorage.getItem('contacts');
	const parsedContacts = JSON.parse(StorageContacts);

	const [contacts, setContacts] = useState(() => {
		return parsedContacts.length > 0 ? parsedContacts : contactArr;
	});
	const [filter, setFilter] = useState('');

	useEffect(() => {
		console.log('полетели');
		localStorage.setItem('contacts', JSON.stringify(contacts));
	}, [contacts]);

	const findContact = name => {
		return contacts.find(contact => {
			return contact.name.toLowerCase() === name.toLowerCase();
		});
	};

	const formSubmitHandler = value => {
		if (findContact(value.name)) {
			Report.failure(
				'This contact already existst',
				'Please make sure you are adding the new contact',
				'Ckeck again'
			);
			return;
		}
		setContacts(prevContacts => [...prevContacts, value]);
	};

	const changeFilterHandler = e => {
		setFilter(e.currentTarget.value);
	};
	const removeContact = contactId => {
		setContacts(contacts.filter(contact => contact.id !== contactId));
	};
	const getContactsByName = () => {
		const normalizedContacts = filter.toLowerCase();
		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(normalizedContacts)
		);
	};

	const filteredContacts = getContactsByName();
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
					<ContactForm onSubmit={formSubmitHandler} />
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
					<Filter filter={filter} changeHandler={changeFilterHandler} />
					<ContactList
						contactCard={filteredContacts}
						onDeleteContact={removeContact}
					/>
				</Box>
			</Box>
		</Container>
	);
};
