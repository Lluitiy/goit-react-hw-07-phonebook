import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	padding-left: ${props => props.theme.spacing(8)};
	padding-right: ${props => props.theme.spacing(8)};
`;

export const FormTitle = styled.h1`
	font-weight: 24px;
	color: #e5f1ff;
`;

export const ContactsTitle = styled.h2`
	color: #131a35;
	margin: 10px 0px;
`;
