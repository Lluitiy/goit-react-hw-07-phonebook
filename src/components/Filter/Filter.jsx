import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contact/contactSlice';
import { FilterLabel, FilterInput } from './Filter.styled';
export const Filter = () => {
	const dispatch = useDispatch();
	const contactToFind = useSelector(state => state.filter);
	const filter = name => dispatch(filterContacts(name));
	return (
		<FilterLabel>
			Find contacts by Name
			<FilterInput
				type="text"
				value={contactToFind}
				onChange={e => filter(e.target.value)}
			/>
		</FilterLabel>
	);
};
