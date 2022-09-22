import styled from '@emotion/styled';
import {
	space,
	layout,
	color,
	flexbox,
	grid,
	border,
	shadow,
	background,
} from 'styled-system';

export const Box = styled('div')(
	{
		boxSizing: 'border-box',
	},
	space,
	layout,
	color,
	flexbox,
	grid,
	border,
	shadow,
	background
);
