import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const AppDownloadSection = () => {
  const { language } = useLanguage();

  const appStores = [
    {
      href: "https://itunes.apple.com/sa/app/n-na-markt/id1055344588?mt=8",
      imgSrc: "/assets/images/appstore-download.png",
      alt: language === "ar" ? "متجر آبل" : "Download for iOS",
    },
    {
      href: "https://play.google.com/store/apps/details?id=com.exa.nanamarket",
      imgSrc: "/assets/images/googleplay-download.png",
      alt: language === "ar" ? "متجر جوجل بلاي" : "Download for Android",
    },
    {
      href: "https://appgallery.huawei.com/app/C103339745",
      imgSrc: "/assets/images/appgallery-download.png",
      alt: language === "ar" ? "متجر هواوي" : "Download for Huawei",
    },
  ];

  return (
    <div>
      <h3 className="font-bold text-lg mb-6 text-white">
        {language === "ar" ? "حمل تطبيقنا" : "Download Our App"}
      </h3>
      <div className="flex flex-col gap-4">
        {appStores.map((store) => (
          <a
            key={store.alt}
            href={store.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[140px] transition-transform hover:scale-105"
          >
            <img src={store.imgSrc} alt={store.alt} className="w-full h-auto" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AppDownloadSection;