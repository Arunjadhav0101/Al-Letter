import { Link } from "@remix-run/react";
export default function Navbar() {
  return (
    <nav className="w-full bg-black/40 backdrop-blur-sm shadow-md py-4 px-6 flex justify-between items-center mt-0 fixed top-0 z-50">
      <h1 className="text-2xl font-bold">Templatz</h1>
      <ul className="flex space-x-6  font-medium">
        <li>
          <Link to={"/"} className=" hover:text-orange-300 p-2 rounded-lg ">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="hover:text-orange-300 p-2 rounded-lg">
            About
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="hover:text-orange-300 p-2 rounded-lg">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
