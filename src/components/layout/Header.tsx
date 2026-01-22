import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Package } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/tracking', label: 'Tracking' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-ocean-gradient rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <Package className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-lg leading-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
              HNL SHIPPING
            </span>
            <span className={`text-xs font-medium ${isScrolled ? 'text-muted-foreground' : 'text-white/80'}`}>
              MANAGEMENT
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? 'active text-secondary' : ''
              } ${isScrolled ? 'text-foreground' : 'text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <Link
          to="/tracking"
          className="hidden md:inline-flex btn-hero text-sm"
        >
          Track Shipment
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-foreground' : 'text-white'
          }`}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-elevated animate-fade-in">
          <nav className="container-main py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-2 transition-colors ${
                  location.pathname === link.path
                    ? 'text-secondary'
                    : 'text-foreground hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/tracking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-hero text-center mt-4"
            >
              Track Shipment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
