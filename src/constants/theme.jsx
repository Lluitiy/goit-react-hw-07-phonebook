export const theme = Object.freeze({
	color: {
		white: '#ffffff',
		black: '#000000',
		main: '#2d2c3e',
		secondary: '#808080',
		border: '#dddddd',
		background: '#f1f1f1',
		red: '#00a400',
		green: '#fa383e',
		blue: 'rgb(0,0,255)',
	},

	spacing: value => `${value}px`,

	fonts: {
		body: 'system-ui, sans-serif',
		heading: 'system-ui, sans-serif',
	},

	fontSizes: {
		xs: 12,
		s: 14,
		m: 16,
		l: 32,
		xl: 64,
	},

	fontWeights: {
		normal: 400,
		bold: 700,
	},

	borders: {
		none: 'none',
		normal: '1px solid',
	},

	radii: {
		none: '0',
		normal: '4px',
		round: '50%',
	},
});
