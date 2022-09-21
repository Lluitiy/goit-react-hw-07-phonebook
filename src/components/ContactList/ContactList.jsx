import PropTypes from 'prop-types';

export const ContactList = ({ contactCard, onDeleteContact }) => {
	return (
		<ul>
			{contactCard.map(({ id, name, number }) => (
				<li key={id} id={id}>
					<p>
						{name} {number}
					</p>
					<button
						id={id}
						type="button"
						onClick={() => {
							onDeleteContact(id);
						}}
					>
						Remove
					</button>
				</li>
			))}
		</ul>
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
