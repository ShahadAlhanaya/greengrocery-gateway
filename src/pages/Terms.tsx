import { useLanguage } from "@/contexts/LanguageContext";

const Terms = () => {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: "Terms & Conditions",
      intro: "These Terms & Conditions govern the use of 🥬 Grocery. By using our services, you agree to these terms.",
      sections: [
        {
          title: "User Obligations",
          content: "Users must provide accurate information and maintain the security of their account credentials. You agree to use the app responsibly and not engage in any activities that may disrupt our services or compromise other users' experiences."
        },
        {
          title: "Order Policies",
          content: "All orders are subject to availability and delivery zone restrictions. We reserve the right to cancel or modify orders if items are out of stock or if we suspect fraudulent activity. Prices and availability are subject to change without notice."
        },
        {
          title: "Refunds and Returns",
          content: "Refunds are processed for eligible items returned within 7 days of delivery. Items must be unused and in their original packaging. Perishable goods cannot be returned unless they were delivered in an unsatisfactory condition."
        },
        {
          title: "Limitation of Liability",
          content: "🥬 Grocery is not liable for delays or failures in performance caused by factors beyond our reasonable control, including but not limited to weather conditions, traffic, or supplier delays."
        },
        {
          title: "Account Security",
          content: "You are responsible for maintaining the confidentiality of your account information and password. Any activities that occur under your account are your responsibility."
        },
        {
          title: "Modifications",
          content: "We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms. Users will be notified of significant changes via email or app notifications."
        }
      ],
      lastUpdated: "Last updated: March 2024"
    },
    ar: {
      title: "الشروط والأحكام",
      intro: "تحكم هذه الشروط والأحكام استخدام 🥬 جروسري. باستخدام خدماتنا، فإنك توافق على هذه الشروط.",
      sections: [
        {
          title: "التزامات المستخدم",
          content: "يجب على المستخدمين تقديم معلومات دقيقة والحفاظ على أمان بيانات اعتماد حسابهم. أنت توافق على استخدام التطبيق بمسؤولية وعدم المشاركة في أي أنشطة قد تعطل خدماتنا أو تؤثر على تجارب المستخدمين الآخرين."
        },
        {
          title: "سياسات الطلب",
          content: "تخضع جميع الطلبات لتوفر المنتجات وقيود منطقة التوصيل. نحتفظ بالحق في إلغاء أو تعديل الطلبات إذا نفدت المنتجات أو إذا اشتبهنا في نشاط احتيالي. الأسعار والتوفر عرضة للتغيير دون إشعار."
        },
        {
          title: "المبالغ المستردة والإرجاع",
          content: "تتم معالجة المبالغ المستردة للمنتجات المؤهلة المرتجعة خلال 7 أيام من التوصيل. يجب أن تكون المنتجات غير مستخدمة وفي عبواتها الأصلية. لا يمكن إرجاع السلع القابلة للتلف ما لم يتم توصيلها في حالة غير مرضية."
        },
        {
          title: "حدود المسؤولية",
          content: "🥬 جروسري غير مسؤول عن التأخير أو الفشل في الأداء الناجم عن عوامل خارجة عن سيطرتنا المعقولة، بما في ذلك على سبيل المثال لا الحصر الظروف الجوية أو حركة المرور أو تأخيرات الموردين."
        },
        {
          title: "أمن الحساب",
          content: "أنت مسؤول عن الحفاظ على سرية معلومات حسابك وكلمة المرور الخاصة بك. أي أنشطة تحدث تحت حسابك هي مسؤوليتك."
        },
        {
          title: "التعديلات",
          content: "نحتفظ بالحق في تحديث هذه الشروط في أي وقت. استمرار استخدام خدماتنا بعد التغييرات يشكل قبولاً للشروط المعدلة. سيتم إخطار المستخدمين بالتغييرات المهمة عبر البريد الإلكتروني أو إشعارات التطبيق."
        }
      ],
      lastUpdated: "آخر تحديث: مارس 2024"
    }
  };

  const currentContent = content[language];

  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 max-w-4xl animate-fade-in">
      <h1 className={`text-4xl font-bold mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
        {currentContent.title}
      </h1>
      
      <div className={`text-text-light mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
        {currentContent.intro}
      </div>

      <div className="space-y-8">
        {currentContent.sections.map((section, index) => (
          <section key={index} className="bg-background-light p-6 rounded-lg">
            <h2 className={`text-xl font-bold mb-4 text-text ${isRTL ? 'text-right' : 'text-left'}`}>
              {section.title}
            </h2>
            <p className={`text-text-light ${isRTL ? 'text-right' : 'text-left'}`}>
              {section.content}
            </p>
          </section>
        ))}
      </div>

      <div className={`text-sm text-text-light mt-12 ${isRTL ? 'text-right' : 'text-left'}`}>
        {currentContent.lastUpdated}
      </div>
    </div>
  );
};

export default Terms;