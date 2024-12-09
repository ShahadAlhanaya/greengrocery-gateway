import { useLanguage } from "@/contexts/LanguageContext";
import { Clock } from "lucide-react";

const About = () => {
  const { language, isRTL } = useLanguage();

  const milestones = [
    {
      year: "2016",
      en: "GroceryApp launched with 50 products and 10 delivery partners",
      ar: "تم إطلاق GroceryApp مع 50 منتجًا و 10 شركاء توصيل"
    },
    {
      year: "2018",
      en: "Expanded to include fresh produce and partnered with 100 local stores",
      ar: "توسعنا لنشمل المنتجات الطازجة وشراكة مع 100 متجر محلي"
    },
    {
      year: "2020",
      en: "Reached 1 million orders delivered",
      ar: "وصلنا إلى مليون طلب تم توصيله"
    },
    {
      year: "2023",
      en: "Introduced express delivery, fulfilling orders in under 30 minutes",
      ar: "قدمنا خدمة التوصيل السريع، مع تنفيذ الطلبات في أقل من 30 دقيقة"
    }
  ];

  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 max-w-4xl animate-fade-in">
      <section className={`${isRTL ? 'text-right' : 'text-left'}`}>
        <h1 className="text-4xl font-bold mb-8">
          {language === 'en' ? 'About Us' : 'من نحن'}
        </h1>
        
        {/* Mission */}
        <div className="mb-8">
          <p className="text-text-light leading-relaxed">
            {language === 'en' 
              ? "Our mission is to simplify grocery shopping by offering fast, reliable, and convenient delivery services to your doorstep. From fresh produce to everyday essentials, we are here to make your life easier."
              : "مهمتنا هي تبسيط التسوق من خلال تقديم خدمات توصيل سريعة وموثوقة ومريحة إلى باب منزلك. من المنتجات الطازجة إلى الضروريات اليومية، نحن هنا لجعل حياتك أسهل."}
          </p>
        </div>

        {/* Founding Story */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {language === 'en' ? 'Our Story' : 'قصتنا'}
          </h2>
          <p className="text-text-light leading-relaxed">
            {language === 'en'
              ? "Founded in 2016, GroceryApp was born out of a vision to revolutionize the way people shop for groceries. What started as a small operation has grown into a leading platform serving millions of households."
              : "تأسس GroceryApp في عام 2016 من رؤية لإحداث ثورة في طريقة تسوق البقالة. ما بدأ كعملية صغيرة نما ليصبح منصة رائدة تخدم ملايين المنازل."}
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            {language === 'en' ? 'Our Journey' : 'مسيرتنا'}
          </h2>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-6 opacity-0 animate-[fade-in_0.5s_ease-out_forwards]`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  flexDirection: isRTL ? 'row' : 'row-reverse'
                }}
              >
                <div className="flex-grow pt-2">
                  <div className="font-bold text-2xl mb-2 text-accent">{milestone.year}</div>
                  <p className="text-text-light text-lg">
                    {language === 'en' ? milestone.en : milestone.ar}
                  </p>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center transform transition-transform hover:scale-110 hover:rotate-12">
                    <Clock className="h-8 w-8 text-text" />
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className={`absolute w-0.5 bg-accent/20 h-24 ${isRTL ? '-left-3' : '-right-3'} top-20 transform ${isRTL ? '-translate-x-1/2' : 'translate-x-1/2'}`} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;