import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { AppleIcon, PlayIcon, Truck, Package, Clock, Apple, Carrot, Cherry, Coffee, Egg, Milk, Pizza, Rice, Salad, ShoppingBag, ShoppingCart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const { language } = useLanguage();

  const categories = [
    { icon: <Apple />, name: language === 'ar' ? 'فواكه' : 'Fruits' },
    { icon: <Carrot />, name: language === 'ar' ? 'خضروات' : 'Vegetables' },
    { icon: <Salad />, name: language === 'ar' ? 'أعشاب' : 'Herbs' },
    { icon: <Rice />, name: language === 'ar' ? 'أرز' : 'Rice' },
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
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center py-20">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
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

            {/* App Download Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                <AppleIcon className="mr-2 h-5 w-5" />
                {language === 'ar' ? 'متجر آبل' : 'App Store'}
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                <PlayIcon className="mr-2 h-5 w-5" />
                {language === 'ar' ? 'متجر جوجل' : 'Google Play'}
              </Button>
            </div>

            {/* Start Shopping Button */}
            <Button 
              className="bg-accent hover:bg-accent-hover text-text font-medium text-lg px-8 py-6"
            >
              {language === 'ar' ? 'ابدأ التسوق' : 'Start Shopping'}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Doorstep Delivery */}
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

            {/* Variety of Products */}
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

            {/* Anytime Delivery */}
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

      {/* Categories Section */}
      <section className="py-12 bg-background-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            {language === 'ar' ? 'تسوق حسب الفئة' : 'Shop by Category'}
          </h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {categories.map((category, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <button 
                    className="w-full p-4 rounded-lg bg-white transition-all duration-300 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-3 rounded-full bg-background">
                        {React.cloneElement(category.icon, { 
                          className: "w-6 h-6 text-text"
                        })}
                      </div>
                      <span className="text-sm font-medium text-text text-center whitespace-normal">
                        {category.name}
                      </span>
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Index;
