import {
  useState,
} from "react";

import {
  Rocket,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [
    mobileOpen,
    setMobileOpen,
  ] = useState(false);

  const links = [
    {
      label: "Platforma",
      href: "#hero",
    },
    {
      label: "Imkoniyatlar",
      href: "#features",
    },
    {
      label: "Arxitektura",
      href: "#architecture",
    },
    {
      label: "Ko'rsatkichlar",
      href: "#metrics",
    },
    {
      label: "Aloqa",
      href: "#cta",
    },
  ];

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a
          href="#hero"
          className="brand"
          onClick={closeMenu}
        >
          <div className="brand-icon">
            <Rocket size={20} />
          </div>

          <div className="brand-text">
            <strong>
              AETHERIA
              <span>.IO</span>
            </strong>

            <small>
              QUANTUM CLOUD OS
            </small>
          </div>
        </a>

        <nav
          className={`nav-links ${
            mobileOpen
              ? "nav-open"
              : ""
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#cta"
            className="nav-cta"
            onClick={closeMenu}
          >
            Beta Kirish
          </a>
        </nav>

        <button
          className="mobile-menu"
          onClick={() =>
            setMobileOpen(
              !mobileOpen
            )
          }
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X />
          ) : (
            <Menu />
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;