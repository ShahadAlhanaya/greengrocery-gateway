import React from "react";
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
              {language === "ar" ? "توصيل لأي مكان" : "Delivery Anywhere"}
            </h3>
            <p className="text-text-light">
              {language === "ar"
                ? "كل اللي عليك تسويه انك تضيف تفاصيل عنوانك عشان يوصلك الطلب بأعلى جودة."
                : "Simply add your address details, and your order will arrive with top-notch quality"}
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 hover:bg-background-light">
            <div className="mb-6 p-4 rounded-full bg-accent/10">
              <Package className="h-8 w-8 text-text" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {language === "ar"
                ? "جميع أنواع المقاضي"
                : "Wide range of products"}
            </h3>
            <p className="text-text-light">
              {language === "ar"
                ? "نعناع إكسبرس يوفر لك أكثر من 2,000 منتج لاحتياجاتك اليومية، ونعناع هايبر أكثر من 22,000"
                : "Explore over 2,000 daily essentials with Nana Express, and more than 22,000 products with Nana Hyper"}
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 hover:bg-background-light">
            <div className="mb-6 p-4 rounded-full bg-accent/10">
              <Clock className="h-8 w-8 text-text" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {language === "ar" ? "توصيل في أي وقت" : "Anytime Delivery"}
            </h3>
            <p className="text-text-light">
              {language === "ar"
                ? "اطلب الحين ويوصلك فورًا أو جهز سلتك الآن وجدول وقت التوصيل اللي يناسبك"
                : "Order now for quick delivery or schedule your cart for a time that suits you best"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
