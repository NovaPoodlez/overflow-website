import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const OverflowIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="49.47 49.42 277.54 276.4" className={className} fill="currentColor">
    <path fillRule="evenodd" d="M182.100 49.516 C 145.533 51.664,114.833 65.171,89.884 90.089 C 35.961 143.943,36.010 231.471,89.992 285.405 C 152.531 347.888,257.073 336.334,304.405 261.707 C 314.924 245.122,323.277 222.051,324.710 205.628 L 324.852 203.997 312.076 204.049 L 299.300 204.100 298.784 207.000 C 284.676 286.234,195.323 325.781,127.300 282.899 C 72.968 248.649,58.388 175.002,95.563 122.600 C 137.823 63.031,224.798 58.613,272.728 113.600 C 276.242 117.632,282.600 126.184,282.600 126.879 C 282.600 126.927,277.695 128.602,271.700 130.600 C 265.705 132.598,260.807 134.293,260.815 134.367 C 260.854 134.707,312.501 180.598,312.579 180.362 C 312.873 179.483,327.117 112.291,327.018 112.250 C 326.952 112.222,322.579 113.639,317.301 115.400 C 306.111 119.131,307.545 118.822,306.869 117.650 C 285.983 81.415,247.067 55.744,205.200 50.585 C 198.018 49.700,187.360 49.207,182.100 49.516 M174.870 108.999 C 174.634 109.094,174.385 109.263,174.316 109.374 C 174.247 109.485,171.183 123.239,167.507 139.938 C 160.359 172.412,159.927 174.321,157.791 182.860 C 157.026 185.917,156.400 188.719,156.400 189.087 L 156.400 189.754 162.150 189.880 C 177.701 190.219,179.044 190.278,179.269 190.636 C 179.617 191.190,173.483 223.249,167.299 253.200 C 164.968 264.489,164.689 266.524,165.589 265.710 C 167.829 263.682,218.098 172.360,218.740 169.152 L 218.850 168.600 208.612 168.600 C 197.734 168.600,197.600 168.588,197.600 167.643 C 197.600 167.344,202.387 154.106,208.238 138.225 C 218.371 110.721,218.859 109.338,218.500 109.075 C 218.063 108.756,175.657 108.681,174.870 108.999 "/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-xl bg-primary/10">
                <OverflowIcon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">Overflow</span>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              Empowering Aboriginal communities through sustainable energy solutions and smart technology.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all duration-200">
                  How it works
                </Link>
              </li>
              <li>
                <Link to="/feasibility-study" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all duration-200">
                  Feasibility study
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 opacity-90" />
                <span className="text-sm opacity-90">info@capeyorksolar.org</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 opacity-90" />
                <span className="text-sm opacity-90">+61 7 4098 1234</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 opacity-90" />
                <span className="text-sm opacity-90">Cape York Peninsula, Queensland</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-90">
              © {currentYear} Overflow. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all duration-200">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;