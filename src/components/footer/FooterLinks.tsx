import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const FooterLinks = () => {
  const { language } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { href: "/", label: language === "ar" ? "الصفحة الرئيسية" : "Home" },
    { href: "/about", label: language === "ar" ? "من نحن" : "About Us" },
    { href: "/shop", label: language === "ar" ? "التسوق" : "Shopping" },
    {
      href: "/privacy",
      label: language === "ar" ? "سياسة الخصوصية" : "Privacy Policy",
    },
    {
      href: "/terms",
      label: language === "ar" ? "الشروط والأحكام" : "Terms & Conditions",
    },
  ];

  const helpLinks = [
    { href: "/faq", label: language === "ar" ? "الأسئلة الشائعة" : "FAQ" },
    { href: "/contact", label: language === "ar" ? "اتصل بنا" : "Contact Us" },
  ];

  const joinUsLinks = [
    {
      href: "/become-supplier",
      label: language === "ar" ? "كن موردًا" : "Become a Supplier",
    },
    { href: "/careers", label: language === "ar" ? "الوظائف" : "Careers" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      {/* Quick Links */}
      <div>
        <h3 className="font-bold text-lg mb-6 text-white">
          {language === "ar" ? "روابط سريعة" : "Quick Links"}
        </h3>
        <ul className="space-y-3">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-gray-400 hover:text-accent transition-colors"
                onClick={scrollToTop}
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
          {language === "ar" ? "مساعدة" : "Help"}
        </h3>
        <ul className="space-y-3">
          {helpLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-gray-400 hover:text-accent transition-colors"
                onClick={scrollToTop}
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
          {language === "ar" ? "انضم إلينا" : "Join Us"}
        </h3>
        <ul className="space-y-3">
          {joinUsLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-gray-400 hover:text-accent transition-colors"
                onClick={scrollToTop}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;