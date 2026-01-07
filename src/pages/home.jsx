import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container className="py-5 codex-container">
      {/* HERO */}
      <section className="codex-hero p-4 p-md-5 rounded-4">
        <div className="codex-kicker mb-2">Land of Solitude Codex</div>

        <h1 className="codex-hero-title mb-2">Characters of the Land of Solitude</h1>

        <p className="codex-hero-subtitle mb-4">
          Explore factions, lore, weapons, and equipment from Shadehaven and beyond.
          Browse the codex, filter by faction, and open detailed entries for each figure.
        </p>

        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <Button as={Link} to="/characters" variant="outline-light" className="btn-pill">
            Explore Characters
          </Button>
          <Button as={Link} to="/factions" variant="outline-light" className="btn-pill">
            Browse Factions
          </Button>
        </Stack>
      </section>

      {/* QUICK INFO */}
      <section className="mt-4">
        <div className="codex-panel p-4 rounded-4">
          <h2 className="h5 mb-2">What is this?</h2>
          <p className="text-muted-codex mb-0">
            This is a React SPA built with React Router, Hooks, and React Bootstrap.
            Data is loaded dynamically and rendered through reusable components.
          </p>
        </div>
      </section>
    </Container>
  );
}
