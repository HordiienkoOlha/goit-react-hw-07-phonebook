import PropTypes from 'prop-types';
import { ListGroup, Button, Stack } from 'react-bootstrap';

import { useDeleteContactMutation } from 'redux/contacts/contactSlice';

const ContactItem = ({ name, number, id }) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <ListGroup.Item>
      <Stack direction="horizontal" gap={2}>
        <p>
          {name} : {number}
        </p>
        <Button
          variant="outline-info"
          type="button"
          className="ms-auto"
          onClick={() => deleteContact(id)}
        >
          Delete
        </Button>
      </Stack>
    </ListGroup.Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
