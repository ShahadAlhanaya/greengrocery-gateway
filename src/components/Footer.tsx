import React from "react";
import FooterLinks from "./footer/FooterLinks";
import AppDownloadSection from "./footer/AppDownloadSection";
import SocialLinks from "./footer/SocialLinks";
import CompanyInfo from "./footer/CompanyInfo";

const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FooterLinks />
          <AppDownloadSection />
        </div>
        <SocialLinks />
        <CompanyInfo />
      </div>
    </footer>
  );
};

export default Footer;
