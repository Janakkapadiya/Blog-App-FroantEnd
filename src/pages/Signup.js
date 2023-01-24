import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";
import image1 from "../images/image1.jpg";
import Base from "../components/Base";
import { useState } from "react";
const Signup = () => {
  const [data,setData] = useState({
    name:'',
    email:'',
    password:'',
    about:''
  })

  // const [error,setError] = userState(
  //   {
       
  //   }
  // )

 const handleChange = (event,prop) => {
   setData({...data,[prop]:event.target.value})
 }
 
 const change = () => {
   setData({
    name:'',
    email:'',
    password:'',
    about:''
 })
 }

 const afterSubmitOp = (event) => 
 {
   event.preventDefault();
   console.log(data);
 }

  return (
    <Base>
      <div
        style={{
          backgroundImage: `url(${image1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "94vh",
        }}
        >
        <Row>
          <Col sm={{ size: 4}}>
            <Container style={{
              marginTop: "100px"
            }}>
              {JSON.stringify(data)}
              <Card color="dark" inverse>
                <CardHeader>
                  <h3>SignUp</h3>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={e => afterSubmitOp(e)}>
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="write your name"
                        type="text"
                        onChange={e => handleChange(e,'name')}
                        value={data.name}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="write your email"
                        type="text"
                        onChange={e => handleChange(e,'email')}
                        value={data.email}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input
                        id="password"
                        name="password"
                        placeholder="write a password"
                        type="text"
                        onChange={e => handleChange(e,'password')}
                        value={data.password}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="about">About</Label>
                      <Input
                        id="about"
                        name="about"
                        placeholder="tell us someting about you..."
                        type="text"
                        onChange={e => handleChange(e,'about')}
                        value={data.about}
                      />
                    </FormGroup>
                    <div className="text-center">
                      <Button color="light" outline>
                        SignUp
                      </Button>
                      <Button onClick={change} color="secondary" className="ms-2" outline>
                        Reset
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Container>
          </Col>
        </Row>
      </div>
    </Base>
  );
};

export default Signup;
