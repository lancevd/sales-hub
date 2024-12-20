// components/Dashboard/Sidebar.jsx
export default function Sidebar() {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Recent", href: "#" },
    { label: "Pinned", href: "#" },
    { label: "Leads", href: "#" },
    { label: "Opportunities", href: "#" },
  ];

  return (
    <aside className="w-64 bg-gray-100 h-full p-4">
      <ul>
        {menuItems.map((item) => (
          <li key={item.label} className="my-2">
            <a href={item.href} className="text-gray-700 hover:text-blue-600">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
