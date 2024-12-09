import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { AppleIcon, PlayIcon } from "lucide-react";

const Index = () => {
  const { language } = useLanguage();

  return (
    <div className="animate-fade-in">
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚚",
                title: language === 'ar' ? 'توصيل سريع' : 'Fast Delivery',
                description: language === 'ar' 
                  ? 'توصيل في نفس اليوم لجميع الطلبات' 
                  : 'Same-day delivery for all orders'
              },
              {
                icon: "🥬",
                title: language === 'ar' ? 'منتجات طازجة' : 'Fresh Products',
                description: language === 'ar'
                  ? 'نختار أفضل المنتجات الطازجة لك'
                  : 'We select the best fresh products for you'
              },
              {
                icon: "💯",
                title: language === 'ar' ? 'ضمان الجودة' : 'Quality Guaranteed',
                description: language === 'ar'
                  ? 'نضمن جودة جميع منتجاتنا'
                  : 'We guarantee the quality of all our products'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-text-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;