import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, ArrowLeft, ImageIcon } from "lucide-react";

const HowToUseSection = () => {
  const { language, isRTL } = useLanguage();

  const steps = [
    {
      number: "01",
      title: language === 'ar' ? "قم بالدخول إلى التطبيق وقم بتحضير طلبك" : "Access the app & prepare your order",
      description: language === 'ar' 
        ? "سواء في منتصف النهار أو في الصباح الباكر، تصفح وحدد العناصر بسهولة."
        : "Whether it's midday or early morning, browse and select items conveniently.",
    },
    {
      number: "02",
      title: language === 'ar' ? "تتبع طلبك" : "Track your order",
      description: language === 'ar'
        ? "بينما تستمتع بالراحة في منزلك، تتبع حالة التسليم بسهولة."
        : "While you're in the comfort of your own home, track your delivery status easily.",
    },
    {
      number: "03",
      title: language === 'ar' ? "انتظر رنين الجرس" : "Wait for the doorbell to ring",
      description: language === 'ar'
        ? "احصل على طلبك بكل راحة بمجرد وصوله."
        : "Grab your order with the utmost convenience as soon as it arrives.",
    },
  ];

  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {language === 'ar' ? "كيفية استخدام التطبيق" : "How to Use the App"}
        </h2>
        
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? '' : 'lg:flex-row-reverse'}`}>
          {/* Image Section - Now First */}
          <div className="relative aspect-square bg-background-light rounded-2xl overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-text-light gap-4">
              <ImageIcon className="w-12 h-12 text-text-light/50" />
              <span className="text-sm font-medium">Image Placeholder</span>
            </div>
          </div>

          {/* Steps Section - Now Second */}
          <div className="space-y-12 group/steps hover:shadow-[0_0_15px_rgba(170,255,11,0.1)] rounded-2xl p-6 transition-shadow duration-300">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex gap-6 items-start group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-text">{step.number}</span>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-text">{step.title}</h3>
                    <Arrow className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-text-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;