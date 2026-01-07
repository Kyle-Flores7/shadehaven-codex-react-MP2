import Form from "react-bootstrap/Form";

export default function FactionFilter({ value, onChange, factions }) {
  return (
    <Form.Select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">All Factions</option>
      {factions.map((f) => (
        <option key={f} value={f}>
          {f}
        </option>
      ))}
    </Form.Select>
  );
}
