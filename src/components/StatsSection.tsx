import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Check } from "lucide-react";

const StatsSection = () => {
  const { language } = useLanguage();

  const stats = [
    {
      value: 3,
      suffix: language === "ar" ? " مليون+" : "M+",
      description: language === "ar" ? "منتج سلمناه" : "Items Delivered",
    },
    {
      value: 600000,
      suffix: "+",
      description: language === "ar" ? "خبير مقاضي" : "Grocery Experts",
    },
    {
      value: 45,
      suffix: language === "ar" ? " مليون+" : "M+",
      description: language === "ar" ? "طلب وصلناه" : "Orders Delivered",
    },
  ];

  return (
    <section className="py-20 bg-[#000000]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-black/20 animate-fade-in relative group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-3 text-[#aaff0b] flex items-center gap-3">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={1500}
                />
                <Check
                  className="w-6 h-6 text-[#aaff0b] opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"
                  strokeWidth={3}
                />
              </h3>
              <p className="text-white/90 text-lg">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
