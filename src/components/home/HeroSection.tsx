import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-[600px] flex items-center justify-center py-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            {language === "ar"
              ? "مقاضيك لعندك تجيك"
              : "Your groceries right to your doorstep"}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            {language === "ar"
              ? "من خلال تطبيق نعناع اشتري مقاضيك أون لاين وتوصلك لباب بيتك."
              : "Shop for your groceries online through the Nana app & have it delivered right to your doorstep."}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://itunes.apple.com/sa/app/n-na-markt/id1055344588?mt=8"
              className="w-[140px] transition-transform hover:scale-105"
              aria-label="Download for iOS"
            >
              <img
                src="/assets/images/appstore-download.png"
                alt="Download for iOS"
                className="w-full h-auto"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://play.google.com/store/apps/details?id=com.exa.nanamarket"
              className="w-[140px] transition-transform hover:scale-105"
              aria-label="Download for Android"
            >
              <img
                src="/assets/images/googleplay-download.png"
                alt="Download for Android"
                className="w-full h-auto"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://appgallery.huawei.com/app/C103339745"
              className="w-[140px] transition-transform hover:scale-105"
              aria-label="Download for Huawei"
            >
              <img
                src="/assets/images/appgallery-download.png"
                alt="Download for Huawei"
                className="w-full h-auto"
              />
            </a>
          </div>

          <Button className="bg-accent hover:bg-accent-hover text-text font-medium text-lg px-8 py-6">
            {language === "ar" ? "ابدأ التسوق" : "Start Shopping"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;