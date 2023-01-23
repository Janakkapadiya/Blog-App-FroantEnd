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
  Col
} from "reactstrap";
import Base from "../components/Base";
const Signup = () => {
  return (
    <Base>
      <div className="mt-5">
        <Row>
          <Col sm={{size:6,offset:3}}>
            <Container>
              <Card>
                <CardHeader>
                  <h3>SignUp</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="write your name"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="write your email"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input
                        id="password"
                        name="password"
                        placeholder="write a password"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="about">About</Label>
                      <Input
                        id="about"
                        name="about"
                        placeholder="tell us someting about you..."
                        type="text"
                      />
                    </FormGroup>
                    <div className="text-center">
                      <Button color="primary">Click Me</Button>
                      <Button color="secondary" className="ms-2">
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
