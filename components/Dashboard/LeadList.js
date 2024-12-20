// components/Dashboard/LeadList.jsx
import LeadCard from "./LeadCard";

export default function LeadList() {
  const leads = [
    {
      name: "Winford Asher",
      topic: "Cafe A100 for commercial use",
      status: "New",
    },
    { name: "Josia Love", topic: "Upgrading service plan", status: "New" },
  ];

  return (
    <div className="p-4">
      <table className="w-full bg-white rounded shadow-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4">Name</th>
            <th>Topic</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <LeadCard key={index} lead={lead} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
