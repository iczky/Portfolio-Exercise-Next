import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between absolute top-0 left-0 w-full px-6 pt-5 z-10">
      <Link href="/">
        <p className="pl-20">Fiqra Wardana</p>
      </Link>
      <ul className="list-none flex gap-20 pr-20">
        <li>About</li>
        <li>Work</li>
        <Link href="/contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
