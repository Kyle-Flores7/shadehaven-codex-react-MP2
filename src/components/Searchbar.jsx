import Form from "react-bootstrap/Form";

export default function SearchBar({ value, onChange }) {
  return (
    <Form.Control
      type="text"
      placeholder="Search by name or title..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
