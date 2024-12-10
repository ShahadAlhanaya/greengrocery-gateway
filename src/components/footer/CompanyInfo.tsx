import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CompanyInfo = () => {
  const { language } = useLanguage();

  return (
    <div className="border-t border-gray-800 pt-8">
      <div className="flex justify-center">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="/assets/images/vat.png"
            alt="VAT Certificate"
            className="h-16 w-auto object-contain"
          />
          <div className="text-gray-400 text-sm">
            <p>{language === "ar" ? "السجل التجاري" : "CR "} 36633636</p>
            <p>
              {language === "ar" ? "الرقم الضريبي" : "VAT "} 3838383838322323
            </p>
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-sm text-center mt-4">
        © {new Date().getFullYear()} 🥬 Grocery.{" "}
        {language === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved."}
      </div>
    </div>
  );
};

export default CompanyInfo;
