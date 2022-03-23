import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const UsersList =()=> {
    return (
        <Container>
        <Row className="form">
          <Col xs={12} md={6}>
            <h1>User:</h1>
            <Form>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                 
                />
              </Form.Group>
              <Form.Group>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your lastname"
                   
                  />
                </Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                 
                />
              </Form.Group>
              <Form.Group
                as={Col}
               
              >
                <Form.Label>Country</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose your country...</option>
                </Form.Control>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="mt-4"
                style={{ width: "100%" }}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                type="submit"
                className="mt-4"
                style={{ width: "100%" }}
              >
                Delete
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
}
export default UsersList