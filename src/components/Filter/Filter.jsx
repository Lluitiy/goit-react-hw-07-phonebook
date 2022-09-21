import PropTypes from 'prop-types';

export const Filter = ({ filter, changeHandler }) => {
	return (
		<label>
			<h3>Find contacts by Name</h3>
			<input type="text" value={filter} onChange={changeHandler} />
		</label>
	);
};

Filter.propTypes = {
	filter: PropTypes.string.isRequired,
	changeHandler: PropTypes.func.isRequired,
};
