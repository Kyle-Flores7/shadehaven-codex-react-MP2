import { useEffect, useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Factions() {
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
        setErrorMsg(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    loadCharacters();
  }, []);

  const grouped = useMemo(() => {
    const map = new Map();
    characters.forEach((c) => {
      const key = c.faction || "Unknown";
      map.set(key, (map.get(key) || 0) + 1);
    });
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [characters]);

  if (loading) {
    return (
      <Container className="py-4">
        <p>Loading factions...</p>
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
      <h1 className="mb-2">Factions</h1>
      <p className="text-muted">
        Browse factions and jump to filtered character lists.
      </p>

      <ListGroup>
        {grouped.map(([faction, count]) => (
          <ListGroup.Item
            key={faction}
            className="d-flex align-items-center justify-content-between"
          >
            <div>
              <strong>{faction}</strong>{" "}
              <Badge bg="secondary">{count}</Badge>
            </div>

            <Button
              as={Link}
              to={`/characters?faction=${encodeURIComponent(faction)}`}
              variant="outline-dark"
              size="sm"
            >
              View Characters
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
