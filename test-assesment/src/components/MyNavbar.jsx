import { Nav, FormControl, Form, Button, Navbar } from "react-bootstrap";
const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"><strong>Insly</strong></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/form">Home</Nav.Link>
        <Nav.Link href="/userList">Users</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
};
export default MyNavbar;
