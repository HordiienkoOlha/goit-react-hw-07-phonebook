import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

import Spinner from 'components/Spinner/Spinner';
import { getFilter, getContsctsFilter } from 'redux/contacts/contactsSelectors';
import { useFetchContactsQuery } from 'redux/contacts/contactSlice';
import ContactItem from '../ContactsItem/ContactsItem';

const ContactList = () => {
  const { data, isFetching } = useFetchContactsQuery();

  const filter = useSelector(getFilter);
  const contacts = getContsctsFilter(filter, data);

  return (
    <>
      <ListGroup>
        {isFetching && <Spinner />}
        {contacts &&
          contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
      </ListGroup>
    </>
  );
};

export default ContactList;
