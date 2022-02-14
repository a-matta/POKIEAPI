import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

const App = () => {
  const [pokemons, setPokemons] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((resp) => {
      const nameURlArray = resp.data.results.map((r) =>
        axios.get(r.url).then((res) => res.data)
      );
      Promise.all(nameURlArray).then((data) => {
        setPokemons(data);
      });
    });
  }, []);

  return (
    <div>
      <Navbar
        className="navbar navbar-dark "
        style={{ backgroundColor: "#FF5733" }}
      >
        <Container>
          <Navbar.Brand href="#">Pokemon App</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row
          xs={2}
          md={4}
          className=" justify-content-between my-5 d-flex gap-3"
        >
          {!isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {isLoading &&
            pokemons.map((pokemon) => (
              <Card bg="dark" text="light" key={pokemon.name}>
                <Card.Header>{pokemon.name}</Card.Header>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={pokemon.sprites.other.dream_world.front_default}
                  />
                </Card.Body>
              </Card>
            ))}
        </Row>
        <Button bg="dark" type="submit" className="submit">
          Show more Pokemons
        </Button>
      </Container>
    </div>
  );
};

export default App;
