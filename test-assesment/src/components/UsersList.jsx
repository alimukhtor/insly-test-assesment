import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { GlobalContext } from "../context/store/GlobalState";
import { Link } from "react-router-dom";
import { useContext } from "react";
const UsersList =()=> {
  const {users, removeUser} = useContext(GlobalContext)
  console.log("Users", users);

    return (
        <Container>
        <Row className="form">
          <Col xs={12} md={6}>
            <h1>User:</h1>
            {
              users.map(user => (
                <Form key={user.id}>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                   value={user.first_name}
                   onChange={(e) => user('first_name', e.target.value)}
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
                  onClick={()=> removeUser()}
                >
                  Delete
                </Button>
              </Form>
              ))
            }
           
          </Col>
        </Row>
      </Container>
    )
}
export default UsersList