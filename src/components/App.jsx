import { Box } from '../Box/Box';
import { Component } from 'react';
import { Container } from './App.styled';
import { Form } from './Form/Form';

export class App extends Component {
	state = {
		contacts: [],
		filter: '',
	};
	formSubmitHandler = data => {
		console.log('qweqwe', data);
		console.log(this.state.contacts);
		this.setState({
			contacts: [data],
		});
	};
	render() {
		return (
			<Container>
				<Box display="flex" justifyContent="center" flexWrap="wrap" pt={5}>
					<Box>
						<h1>Phonebook</h1>
						<Form onSubmit={this.formSubmitHandler} />
						<h2>Contacts</h2>
						{this.state.contacts && (
							<p>
								{this.state.name} {this.state.number}
							</p>
						)}
					</Box>
				</Box>
			</Container>
		);
	}
}
