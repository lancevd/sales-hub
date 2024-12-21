import { CgMenuGridO } from "react-icons/cg";

export default function Header() {
  return (
    <header className="p-4 bg-[#00102B] text-[#9CA9B8] flex justify-between shadow-md">
      <div className="">
        <CgMenuGridO className="text-2xl" />
        <p>Dynamic 365 | Sales Hub</p>
      </div>
    </header>
  );
}
