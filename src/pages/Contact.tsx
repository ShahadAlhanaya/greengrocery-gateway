import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { language, isRTL } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
      <section className={`${isRTL ? 'text-right' : 'text-left'}`}>
        <h1 className="text-4xl font-bold mb-8">
          {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
        </h1>

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

export default Contact;