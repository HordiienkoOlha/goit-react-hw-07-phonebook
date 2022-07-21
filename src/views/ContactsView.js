import { Container } from 'react-bootstrap';
import ContactForm from 'components/ContactsForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const ContactsView = () => {
  return (
    <>
      <Container className="p-3">
        <h1 className="header">Phonebook</h1>
        <ContactForm />
      </Container>
      <Container className="p-3">
        <h2 className="header">Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
};

export default ContactsView;
