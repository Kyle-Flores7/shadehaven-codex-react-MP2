import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

function getFactionVariant(faction) {
  // Bootstrap badge variants: primary, secondary, success, danger, warning, info, light, dark
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

export default function CharacterCard({ character }) {
  const loreSnippet =
    character.lore && character.lore.length > 140
      ? character.lore.slice(0, 140) + "..."
      : character.lore || "Lore coming soon from the Land of Solitude.";

  return (
    <Card className="h-100 shadow-sm bg-dark text-light">
      <Card.Img
        variant="top"
        src={character.image}
        alt={character.name}
        style={{ height: 240, objectFit: "cover", objectPosition: "top center" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-1">{character.name}</Card.Title>
        <div className="text-secondary mb-2">{character.title}</div>

        <div className="mb-2">
          <Badge bg={getFactionVariant(character.faction)}>
            {character.faction}
          </Badge>
        </div>

        <Card.Text className="text-secondary small flex-grow-1">
          {loreSnippet}
        </Card.Text>

        <Button
          as={Link}
          to={`/characters/${character.id}`}
          variant="outline-light"
        >
          View Lore & Equipment
        </Button>
      </Card.Body>
    </Card>
  );
}
