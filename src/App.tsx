import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Navbar,
  Table,
} from "react-bootstrap";
import "./App.css";

function App() {
  const [userData, setUserData] = React.useState<any>([])
  const userList = [
    {
      id: 1,
      first_name: "Mark",
      last_name: "Otto",
      username: "mark@otto",
      role: "admin",
      pass: "Om**2020",
    },
    {
      id: 3,
      first_name: "Sam",
      last_name: "Sotto",
      username: "sam@sotto",
      role: "manager",
      pass: "Ss**2020",
    },
    {
      id: 2,
      first_name: "Greg",
      last_name: "Ratto",
      username: "greg@ratto",
      role: "els",
      pass: "Gr**2020",
    },

    {
      id: 4,
      first_name: "Drax",
      last_name: "Dantes",
      username: "drax@dantes",
      role: "first_els",
      pass: "Dd**2020",
    },
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [role, setRole] = useState('');
  const [pass, setPass] = useState('');
  

  useEffect(() => {
    setUserData(userList)
  }, [])

  function handleUpdateUser(todo: any) {
    handleShow()

  }
  //POST
  const addUser =(e: any) => {
    e.preventDefault()
    const userName = fName.toLowerCase() + "@"+ lName.toLowerCase()
    const result =  {
      id: Math.random(),
      first_name: fName,
      last_name: lName,
      username: userName,
      role: role,
      pass: pass,

    }
    setUserData([...userData, result])


   console.log(userName)
   
  } 
  
  console.log(userData)
  console.log(userList)


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
            {userData.map((user: any, indx: any) => (
              <tr keky={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>{user.pass}</td>

                <td>
                  <Button className="bg-light border-light" onClick={handleUpdateUser}>
                    <img
                      src="https://img.icons8.com/stickers/25/pencil.png"
                      alt="update"
                    />
                  </Button>
                </td>
                <td>
                  <Button className="bg-light border-light">
                    <img
                      src="https://img.icons8.com/stickers/25/delete-sign.png"
                      alt="delete"
                    />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <Button onClick={handleShow2} className="bg-light border-light m-2">
            <img
              src="https://img.icons8.com/stickers/25/plus-math.png"
              alt="add user"
            ></img>
          </Button>{" "}
          Add an user
        </Table>
      </Container>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" value={userList[0].first_name }/>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRole">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" placeholder="Enter role" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} type="submit">Submit</Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addUser}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" onChange={(e) => setFName(e.currentTarget.value)}/>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" onChange={(e) => setLName(e.currentTarget.value)}/>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" onChange={(e) => setFName(e.currentTarget.value)}/>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicRole">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" placeholder="Enter role" onChange={(e) => setRole(e.currentTarget.value)}/>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPass(e.currentTarget.value)}/>
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={handleClose2}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose2} type="submit">Submit</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
