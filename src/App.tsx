import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Navbar,
  Row,
  Table,
} from "react-bootstrap";
import "./App.css";

function App() {
  const [userData, setUserData] = React.useState<any>([]);
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

  const [id, setId] = useState(0);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [role, setRole] = useState("");
  const [pass, setPass] = useState("");
  const [validated, setValidated] = useState(false);

  //GET
  useEffect(() => {
    setUserData(userList);
  }, []);
  
  //POST
  const addUser = (event: any) => {
    event.preventDefault()
    const userName = fName.toLowerCase() + "@" + lName.toLowerCase();
    const result = {
      id: Math.random(),
      first_name: fName,
      last_name: lName,
      username: userName,
      role: role,
      pass: pass,
    };
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setUserData([...userData, result]);
    setValidated(true);
    
    handleClose2();
    setFName("");
    setLName("");
    setRole("");
    setPass("");
  };
  
  //UPDATE
    function handleUpdateUser(user: any) {
      handleShow();

      setId(user.id)
      setFName(user.first_name)
      setLName(user.last_name)
      setRole(user.role)
      setPass(user.pass)
    }
    const updateUser = (event: any) => {
      event.preventDefault()
      const userName = fName.toLowerCase() + "@" + lName.toLowerCase();
      const result = {
        id: id,
        first_name: fName,
        last_name: lName,
        username: userName,
        role: role,
        pass: pass,
      };
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      const index = userData.findIndex((user: any) => user.id === id)
      const newTab = [...userData]
      newTab[index] = result
      
      setUserData(newTab);
      setValidated(true);
      
      handleClose();
      setId(0)
      setFName("");
      setLName("");
      setRole("");
      setPass("");
    };





  // const addUser2 = (e: any) => {
  //   const userName = fName.toLowerCase() + "@" + lName.toLowerCase();
  //   const result = {
  //     id: Math.random(),
  //     first_name: fName,
  //     last_name: lName,
  //     username: userName,
  //     role: role,
  //     pass: pass,
  //   };
  //   const form = e.currentTarget;
  //   if (form.checkValidity() === false) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //   } else {
  //     setValidated(true);
  //   }
  //   if (validated) {
  //     setUserData([...userData, result]);

  //     handleClose2();
  //     setFName("");
  //     setLName("");
  //     setRole("");
  //     setPass("");
  //     console.log(userName);
  //   }
  // };


  console.log(userData);
  console.log(userList);

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
      <Container fluid className="px-0" style={{ height: "15vh" }}></Container>
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
              <>
              <tr key={user.name}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>{user.pass}</td>
                <td><Button
                    className="bg-light border-light"
                    onClick={(e) => handleUpdateUser(user) }
                    >
                    <img
                      src="https://img.icons8.com/stickers/25/pencil.png"
                      alt="update"
                      />
                  </Button></td>
                <td><Button className="bg-light border-light">
                    <img
                      src="https://img.icons8.com/stickers/25/delete-sign.png"
                      alt="delete"
                    /></Button>
                </td>
              </tr>
            </>
            ))}
          </tbody>
          <Button onClick={handleShow2} className="bg-light border-light m-2">
            <img
              src="https://img.icons8.com/stickers/25/plus-math.png"
              alt="add user"
              ></img>
          </Button>
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
        <Form  onSubmit={updateUser}>
            <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter first name"
                value={fName}
                onChange={(e) => setFName(e.currentTarget.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter last name"
                value={lName}

                onChange={(e) => setLName(e.currentTarget.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Control.Feedback type="invalid">
                    Please provide your Last name.
                  </Form.Control.Feedback>
            </Form.Group>

            <Form.Select
              required
              aria-label="Default select example"
              value={role}
              onChange={(e) => setRole(e.currentTarget.value)}
            >
              <option value="">Rôle</option>
              <option value="admin">Admin</option>
              <option value="first_els">Emloyé principal</option>
              <option value="els">E.L.S</option>
            </Form.Select>
            </Row>
            <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={pass}

                onChange={(e) => setPass(e.currentTarget.value)}
              />
            </Form.Group>

             
            </Row>
        
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} type="submit">
            Submit
          </Button>
        </Modal.Footer> */}
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
        <Form  onSubmit={addUser}>
            <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter first name"
                onChange={(e) => setFName(e.currentTarget.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter last name"
                onChange={(e) => setLName(e.currentTarget.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Control.Feedback type="invalid">
                    Please provide your Last name.
                  </Form.Control.Feedback>
            </Form.Group>

            <Form.Select
              required
              aria-label="Default select example"
              onChange={(e) => setRole(e.currentTarget.value)}
            >
              <option value="">Rôle</option>
              <option value="admin">Admin</option>
              <option value="first_els">Emloyé principal</option>
              <option value="els">E.L.S</option>
            </Form.Select>
            </Row>
            <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                onChange={(e) => setPass(e.currentTarget.value)}
              />
            </Form.Group>

             
            </Row>
        
            <Button type="submit">Submit</Button>
          </Form>
         
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default App;
