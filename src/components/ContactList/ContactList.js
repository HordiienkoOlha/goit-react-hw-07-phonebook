import Spinner from 'components/Spinner/Spinner';
import { ListGroup } from 'react-bootstrap';
import  {
  useFetchContactsQuery,
  //  useFilterContactQuery
  } from 'redux/contacts/contactSlice';
import ContactItem from '../ContactsItem/ContactsItem';

const ContactList = () => {
  const { data, isFetching} = useFetchContactsQuery();
  // const {data: name} = useFilterContactQuery;
  // const [filterContacts, setFilterContacts] = useState([]);
  const contacts = data;

  // const filter = useSelector(getContsctasFilter);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const filteredContacts = contacts.filter(
  //     contact =>
  //       contact.name.toLowerCase().includes(filter) ||
  //       contact.number.includes(filter)
  //   );
  //   return setFilterContacts(filteredContacts);
  // }, [filter, contacts]);
    return(
    <>
      <ListGroup>
        {isFetching && <Spinner/>}
      {contacts && contacts.map(({ id, name, number }) => (
        // {filterContacts.map(({ id, name, number }) => (
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
