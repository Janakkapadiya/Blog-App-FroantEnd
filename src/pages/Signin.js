import Base from "../components/Base";
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
import image2 from "../images/image2.jpg";
const Signin = () => {
  return (
    <Base>
        <div
          style={{
            backgroundImage: `url(${image2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "94vh",
          }}
        >
          <Row>
            <Col sm={{ size: 4}}>
              <Container
                style={{
                  marginTop: "100px",
                }}
              >
                <Card color="dark" inverse>
                  <CardHeader>
                    <h3>SignIn</h3>
                  </CardHeader>
                  <CardBody>
                    <Form>
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
                      <div className="text-center">
                        <Button color="light" outline>
                          SignIn
                        </Button>
                        <Button color="secondary" className="ms-2" outline>
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

export default Signin;
