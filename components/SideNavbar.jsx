
"use client";

import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SideNavbar() {
  return (
    <aside className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 md:block">
      <nav className="flex flex-col items-end gap-4">
        {navItems.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            className="group flex items-center gap-3"
          >
            <span className="rounded-full border border-border/70 bg-background/95 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
              {item.label}
            </span>

            <span className="flex size-3 items-center justify-center rounded-full border-2 border-primary bg-background transition-all duration-300 group-hover:scale-125 group-hover:bg-primary">
              <span className="size-1 rounded-full bg-primary group-hover:bg-primary-foreground" />
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
