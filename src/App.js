import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div>
      <Navbar
        className="navbar navbar-dark "
        style={{ backgroundColor: "#FF5733" }}
      >
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row xs={2} md={4} className=" justify-content-between my-4 d-flex g-5">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  img
                  src="https://source.unsplash.com/WrUGh2DXfiw/1600x900"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
