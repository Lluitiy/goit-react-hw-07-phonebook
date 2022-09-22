import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';
export const Filter = ({ filter, changeHandler }) => {
	return (
		<FilterLabel>
			Find contacts by Name
			<FilterInput type="text" value={filter} onChange={changeHandler} />
		</FilterLabel>
	);
};

Filter.propTypes = {
	filter: PropTypes.string.isRequired,
	changeHandler: PropTypes.func.isRequired,
};
