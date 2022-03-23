import { useEffect, useState, useContext } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import UsersList from "./UsersList";
import { GlobalContext } from "../context/store/GlobalState";
const SubmitForm = () => {
  const {addUser}  = useContext(GlobalContext)

  const [country, setCountry] = useState([]);
  const [registration, setRegistration] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    address: "",
  });

  const handleInput = (fieldName, value) => {
    setRegistration({
      ...registration,
      [fieldName]: value,
    });
  };

  const handleSubmit =()=> {
    // setRegistration({
    //   first_name: "",
    //   last_name: "",
    //   email: "",
    //   country: "",
    //   address: "",
    // })
    const newUser ={
      id:2,
      name:"ali"
    }
    addUser(newUser)

  
  }
  const fetchCountry = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCountry(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <Container>
      <Row className="form">
        <Col xs={12} md={6}>
          <h1>User Submit Form</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={registration.first_name}
                onChange={(e) => {
                  handleInput("first_name", e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your lastname"
                  value={registration.last_name}
                  onChange={(e) => {
                    handleInput("last_name", e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={registration.email}
                onChange={(e) => {
                  handleInput("email", e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              value={registration.country}
              onChange={(e) => {
                handleInput("country", e.target.value);
              }}
            >
              <Form.Label>Country</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose your country...</option>
                {country.map((c, idx) => (
                  <option key={idx}>{c.name.common}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="mt-4"
              style={{ width: "100%" }}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default SubmitForm;
