import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function getGlowClass(faction) {
  switch (faction) {
    case "Shadehaven":
      return "glow-shadehaven";
    case "Cindered Legion":
      return "glow-cindered";
    case "The Veil":
      return "glow-veil";
    case "Wandering Flame":
      return "glow-flame";
    default:
      return "";
  }
}

export default function CharacterCard({ character }) {
  return (
    <Card
      className={`h-100 text-light character-card ${getGlowClass(
        character.faction
      )}`}
    >
      <Card.Img
        variant="top"
        src={character.image}
        alt={character.name}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-1">{character.name}</Card.Title>

        <Card.Subtitle className="mb-2 text-muted-codex">
          {character.title}
        </Card.Subtitle>

        <div className="mb-2">
          <span className="badge-bar">{character.faction}</span>
        </div>

        <Card.Text className="small text-muted-codex flex-grow-1">
          {character.lore.slice(0, 120)}...
        </Card.Text>

        <Button
          as={Link}
          to={`/characters/${character.id}`}
          variant="outline-light"
          className="btn-pill mt-2"
        >
          View Lore & Equipment
        </Button>
      </Card.Body>
    </Card>
  );
}
