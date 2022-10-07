import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contact/contactSlice';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Formik } from 'formik';
import {
	ContactsForm,
	ContactsFormInput,
	ContactsFormLabel,
	ContactsBtn,
	ErrorMsg,
} from './ContactForm.styled';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

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
export const ContactForm = () => {
	const addedContact = useSelector(state => state.contacts.contacts);
	const initialValues = {
		name: '',
		number: '',
	};
	const dispatch = useDispatch();
	const findContact = name => {
		return addedContact.find(contact => {
			return contact.name.toLowerCase() === name.toLowerCase();
		});
	};
	console.log('addedContact', addedContact);

	const handleFormSubmit = (values, { resetForm }) => {
		if (findContact(values.name)) {
			Report.failure(
				'This contact already existst',
				'Please make sure you are adding the new contact',
				'Ckeck again'
			);
			resetForm();
			return;
		}
		const newContact = {
			id: nanoid(),
			name: values.name,
			number: values.number,
		};
		dispatch(addContact(newContact));
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
