import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

// Menu configuration
const MENU_ITEMS = [
  {
    path: "/customer-dashboard",
    name: "Customer Dashboard",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    path: "/agents-dashboard",
    name: "Agents Dashboard",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    path: "/currency-create",
    name: "Currency",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 12h8M12 8v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    path: "/agents",
    name: "Agents",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V10a2 2 0 012-2h2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 3h6v6M21 3l-9 9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    path: "/customer",
    name: " Customer",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V10a2 2 0 012-2h2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 3h6v6M21 3l-9 9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    path: "/report",
    name: "Customer Report",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect
          width="18"
          height="18"
          x="3"
          y="4"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 2v4M8 2v4M3 10h18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    path: "/agent-report",
    name: "Agent Report",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect
          width="18"
          height="18"
          x="3"
          y="4"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 2v4M8 2v4M3 10h18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

// Utility: Prevent body scroll when menu is open
const useBodyScrollLock = (locked) => {
  useEffect(() => {
    if (locked) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [locked]);
};

const MenuBar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Lock body scroll when menu is open
  useBodyScrollLock(open);

  // Close menu on outside click
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Auto-close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Auto-close menu on resize above 1024px
  useEffect(() => {
    if (!open) return;
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  // Hamburger icon animation
  const Hamburger = ({ toggled }) => (
    <button
      aria-label={toggled ? "Close menu" : "Open menu"}
      aria-expanded={toggled}
      aria-controls="mobile-menu"
      className="lg:hidden flex flex-col justify-center w-10 h-10 focus:outline-none relative z-50"
      onClick={() => setOpen((v) => !v)}
      type="button"
    >
      <span
        className={`block h-0.5 w-7 bg-gray-800 rounded transition-transform duration-300 ${
          toggled ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-7 bg-gray-800 rounded my-1 transition-all duration-300 ${
          toggled ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-7 bg-gray-800 rounded transition-transform duration-300 ${
          toggled ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );

  // Menu item rendering
  const renderMenuItems = useCallback(
    () =>
      MENU_ITEMS.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-colors duration-200
            ${
              location.pathname === item.path
                ? "font-bold text-indigo-600 bg-indigo-50 border-l-4 border-indigo-500"
                : "text-gray-700 hover:bg-gray-100"
            }
          `}
          tabIndex={0}
          aria-current={location.pathname === item.path ? "page" : undefined}
        >
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </Link>
      )),
    [location.pathname]
  );

  // --- Main return ---
  try {
    return (
      <nav className="w-full">
        {/* Desktop Sidebar */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:flex-col lg:w-64 lg:bg-white lg:shadow-lg lg:border-r lg:z-40">
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="flex items-center justify-center h-20 border-b">
              <span className="flex items-center gap-2">
                <span className="bg-gradient-to-tr from-indigo-500 to-blue-400 rounded-lg p-2">
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                    <rect width="32" height="32" rx="8" fill="#fff" />
                    <path d="M8 16L16 8L24 16L16 24L8 16Z" fill="#6366F1" />
                  </svg>
                </span>
                <span className="text-2xl font-bold text-gray-800">Acme</span>
              </span>
            </div>
            {/* Search */}
            <div className="px-4 py-3 bg-gray-50 border-b">
              <input
                className="w-full px-3 py-2 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Search"
              />
            </div>
            {/* Menu */}
            <div className="flex-1 py-4 space-y-1">{renderMenuItems()}</div>
          </div>
        </div>
        {/* Mobile/Tablet Top Bar */}
        <div className="flex lg:hidden items-center justify-between px-4 py-4 bg-white shadow relative z-50">
          <span className="text-2xl font-bold text-indigo-700">Acme</span>
          <Hamburger toggled={open} />
        </div>
        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 z-40"
            aria-hidden="true"
          />
        )}

        <aside
          ref={menuRef}
          id="mobile-menu"
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "-translate-x-full"}
          lg:hidden`}
          aria-label="Mobile menu"
        >
          <div className="flex flex-col h-full pt-20 px-6">
            {renderMenuItems()}
          </div>
        </aside>
      </nav>
    );
  } catch (err) {
    // Error boundary fallback UI
    return (
      <div className="w-full bg-red-100 text-red-700 p-4 text-center">
        Something went wrong with the menu.
      </div>
    );
  }
};

export default MenuBar;
