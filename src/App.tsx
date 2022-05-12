import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Navbar,
  Table,
} from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container fluid className="App px-0">
      <Container fluid className="px-0">
        <Navbar bg="light">
          <Container fluid>
            <Navbar.Brand href="#home">Inception app</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <Container fluid className="px-0">
        <InputGroup className="mb-3 px-5">
          <InputGroup.Text id="basic-addon1"></InputGroup.Text>
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Container>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Rôle</th>
              <th>Pass</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Admin</td>
              <td>Om**2020</td>
              <td><Button className="bg-light border-light"><img src="https://img.icons8.com/stickers/25/pencil.png" alt="icon"/></Button></td>
              <td><Button className="bg-light border-light"><img src="https://img.icons8.com/stickers/25/delete-sign.png" alt="delete" /></Button></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Admin</td>
              <td>Om**2020</td>
              <td><Button className="bg-light border-light"><img src="https://img.icons8.com/stickers/25/pencil.png" alt="icon"/></Button></td>
              <td><Button className="bg-light border-light"><img src="https://img.icons8.com/stickers/25/delete-sign.png" alt="delete" /></Button></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Admin</td>
              <td>Om**2020</td>
              <td><Button className="bg-light border-light"><img src="https://img.icons8.com/stickers/25/pencil.png" alt="icon"/></Button></td>
              <td><Button className="bg-light border-light"><img src="https://img.icons8.com/stickers/25/delete-sign.png" alt="delete" /></Button></td>
            </tr>
           
          </tbody>
        </Table>
      </Container>

      <h3>Hello</h3>
    </Container>
  );
}

export default App;
