"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoPerson } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";

const links = [
  { name: "Account Information", href: "/admin", icon: <IoPerson /> },
  {
    name: "Address Book",
    href: "/admin/book",
    icon: <FaBook />,
  },
  { name: "My Orders", href: "/admin/orders", icon: <FaGift /> },
  { name: "My Favorites", href: "/admin/favorites", icon: <FaGift /> },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            }
            style={{
              color: pathname === link.href ? "#fff" : "#000",
              background:
                pathname === link.href ? "rgb(237, 22, 95)" : "#fff",
            }}
          >
            {link.icon}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
