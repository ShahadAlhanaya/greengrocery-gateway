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
          {/* Logo - always on the left in LTR, right in RTL */}
          <Link to="/" className={`text-2xl font-bold ${isRTL ? 'order-2' : 'order-none'}`}>
            🥬 Grocery
          </Link>
          
          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-6 ${isRTL ? 'order-1' : 'order-none'}`}>
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

          {/* Language Switch and Mobile Menu Button */}
          <div className={`flex items-center gap-4 ${isRTL ? 'order-none' : 'order-2'}`}>
            <Button
              variant="ghost"
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </Button>
            
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
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