import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const OverflowIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="49.47 49.42 277.54 276.4" className={className} fill="currentColor">
    <path fillRule="evenodd" d="M182.100 49.516 C 145.533 51.664,114.833 65.171,89.884 90.089 C 35.961 143.943,36.010 231.471,89.992 285.405 C 152.531 347.888,257.073 336.334,304.405 261.707 C 314.924 245.122,323.277 222.051,324.710 205.628 L 324.852 203.997 312.076 204.049 L 299.300 204.100 298.784 207.000 C 284.676 286.234,195.323 325.781,127.300 282.899 C 72.968 248.649,58.388 175.002,95.563 122.600 C 137.823 63.031,224.798 58.613,272.728 113.600 C 276.242 117.632,282.600 126.184,282.600 126.879 C 282.600 126.927,277.695 128.602,271.700 130.600 C 265.705 132.598,260.807 134.293,260.815 134.367 C 260.854 134.707,312.501 180.598,312.579 180.362 C 312.873 179.483,327.117 112.291,327.018 112.250 C 326.952 112.222,322.579 113.639,317.301 115.400 C 306.111 119.131,307.545 118.822,306.869 117.650 C 285.983 81.415,247.067 55.744,205.200 50.585 C 198.018 49.700,187.360 49.207,182.100 49.516 M174.870 108.999 C 174.634 109.094,174.385 109.263,174.316 109.374 C 174.247 109.485,171.183 123.239,167.507 139.938 C 160.359 172.412,159.927 174.321,157.791 182.860 C 157.026 185.917,156.400 188.719,156.400 189.087 L 156.400 189.754 162.150 189.880 C 177.701 190.219,179.044 190.278,179.269 190.636 C 179.617 191.190,173.483 223.249,167.299 253.200 C 164.968 264.489,164.689 266.524,165.589 265.710 C 167.829 263.682,218.098 172.360,218.740 169.152 L 218.850 168.600 208.612 168.600 C 197.734 168.600,197.600 168.588,197.600 167.643 C 197.600 167.344,202.387 154.106,208.238 138.225 C 218.371 110.721,218.859 109.338,218.500 109.075 C 218.063 108.756,175.657 108.681,174.870 108.999 "/>
  </svg>
);
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext.jsx';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'How it works', path: '/how-it-works' },
    { name: 'Feasibility study', path: '/feasibility-study' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
              <OverflowIcon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">Overflow</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg transition-all duration-200 hover:bg-muted"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-foreground" />
              ) : (
                <Sun className="h-5 w-5 text-foreground" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-lg transition-all duration-200 hover:bg-muted"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;