import PropTypes from 'prop-types';
import {
	ContactListList,
	ContactListItem,
	ContactListBtn,
	ContactListName,
	ContactListNumber,
} from './ContactList.styled';

export const ContactList = ({ contactCard, onDeleteContact }) => {
	return (
		<ContactListList>
			{contactCard.map(({ id, name, number }) => (
				<ContactListItem key={id} id={id}>
					<ContactListName>{name}</ContactListName>{' '}
					<ContactListNumber>{number}</ContactListNumber>
					<ContactListBtn
						id={id}
						type="button"
						onClick={() => {
							onDeleteContact(id);
						}}
					>
						Remove
					</ContactListBtn>
				</ContactListItem>
			))}
		</ContactListList>
	);
};

ContactList.propTypes = {
	contactCard: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		})
	).isRequired,
	onDeleteContact: PropTypes.func.isRequired,
};
