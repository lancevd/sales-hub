// components/Dashboard/KeyActivities.jsx
export default function KeyActivities() {
  const activities = [
    { title: "Cafe A100 for Woodland Bank", due: "2 days to close" },
    { title: "Partnership opportunity for Fabrikam", due: "12 days to close" },
  ];

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Key Activities</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index} className="my-2">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="font-semibold">{activity.title}</h3>
              <p className="text-gray-600">{activity.due}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
