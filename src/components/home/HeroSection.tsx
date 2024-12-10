import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-[600px] flex items-center justify-center py-20">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            {language === 'ar' 
              ? 'توصيل البقالة إلى باب منزلك' 
              : 'Grocery Delivery to Your Doorstep'}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            {language === 'ar'
              ? 'اطلب البقالة الطازجة وسنوصلها إلى منزلك في أسرع وقت'
              : 'Order fresh groceries and we will deliver them to your home in no time'}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a 
              href="#" 
              className="w-[140px] transition-transform hover:scale-105"
              aria-label="Download for iOS"
            >
              <img 
                src="assets/images/appstore-download.png" 
                alt="Download for iOS" 
                className="w-full h-auto"
              />
            </a>
            <a 
              href="#" 
              className="w-[140px] transition-transform hover:scale-105"
              aria-label="Download for Android"
            >
              <img 
                src="assets/images/googleplay-download.png" 
                alt="Download for Android" 
                className="w-full h-auto"
              />
            </a>
            <a 
              href="#" 
              className="w-[140px] transition-transform hover:scale-105"
              aria-label="Download for Huawei"
            >
              <img 
                src="assets/images/appgallery-download.png" 
                alt="Download for Huawei" 
                className="w-full h-auto"
              />
            </a>
          </div>

          <Button 
            className="bg-accent hover:bg-accent-hover text-text font-medium text-lg px-8 py-6"
          >
            {language === 'ar' ? 'ابدأ التسوق' : 'Start Shopping'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;