import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { language, setLanguage, isRTL } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button - visible only on mobile */}
          <Button
            variant="ghost"
            className={`md:hidden ${isRTL ? 'order-2' : 'order-none'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Logo - always on the left in LTR, right in RTL */}
          <Link 
            to="/" 
            className={`${isRTL ? 'order-1 md:order-none' : 'order-1'} md:${isRTL ? 'mr-0' : 'ml-0'} ${isMobileMenuOpen ? 'hidden md:block' : ''}`}
          >
            <img 
              src="/assets/images/logo-ar.png" 
              alt="Grocery Logo" 
              className="h-10 w-auto object-contain"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-6 ${isRTL ? 'order-2 mr-auto' : 'order-2 ml-auto'}`}>
            <Link to="/about" className="text-text hover:text-accent transition-colors">
              {language === 'ar' ? 'من نحن' : 'About Us'}
            </Link>
            <Link to="/supplier" className="text-text hover:text-accent transition-colors">
              {language === 'ar' ? 'كن موردًا' : 'Become a Supplier'}
            </Link>
            <Button className="bg-accent hover:bg-accent-hover text-text font-medium">
              {language === 'ar' ? 'ابدأ التسوق' : 'Start Shopping'}
            </Button>
          </div>

          {/* Language Switch */}
          <Button
            variant="ghost"
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className={`${isRTL ? 'order-3' : 'order-3'} ${isMobileMenuOpen ? 'hidden md:flex' : ''}`}
          >
            {language === 'ar' ? 'English' : 'العربية'}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link 
                to="/about" 
                className="text-text hover:text-accent transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === 'ar' ? 'من نحن' : 'About Us'}
              </Link>
              <Link 
                to="/supplier" 
                className="text-text hover:text-accent transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === 'ar' ? 'كن موردًا' : 'Become a Supplier'}
              </Link>
              <Button 
                className="bg-accent hover:bg-accent-hover text-text font-medium w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === 'ar' ? 'ابدأ التسوق' : 'Start Shopping'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;