import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiArrowRight, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/fleet', label: 'Fuhrpark' },
    { path: '/jobs', label: 'Stellenangebote' },
    { path: '/contact', label: 'Kontakt' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <nav className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200 sticky top-0 z-[100]">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <NavLeft />
          <div className="flex items-center gap-4">
            <NavLinksRight navLinks={navLinks} isActive={isActive} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block lg:hidden text-gray-950 text-2xl"
              onClick={() => setIsOpen((pv) => !pv)}
              aria-label="Menü öffnen"
            >
              <FiMenu />
            </motion.button>
          </div>
        </div>
      </nav>
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} isActive={isActive} />
    </>
  );
}

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src="/tsl-logo.jpg" alt="TSL Logo" className="w-20 h-20" />
      <div className="ml-2">
        <h1 className="text-lg font-bold text-gray-800">TSL GmbH</h1>
        {/* <p className="text-xs text-gray-600">Transport & Logistik</p> */}
      </div>
    </Link>
  );
};

const NavLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <Logo />
    </div>
  );
};

const NavLink = ({ text, path, isActive }: { text: string; path: string; isActive: boolean }) => {
  return (
    <Link
      to={path}
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className={`flex items-center h-[30px] ${isActive ? 'text-gray-800 font-semibold' : 'text-gray-500'}`}>
          {text}
        </span>
        <span className="flex items-center h-[30px] text-gray-800 font-semibold">
          {text}
        </span>
      </motion.div>
    </Link>
  );
};

const NavLinksRight = ({
  navLinks,
  isActive,
}: {
  navLinks: { path: string; label: string }[];
  isActive: (path: string) => boolean;
}) => {
  return (
    <div className="hidden lg:flex items-center gap-8 ml-auto">
      {navLinks.map((link) => (
        <NavLink key={link.path} text={link.label} path={link.path} isActive={isActive(link.path)} />
      ))}
    </div>
  );
};

const NavMenu = ({
  isOpen,
  setIsOpen,
  navLinks,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navLinks: { path: string; label: string }[];
  isActive: (path: string) => boolean;
}) => {
  return (
    <>
      {/* Backdrop (below header only) */}
      <div
        onClick={() => setIsOpen(false)}
        className={`lg:hidden fixed left-0 right-0 top-20 bottom-0 bg-black/20 transition-opacity z-[150] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden="true"
      />

      {/* Compact dropdown under header */}
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="lg:hidden fixed left-0 right-0 top-20 z-[160] px-3"
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 px-4 py-4 max-h-[70vh] overflow-y-auto">
          <button
            aria-label="Menü schließen"
            className="absolute top-24 right-6 text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <FiX className="w-7 h-7" />
          </button>
          {navLinks.map((link) => (
            <MenuLink
              key={link.path}
              text={link.label}
              path={link.path}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

const MenuLink = ({
  text,
  path,
  onClick,
}: {
  text: string;
  path: string;
  onClick: () => void;
}) => {
  return (
    <motion.div variants={menuLinkVariants}>
      <Link
        to={path}
        onClick={onClick}
          className="lg:hidden text-xl py-2.5 px-2 font-semibold text-gray-800 flex items-center gap-3 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <FiArrowRight className="text-gray-900" />
        {text}
      </Link>
    </motion.div>
  );
};

// unused old variants removed

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

// unused old arrow variants removed

// Mobile menu slide variants
const mobileMenuVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.2 }
  },
  closed: {
    y: -16,
    opacity: 0,
    transition: { duration: 0.15 }
  },
};
