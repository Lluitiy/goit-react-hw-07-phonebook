import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
