// components/Dashboard/LeadCard.jsx
export default function LeadCard({ lead }) {
  return (
    <tr className="border-b">
      <td className="p-4">{lead.name}</td>
      <td>{lead.topic}</td>
      <td>{lead.status}</td>
    </tr>
  );
}
