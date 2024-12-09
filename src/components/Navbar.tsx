import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { language, setLanguage, isRTL } = useLanguage();

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className={`text-2xl font-bold ${isRTL ? 'order-1' : 'order-none'}`}>
            🥬 Grocery
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
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

          <Button
            variant="ghost"
            className={`${isRTL ? 'order-none' : 'order-1'}`}
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
          >
            {language === 'ar' ? 'English' : 'العربية'}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;