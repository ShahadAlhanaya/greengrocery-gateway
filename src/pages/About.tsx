import { useLanguage } from "@/contexts/LanguageContext";

interface Milestone {
  year: number;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
}

const milestones: Milestone[] = [
  {
    year: 2016,
    title: {
      en: "Our Journey Begins",
      ar: "بداية رحلتنا",
    },
    description: {
      en: "GroceryApp launched with 50 products and 10 delivery partners.",
      ar: "تم إطلاق GroceryApp مع 50 منتجًا و 10 شركاء توصيل.",
    },
  },
  {
    year: 2018,
    title: {
      en: "Expanding Our Services",
      ar: "توسيع خدماتنا",
    },
    description: {
      en: "Expanded to include fresh produce and partnered with 100 local stores.",
      ar: "توسعنا لنشمل المنتجات الطازجة وشراكة مع 100 متجر محلي.",
    },
  },
  {
    year: 2020,
    title: {
      en: "Major Milestone",
      ar: "إنجاز كبير",
    },
    description: {
      en: "Reached 1 million orders delivered.",
      ar: "وصلنا إلى مليون طلب تم توصيله.",
    },
  },
  {
    year: 2023,
    title: {
      en: "Innovation in Delivery",
      ar: "الابتكار في التوصيل",
    },
    description: {
      en: "Introduced express delivery, fulfilling orders in under 30 minutes.",
      ar: "قدمنا خدمة التوصيل السريع، مع تنفيذ الطلبات في أقل من 30 دقيقة.",
    },
  },
];

const About = () => {
  const { language, isRTL } = useLanguage();

  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 max-w-4xl animate-fade-in">
      <h1
        className={`text-4xl font-bold mb-8 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {language === "en" ? "About Us" : "معلومات عنا"}
      </h1>
      {/* Mission Section */}
      <section className={`mb-12 ${isRTL ? "text-right" : "text-left"}`}>
        <h2 className="text-2xl font-semibold mb-4">
          {language === "en" ? "Our Mission" : "مهمتنا"}
        </h2>
        <p className="text-text-light leading-relaxed">
          {language === "en"
            ? "Our mission is to simplify grocery shopping by offering fast, reliable, and convenient delivery services to your doorstep. From fresh produce to everyday essentials, we are here to make your life easier."
            : "مهمتنا هي تبسيط التسوق من خلال تقديم خدمات توصيل سريعة وموثوقة ومريحة إلى باب منزلك. من المنتجات الطازجة إلى الضروريات اليومية، نحن هنا لجعل حياتك أسهل."}
        </p>
      </section>
      {/* Founding Story Section */}
      <section className={`mb-12 ${isRTL ? "text-right" : "text-left"}`}>
        <h2 className="text-2xl font-semibold mb-4">
          {language === "en" ? "Our Story" : "قصتنا"}
        </h2>
        <p className="text-text-light leading-relaxed">
          {language === "en"
            ? "Founded in 2016, GroceryApp was born out of a vision to revolutionize the way people shop for groceries. What started as a small operation has grown into a leading platform serving millions of households."
            : "تأسس GroceryApp في عام 2016 من رؤية لإحداث ثورة في طريقة تسوق البقالة. ما بدأ كعملية صغيرة نما ليصبح منصة رائدة تخدم ملايين المنازل."}
        </p>
      </section>
      {/* Timeline Section */}
      <section className={`${isRTL ? "text-right" : "text-left"}`}>
        <h2 className="text-2xl font-semibold mb-6">
          {language === "en" ? "Our Journey" : "رحلتنا"}
        </h2>
        <div className="space-y-8">
          {milestones.map((milestone) => (
            <div
              key={milestone.year}
              className="flex flex-col md:flex-row gap-4 items-start border-l-2 border-accent pl-6 relative"
            >
              <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-text font-medium">
                {milestone.year}
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2">
                  {language === "en" ? milestone.title.en : milestone.title.ar}
                </h3>
                <p className="text-text-light">
                  {language === "en"
                    ? milestone.description.en
                    : milestone.description.ar}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
