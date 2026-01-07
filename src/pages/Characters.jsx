import { useEffect, useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";
import FactionFilter from "../components/FactionFilter";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const [search, setSearch] = useState("");
  const [faction, setFaction] = useState("");

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

  const factions = useMemo(() => {
    const set = new Set(characters.map((c) => c.faction));
    return Array.from(set).sort();
  }, [characters]);

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();

    return characters.filter((c) => {
      const matchesSearch =
        !s ||
        c.name.toLowerCase().includes(s) ||
        c.title.toLowerCase().includes(s);

      const matchesFaction = !faction || c.faction === faction;

      return matchesSearch && matchesFaction;
    });
  }, [characters, search, faction]);

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

      <p className="text-muted">
        Showing {filtered.length} of {characters.length} characters
      </p>

      { 

    }
      <Form className="mb-3">
        <div className="d-flex gap-2 flex-wrap">
          <div style={{ minWidth: 240, flex: 1 }}>
            <SearchBar value={search} onChange={setSearch} />
          </div>

          <div style={{ minWidth: 220 }}>
            <FactionFilter
              value={faction}
              onChange={setFaction}
              factions={factions}
            />
          </div>
        </div>
      </Form>
      {  
    }
      <Row className="g-4">
        {filtered.map((ch) => (
          <Col key={ch.id} xs={12} md={6} lg={4}>
            <CharacterCard character={ch} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
