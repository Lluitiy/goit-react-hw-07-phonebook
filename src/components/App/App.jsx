import { Box } from 'Box/Box';
import { Container, FormTitle, ContactsTitle } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

export const App = () => {
	return (
		<Container>
			<Box
				display="flex"
				justifyContent="space-evenly"
				flexWrap="wrap"
				pt={4}
				pb={4}
				mt={3}
				ml="auto"
				mr="auto"
				width="850px"
				background="#e5f1ff"
				borderRadius="4px"
				boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
			>
				<Box
					display="flex"
					flexDirection="column"
					p={2}
					gap="10"
					width="320px"
					height="300px"
					justifyContent="start"
					alignItems="center"
					background="#131a35"
					border={p => p.theme.borders.normal}
					borderRadius="4px"
					boxShadow="rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;"
				>
					<FormTitle>Phonebook</FormTitle>
					<ContactForm />
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					gap="10"
					width="400px"
					min-height="100vh"
					justifyContent="center"
					alignItems="center"
				>
					<ContactsTitle>Contacts</ContactsTitle>
					<Filter />
					<ContactList />
				</Box>
			</Box>
		</Container>
	);
};
