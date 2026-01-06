import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CharacterCard from "../components/CharacterCard";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function loadCharacters() {
      try {
        const res = await fetch("/src/data/characters.json");
        if (!res.ok) throw new Error("Failed to fetch characters.json");
        const data = await res.json();
        setCharacters(data);
      } catch (err) {
        setErrorMsg(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadCharacters();
  }, []);

  if (loading) {
    return (
      <Container className="py-4">
        <p>Loading characters...</p>
      </Container>
    );
  }

  if (errorMsg) {
    return (
      <Container className="py-4">
        <p className="text-danger">Error: {errorMsg}</p>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h1 className="mb-2">Characters</h1>
      <p className="text-muted">Loaded: {characters.length} characters</p>

      <Row className="g-4">
        {characters.map((ch) => (
          <Col key={ch.id} xs={12} md={6} lg={4}>
            <CharacterCard character={ch} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
