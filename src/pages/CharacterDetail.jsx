import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";

function getFactionVariant(faction) {
  switch (faction) {
    case "Shadehaven":
      return "primary";
    case "Cindered Legion":
      return "danger";
    case "The Veil":
      return "info";
    case "Wandering Flame":
      return "warning";
    default:
      return "secondary";
  }
}

export default function CharacterDetail() {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function loadCharacter() {
      try {
        const res = await fetch("/src/data/characters.json");
        if (!res.ok) throw new Error("Failed to fetch characters.json");
        const data = await res.json();

        const found = data.find((ch) => ch.id === id);
        if (!found) throw new Error("Character not found");

        setCharacter(found);
      } catch (err) {
        setErrorMsg(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadCharacter();
  }, [id]);

  if (loading) {
    return (
      <Container className="py-4">
        <p>Loading character...</p>
      </Container>
    );
  }

  if (errorMsg) {
    return (
      <Container className="py-4">
        <p className="text-danger">Error: {errorMsg}</p>
        <Button as={Link} to="/characters" variant="outline-light" className="mt-2">
          Back to Characters
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Button as={Link} to="/characters" variant="outline-light" className="mb-3">
        ← Back to Characters
      </Button>

      <Row className="g-4 align-items-start">
        <Col md={4}>
          <img
            src={character.image}
            alt={character.name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: 420, width: "100%", objectFit: "cover", objectPosition: "top center" }}
          />
        </Col>

        <Col md={8}>
          <header className="mb-3">
            <h1 className="mb-1">{character.name}</h1>
            <div className="text-secondary mb-2">{character.title}</div>

            <Badge bg={getFactionVariant(character.faction)} className="me-2">
              {character.faction}
            </Badge>
            <Badge bg="secondary">{character.role}</Badge>
          </header>

          <section className="mb-4">
            <h2 className="h5">Lore</h2>
            <p className="text-secondary" style={{ lineHeight: 1.7 }}>
              {character.lore}
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5">Weapons</h2>
            <ul>
              {character.weapons.map((w) => (
                <li key={w} className="text-secondary">
                  {w}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h5">Equipment</h2>
            <ul>
              {character.equipment.map((e) => (
                <li key={e} className="text-secondary">
                  {e}
                </li>
              ))}
            </ul>
          </section>
        </Col>
      </Row>
    </Container>
  );
}
