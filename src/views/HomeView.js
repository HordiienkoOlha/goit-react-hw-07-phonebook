
import {Button, Card, Form} from 'react-bootstrap';

const HomeView = () => {

  return (
    <>

    <Card className="justify-content-center p-3 mx-auto mt-5" style={{ width: '25rem'}}>
          <Form className="mb-3 p-2">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="passsword"
                autoFocus
              />

            </Form.Group>
            <Form.Group>
            <Button variant="primary" 
            //   onClick={handleClose}
              >
            Confirm
          </Button> 
            </Form.Group>
          </Form>
          </Card>
    </>
  );
};

export default HomeView;
