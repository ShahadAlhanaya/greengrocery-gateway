import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import { Truck, Package, Clock } from "lucide-react";

const FeaturesSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 hover:bg-background-light">
            <div className="mb-6 p-4 rounded-full bg-accent/10">
              <Truck className="h-8 w-8 text-text" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {language === 'ar' ? 'توصيل إلى باب المنزل' : 'Doorstep Delivery'}
            </h3>
            <p className="text-text-light">
              {language === 'ar' 
                ? 'توصيل مريح إلى باب منزلك يوفر عليك الوقت والجهد.'
                : 'Convenient delivery right to your doorstep, saving you time and effort.'}
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 hover:bg-background-light">
            <div className="mb-6 p-4 rounded-full bg-accent/10">
              <Package className="h-8 w-8 text-text" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {language === 'ar' ? 'تنوع المنتجات' : 'Variety of Products'}
            </h3>
            <p className="text-text-light">
              {language === 'ar'
                ? 'تسوق أكثر من 22,000 منتج لتلبية جميع احتياجاتك.'
                : 'Explore over 22,000 products to meet your every need.'}
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 hover:bg-background-light">
            <div className="mb-6 p-4 rounded-full bg-accent/10">
              <Clock className="h-8 w-8 text-text" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {language === 'ar' ? 'التوصيل في أي وقت' : 'Anytime Delivery'}
            </h3>
            <p className="text-text-light">
              {language === 'ar'
                ? 'اختر التوصيل الفوري الآن أو جدول موعد التوصيل المناسب لك.'
                : 'Choose express delivery now or schedule it at a time that works for you.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;