import styled from '@emotion/styled';

export const FilterLabel = styled.label`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	color: #131a35;
	font-size: 18px;
	font-weight: 500;
	transition: 250ms color ease-in-out;
	:hover,
	:focus {
		color: #eb9532;
	}
`;

export const FilterInput = styled.input`
	padding: 8px;
	border-radius: 10px;
	border: 2px solid transparent;
	background-color: #131a35;
	color: #e5f1ff;
	transition: 250ms border-color ease-in-out;
	outline: none;
	:hover,
	:focus {
		border: 2px solid #eb9532;
	}
`;
