import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contact/contactSlice';
import {
	ContactListList,
	ContactListItem,
	ContactListBtn,
	ContactListName,
	ContactListNumber,
	Message,
} from './ContactList.styled';

export const ContactList = () => {
	const { contacts, filter } = useSelector(state => state.contacts);
	const dispatch = useDispatch();
	const deleteContact = id => {
		console.log('newContacts', id);
		dispatch(removeContact(id));
	};
	const filteredContacts = filter
		? contacts.filter(contact =>
				contact.name.toLowerCase().includes(filter.toLowerCase())
		  )
		: contacts;
	return (
		<ContactListList>
			{filteredContacts?.length ? (
				filteredContacts.map(({ id, name, number }) => (
					<ContactListItem key={id} id={id}>
						<ContactListName>{name}</ContactListName>
						<ContactListNumber>{number}</ContactListNumber>
						<ContactListBtn
							id={id}
							type="button"
							onClick={() => deleteContact(id)}
						>
							Remove
						</ContactListBtn>
					</ContactListItem>
				))
			) : (
				<Message> You dont have contacts yet</Message>
			)}
		</ContactListList>
	);
};
