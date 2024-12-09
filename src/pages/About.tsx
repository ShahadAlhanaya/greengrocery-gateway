import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const About = () => {
  const { language, isRTL } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === 'en' ? 'Message Sent!' : 'تم إرسال الرسالة!',
      description: language === 'en' 
        ? 'We will get back to you soon.' 
        : 'سنقوم بالرد عليك قريباً.',
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 max-w-4xl animate-fade-in">
      {/* About Section */}
      <section className={`mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
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
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-lg mb-1">{milestone.year}</div>
                  <p className="text-text-light">
                    {language === 'en' ? milestone.en : milestone.ar}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={`${isRTL ? 'text-right' : 'text-left'}`}>
        <h2 className="text-2xl font-semibold mb-8">
          {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent shrink-0" />
              <span>+1 (555) 123-4567</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent shrink-0" />
              <span>support@groceryapp.com</span>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent shrink-0" />
              <span>123 Grocery Street, Cityville, Country</span>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={language === 'en' ? 'Your Name' : 'اسمك'}
              required
              className="border-gray-200"
            />
            
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={language === 'en' ? 'Your Email' : 'بريدك الإلكتروني'}
              required
              className="border-gray-200"
            />
            
            <Input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={language === 'en' ? 'Subject' : 'الموضوع'}
              required
              className="border-gray-200"
            />
            
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={language === 'en' ? 'Your Message' : 'رسالتك'}
              required
              className="min-h-[150px] border-gray-200"
            />
            
            <Button 
              type="submit"
              className="w-full bg-accent hover:bg-accent-hover text-text font-medium"
            >
              {language === 'en' ? 'Send Message' : 'إرسال الرسالة'}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;