// components/Dashboard/FocusedView.jsx
export default function FocusedView() {
  const focusedLeads = [
    { name: "Jane Reyes", description: "Upgrading espresso machines" },
    { name: "Allan Munger", description: "Prepare for a meeting" },
  ];

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Focused View</h2>
      <ul>
        {focusedLeads.map((lead, index) => (
          <li key={index} className="my-2">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="font-semibold">{lead.name}</h3>
              <p className="text-gray-600">{lead.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
