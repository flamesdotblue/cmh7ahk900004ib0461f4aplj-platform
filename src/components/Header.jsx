import { useState } from 'react';
import { Menu, X, Beer, UtensilsCrossed } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#bar', label: 'Bar' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur bg-neutral-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-amber-500 to-rose-500 text-neutral-900">
            <Beer className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="font-semibold tracking-tight">Butter & Beer</p>
            <p className="text-xs text-neutral-400">Indian Kitchen • Bar • Nova Scotia</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-neutral-300 transition hover:text-white"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-amber-500 to-rose-500 px-4 py-2 text-sm font-medium text-neutral-900 shadow hover:opacity-95"
          >
            <UtensilsCrossed className="h-4 w-4" /> Reserve
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-neutral-200 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-neutral-300 hover:bg-white/5 hover:text-white"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-amber-500 to-rose-500 px-4 py-2 text-sm font-medium text-neutral-900 shadow"
            >
              <UtensilsCrossed className="h-4 w-4" /> Reserve
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
