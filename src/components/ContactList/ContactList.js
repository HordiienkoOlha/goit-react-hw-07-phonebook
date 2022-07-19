import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'components/Spinner/Spinner';
import { ListGroup } from 'react-bootstrap';
import {
  getContsctasFilter,
} from 'redux/contacts/contactsSelectors';import  {
  useFetchContactsQuery,

  } from 'redux/contacts/contactSlice';
import ContactItem from '../ContactsItem/ContactsItem';

const ContactList = () => {
  const { data, isFetching} = useFetchContactsQuery();

  const [filteredContacts, setFilterContacts] = useState([]);
  const contacts = data;

  const filter = useSelector(getContsctasFilter);
  // console.log(data)


  useEffect(() => {
    if(filter === ''){
      return
    } else {const newContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter) ||
        contact.number.includes(filter)
    );
    return setFilterContacts(newContacts);}
  }, [filter, contacts]);

  console.log(filteredContacts)
    return(
    <>
      <ListGroup>
        {isFetching && <Spinner/>}
      {contacts && contacts.map(({ id, name, number }) => (
        // {filteredContacts && filteredContacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
          />
        ))}
      </ListGroup>
    </>
  );
};

export default ContactList;
