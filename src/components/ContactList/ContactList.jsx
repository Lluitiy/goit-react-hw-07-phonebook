import { Spinner } from 'components/Spinner/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import {
	ContactListList,
	ContactListItem,
	ContactListBtn,
	ContactListName,
	ContactListNumber,
	Message,
} from './ContactList.styled';

export const ContactList = () => {
	const { contacts, filter } = useSelector(state => state);

	const dispatch = useDispatch();

	const deleteContact = id => {
		dispatch(deleteContacts(id));
	};

	const filteredContacts = filter
		? contacts.items.filter(contact =>
				contact.name.toLowerCase().includes(filter.toLowerCase())
		  )
		: contacts.items;
	return (
		<>
			{contacts.isLoading ? (
				<Spinner />
			) : (
				<ContactListList>
					{filteredContacts?.length ? (
						filteredContacts.map(({ id, name, phone }) => (
							<ContactListItem key={id} id={id}>
								<ContactListName>{name}</ContactListName>
								<ContactListNumber>{phone}</ContactListNumber>
								<ContactListBtn
									id={id}
									type="button"
									onClick={() => deleteContact(id)}
									disabled={contacts.isLoading}
								>
									Remove
								</ContactListBtn>
							</ContactListItem>
						))
					) : (
						<Message> You dont have contacts yet</Message>
					)}
				</ContactListList>
			)}
		</>
	);
};
