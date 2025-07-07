import { navLinks } from "@/constants";
import Link from "next/link";

const NavLinks = ({ mobile }: { mobile?: boolean }) => {
  return (
    <ul className={`${mobile ? "flex flex-col gap-4 items-center" : "hidden lg:flex gap-8"}`}>
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-sm hover:underline"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
