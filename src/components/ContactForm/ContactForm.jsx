import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
	ContactsForm,
	ContactsFormInput,
	ContactsFormLabel,
	ContactsBtn,
	ErrorMsg,
} from './ContactForm.styled';
import * as yup from 'yup';

const schema = yup.object().shape({
	name: yup
		.string()
		.min(1, 'min: 1 max: 20')
		.max(20, 'min: 1 max: 20')
		.required('Please fill the field'),
	number: yup
		.string()
		.min(8, 'min: 8 max: 10')
		.max(10, 'min: 8 max: 10')
		.required('Please fill the field'),
});
export const ContactForm = props => {
	const initialValues = {
		name: '',
		number: '',
	};

	const handleFormSubmit = (values, { resetForm }) => {
		console.log(props);
		props.onSubmit(values);
		console.log(values);
		resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleFormSubmit}
			validationSchema={schema}
		>
			<ContactsForm>
				<ContactsFormLabel>
					Name
					<ContactsFormInput type="text" name="name" />
				</ContactsFormLabel>
				<ErrorMsg name="name" component="div" />
				<ContactsFormLabel>
					Number
					<ContactsFormInput type="tel" name="number" />
				</ContactsFormLabel>
				<ErrorMsg name="number" component="div" />
				<ContactsBtn type="submit">Add contact</ContactsBtn>
			</ContactsForm>
		</Formik>
	);
};

ContactForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
