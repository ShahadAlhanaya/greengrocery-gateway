import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { language } = useLanguage();

  return (
    <div className="animate-fade-in">
      <section className="bg-background-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar' 
                ? 'توصيل البقالة إلى باب منزلك' 
                : 'Grocery Delivery to Your Doorstep'}
            </h1>
            <p className="text-text-light text-lg mb-8">
              {language === 'ar'
                ? 'اطلب البقالة الطازجة وسنوصلها إلى منزلك في أسرع وقت'
                : 'Order fresh groceries and we will deliver them to your home in no time'}
            </p>
            <Button className="bg-accent hover:bg-accent-hover text-text font-medium text-lg px-8 py-6">
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