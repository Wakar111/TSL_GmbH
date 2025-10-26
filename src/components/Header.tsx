import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
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

  return (
    <nav className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <NavLeft setIsOpen={setIsOpen} />
        <NavLinksRight navLinks={navLinks} isActive={isActive} />
      </div>
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} isActive={isActive} />
    </nav>
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

const NavLeft = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
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
  isActive,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navLinks: { path: string; label: string }[];
  isActive: (path: string) => boolean;
}) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-20 origin-top flex flex-col gap-4"
    >
      {navLinks.map((link) => (
        <MenuLink
          key={link.path}
          text={link.label}
          path={link.path}
          isActive={isActive(link.path)}
          onClick={() => setIsOpen(false)}
        />
      ))}
    </motion.div>
  );
};

const MenuLink = ({
  text,
  path,
  isActive,
  onClick,
}: {
  text: string;
  path: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div variants={menuLinkVariants}>
      <Link
        to={path}
        onClick={onClick}
        className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
      >
        <motion.span variants={menuLinkArrowVariants}>
          <FiArrowRight className="h-[30px] text-gray-950" />
        </motion.span>
        <motion.div whileHover={{ y: -30 }}>
          <span className={`flex items-center h-[30px] ${isActive ? 'text-gray-800 font-semibold' : 'text-gray-500'}`}>
            {text}
          </span>
          <span className="flex items-center h-[30px] text-gray-800 font-semibold">
            {text}
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

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

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
