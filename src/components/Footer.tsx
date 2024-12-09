import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { language } = useLanguage();

  const links = {
    company: {
      title: language === 'ar' ? 'الشركة' : 'Company',
      items: [
        { href: '/about', label: language === 'ar' ? 'من نحن' : 'About Us' },
        { href: '/careers', label: language === 'ar' ? 'وظائف' : 'Careers' },
        { href: '/contact', label: language === 'ar' ? 'اتصل بنا' : 'Contact Us' },
      ],
    },
    legal: {
      title: language === 'ar' ? 'قانوني' : 'Legal',
      items: [
        { href: '/terms', label: language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions' },
        { href: '/privacy', label: language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy' },
        { href: '/faq', label: language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ' },
      ],
    },
  };

  return (
    <footer className="bg-background-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold">
              🥬 Grocery
            </Link>
            <p className="mt-4 text-text-light">
              {language === 'ar' 
                ? 'خدمة توصيل البقالة الموثوقة' 
                : 'Your trusted grocery delivery service'}
            </p>
          </div>
          
          {Object.values(links).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-text-light hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;