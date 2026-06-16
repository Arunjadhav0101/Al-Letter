
import Link from "next/link";

export default function Navbar() {
  return (
    // <Card className="sticky top-0 w-full bg-white shadow-md z-50 ">
    <header className="  bg-white   w-full backdrop-blur-sm shadow-md py-4 px-6 flex justify-between items-center mt-0 fixed top-0 z-50">
      <h1 className="text-2xl font-bold ">Templatz</h1>
      <ul className="flex space-x-6  font-medium sm:text-lg">
        <li>
          <Link href={"/#"} className=" hover:text-orange-300 p-2 rounded-lg ">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/#"} className="hover:text-orange-300 p-2 rounded-lg">
            Login
          </Link>
        </li>
        <li>
          <Link href={"/#"} className="hover:text-orange-300 p-2 rounded-lg">
            Signup
          </Link>
        </li>
      </ul>
    </header>

    // </Card>
  );
}
