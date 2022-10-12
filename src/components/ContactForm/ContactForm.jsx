import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
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
import { addContacts, getContacts } from 'redux/operations';

const schema = yup.object().shape({
	name: yup
		.string()
		.min(1, 'min: 1 max: 20')
		.max(20, 'min: 1 max: 20')
		.required('Please fill the field'),
	phone: yup
		.string()
		.min(8, 'min: 8 max: 10')
		.max(10, 'min: 8 max: 10')
		.required('Please fill the field'),
});
export const ContactForm = () => {
	const addedContact = useSelector(state => state.contacts);
	const dispatch = useDispatch();
	if (addedContact.error) {
		alert('Ваш комп взломан переведите 10000$ на карту 7892 4552 1124 0228');
	}
	useEffect(() => {
		dispatch(getContacts());
	}, [dispatch]);

	const initialValues = {
		name: '',
		phone: '',
	};

	const findContact = name => {
		return addedContact.items.find(contact => {
			return contact.name.toLowerCase() === name.toLowerCase();
		});
	};

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
			name: values.name,
			phone: values.phone,
		};
		dispatch(addContacts(newContact));
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
					<ContactsFormInput type="tel" name="phone" />
				</ContactsFormLabel>
				<ErrorMsg name="phone" component="div" />
				<ContactsBtn type="submit" disabled={addedContact.isLoading}>
					{addedContact.isLoading ? 'Wait pls' : 'Add contact'}
				</ContactsBtn>
			</ContactsForm>
		</Formik>
	);
};
