import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import { Apple, Carrot, Cherry, Coffee, Egg, Milk, Pizza, Wheat, Salad, ShoppingBag, ShoppingCart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CategoriesSection = () => {
  const { language, isRTL } = useLanguage();

  const categories = [
    { icon: <Apple />, name: language === 'ar' ? 'فواكه' : 'Fruits' },
    { icon: <Carrot />, name: language === 'ar' ? 'خضروات' : 'Vegetables' },
    { icon: <Salad />, name: language === 'ar' ? 'أعشاب' : 'Herbs' },
    { icon: <Wheat />, name: language === 'ar' ? 'أرز' : 'Rice' },
    { icon: <ShoppingBag />, name: language === 'ar' ? 'معلبات' : 'Cans' },
    { icon: <Coffee />, name: language === 'ar' ? 'قهوة' : 'Coffee' },
    { icon: <Pizza />, name: language === 'ar' ? 'وجبات خفيفة' : 'Snacks' },
    { icon: <Egg />, name: language === 'ar' ? 'بيض' : 'Eggs' },
    { icon: <Milk />, name: language === 'ar' ? 'ألبان' : 'Dairy' },
    { icon: <ShoppingCart />, name: language === 'ar' ? 'مخبوزات' : 'Bakery' },
    { icon: <Cherry />, name: language === 'ar' ? 'مستلزمات الحيوانات الأليفة' : 'Pet Supplies' },
    { icon: <ShoppingBag />, name: language === 'ar' ? 'صيدلية' : 'Pharmacy' },
    { icon: <ShoppingBag />, name: language === 'ar' ? 'مكياج' : 'Makeup' },
  ];

  return (
    <section className="py-12 bg-background-light">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          {language === 'ar' ? 'تسوق حسب الفئة' : 'Shop by Category'}
        </h2>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
            dragFree: true,
            direction: isRTL ? 'rtl' : 'ltr'
          }}
          className="w-full"
        >
          <CarouselContent className={`-ml-2 md:-ml-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {categories.map((category, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-3"
                style={{ flex: '0 0 80px' }}
              >
                <button 
                  className="w-full h-full rounded-lg bg-white transition-all duration-300 hover:bg-accent group focus:outline-none focus:ring-2 focus:ring-accent"
                  onClick={() => console.log(`Clicked ${category.name}`)}
                >
                  <div className="flex flex-col items-center justify-center p-2 space-y-2">
                    <div className="w-10 h-10 flex items-center justify-center">
                      {React.cloneElement(category.icon, { 
                        className: "w-8 h-8 text-text group-hover:text-text transition-colors"
                      })}
                    </div>
                    <span className="text-xs font-medium text-text group-hover:text-text text-center line-clamp-2 min-h-[2.5rem]">
                      {category.name}
                    </span>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className={`hidden md:flex ${isRTL ? '-right-4' : '-left-4'} h-8 w-8 border-none bg-accent/10 hover:bg-accent text-text hover:text-text`}
          />
          <CarouselNext 
            className={`hidden md:flex ${isRTL ? '-left-4' : '-right-4'} h-8 w-8 border-none bg-accent/10 hover:bg-accent text-text hover:text-text`}
          />
        </Carousel>
      </div>
    </section>
  );
};

export default CategoriesSection;