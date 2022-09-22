import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const ContactsForm = styled(Form)`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 15px;
`;

export const ContactsFormInput = styled(Field)`
	padding: 8px;
	border-radius: 10px;
	border: 2px solid transparent;
	background-color: #e5f1ff;
	color: #131a35;
	transition: 250ms border-color ease-in-out;
	outline: none;

	:hover,
	:focus {
		border: 2px solid #eb9532;
	}
`;

export const ErrorMsg = styled(ErrorMessage)`
	color: #e5f1ff;
	font-weight: 500;
	font-size: 18px;
`;

export const ContactsFormLabel = styled.label`
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #e5f1ff;
	font-size: 16px;
	font-weight: 500;
	transition: 250ms color ease-in-out;
	:hover,
	:focus {
		color: #eb9532;
	}
`;

export const ContactsBtn = styled.button`
	padding: 10px;
	color: #131a35;
	background-color: #e5f1ff;
	outline: none;
	border-radius: 8px;
	border: none;
	transition: background-color 250ms ease-in-out;
	cursor: pointer;

	:hover,
	:focus {
		background-color: #eb9532;
	}
`;
