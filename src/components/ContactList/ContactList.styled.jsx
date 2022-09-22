import styled from '@emotion/styled';

export const ContactListList = styled.ul`
	list-style-type: none;
	padding: 0px 10px;
	width: 100%;
`;

export const ContactListItem = styled.li`
	width: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ContactListName = styled.p`
	width: 35%;
	font-size: 16px;
	font-weight: 500;
	color: #131a35;
`;

export const ContactListNumber = styled.p`
	width: 35%;
	font-size: 16px;
	font-weight: 500;
	color: #131a35;
`;

export const ContactListBtn = styled.button`
	width: 30%;
	padding: 10px;
	color: #e5f1ff;
	background-color: #131a35;
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
