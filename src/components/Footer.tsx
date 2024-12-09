import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Share2, Linkedin, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { 
      href: '/', 
      label: language === 'ar' ? 'الصفحة الرئيسية' : 'Home',
      onClick: scrollToTop 
    },
    { href: '/about', label: language === 'ar' ? 'من نحن' : 'About Us' },
    { href: '/shop', label: language === 'ar' ? 'التسوق' : 'Shopping' },
    { href: '/privacy', label: language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy' },
    { href: '/terms', label: language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions' },
  ];

  const helpLinks = [
    { href: '/faq', label: language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ' },
    { href: '/contact', label: language === 'ar' ? 'اتصل بنا' : 'Contact Us' },
  ];

  const joinUsLinks = [
    { href: '/become-supplier', label: language === 'ar' ? 'كن موردًا' : 'Become a Supplier' },
    { href: '/careers', label: language === 'ar' ? 'الوظائف' : 'Careers' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'X (Twitter)' },
    { icon: Share2, href: '#', label: 'TikTok' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  const appStores = [
    { 
      href: '#', 
      imgSrc: '/app-store.png', 
      alt: language === 'ar' ? 'متجر آبل' : 'App Store' 
    },
    { 
      href: '#', 
      imgSrc: '/google-play.png', 
      alt: language === 'ar' ? 'متجر جوجل بلاي' : 'Google Play' 
    },
    { 
      href: '#', 
      imgSrc: '/app-gallery.png', 
      alt: language === 'ar' ? 'متجر هواوي' : 'AppGallery' 
    },
  ];

  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-accent transition-colors"
                    onClick={link.onClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">
              {language === 'ar' ? 'مساعدة' : 'Help'}
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Join Us Section */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">
              {language === 'ar' ? 'انضم إلينا' : 'Join Us'}
            </h3>
            <ul className="space-y-3">
              {joinUsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">
              {language === 'ar' ? 'حمل تطبيقنا' : 'Download Our App'}
            </h3>
            <div className="flex flex-col gap-4">
              {appStores.map((store) => (
                <a
                  key={store.alt}
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={store.imgSrc}
                    alt={store.alt}
                    className="h-10 w-auto"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-black hover:bg-accent rounded-full p-2 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Company Info */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/vat-certificate.png"
                alt="VAT Certificate"
                className="h-16 w-auto"
              />
              <div className="text-gray-400 text-sm">
                <p>CR 36633636</p>
                <p>VAT 3838383838322323</p>
              </div>
            </div>
          </div>
          <div className="text-gray-400 text-sm text-center mt-4">
            © {new Date().getFullYear()} 🥬 Grocery. 
            {language === 'ar' 
              ? 'جميع الحقوق محفوظة' 
              : 'All rights reserved.'}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
