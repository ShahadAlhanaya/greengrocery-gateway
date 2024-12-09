import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  question: {
    en: string;
    ar: string;
  };
  answer: {
    en: string;
    ar: string;
  };
}

const faqData: FAQItem[] = [
  {
    id: "track-order",
    question: {
      en: "How can I track my order?",
      ar: "كيف يمكنني تتبع طلبي؟",
    },
    answer: {
      en: "You can track your order in the app by navigating to the 'Orders' section.",
      ar: "يمكنك تتبع طلبك في التطبيق من خلال الانتقال إلى قسم 'الطلبات'.",
    },
  },
  {
    id: "delivery-hours",
    question: {
      en: "What are the delivery hours?",
      ar: "ما هي أوقات التوصيل؟",
    },
    answer: {
      en: "We deliver from 8 AM to 10 PM, 7 days a week.",
      ar: "نقوم بالتوصيل من الساعة 8 صباحاً حتى 10 مساءً، طوال أيام الأسبوع.",
    },
  },
  {
    id: "payment-methods",
    question: {
      en: "What payment methods do you accept?",
      ar: "ما هي طرق الدفع المقبولة؟",
    },
    answer: {
      en: "We accept credit cards, debit cards, and cash on delivery.",
      ar: "نقبل بطاقات الائتمان، وبطاقات الخصم، والدفع نقداً عند التوصيل.",
    },
  },
  {
    id: "schedule-delivery",
    question: {
      en: "Can I schedule a delivery?",
      ar: "هل يمكنني جدولة التوصيل؟",
    },
    answer: {
      en: "Yes, you can schedule a delivery time that suits you in the app.",
      ar: "نعم، يمكنك جدولة وقت التوصيل المناسب لك في التطبيق.",
    },
  },
];

const FAQ = () => {
  const { language, isRTL } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <h1 className={`text-4xl font-bold mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
        {language === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
      </h1>
      
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="border rounded-lg overflow-hidden hover:border-accent transition-colors"
          >
            <AccordionTrigger className={`px-6 py-4 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}>
              <span className="text-lg">
                {language === 'en' ? faq.question.en : faq.question.ar}
              </span>
            </AccordionTrigger>
            <AccordionContent className={`px-6 py-4 text-text-light ${isRTL ? 'text-right' : 'text-left'}`}>
              {language === 'en' ? faq.answer.en : faq.answer.ar}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;