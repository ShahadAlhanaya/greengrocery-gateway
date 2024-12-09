import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      intro: "At 🥬 Grocery, your privacy is important to us. This policy outlines how we collect, use, and safeguard your personal information.",
      sections: [
        {
          title: "Data Collection",
          content: "We collect essential information including your name, email address, phone number, and delivery address. This information is necessary to process your orders and provide you with the best possible service. We also collect data about your app usage to improve our services and your shopping experience."
        },
        {
          title: "Data Usage",
          content: "Your personal information is used primarily for processing your orders, communicating important updates, and providing personalized recommendations. We may also use your data to send you promotional offers, but you can opt out of these communications at any time."
        },
        {
          title: "Data Protection",
          content: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse. Your data is encrypted during transmission and stored securely on our protected servers."
        },
        {
          title: "Data Sharing",
          content: "We respect your privacy and do not sell your personal information to third parties. We only share your information with delivery partners and payment processors as necessary to complete your orders. These partners are bound by strict confidentiality agreements."
        },
        {
          title: "Your Rights",
          content: "You have the right to access, update, or request deletion of your personal information at any time. To exercise these rights, please contact our privacy team at privacy@groceryapp.com. We will respond to your request within 30 days."
        },
        {
          title: "Cookies and Tracking",
          content: "We use cookies and similar technologies to enhance your shopping experience and analyze app usage. You can manage your cookie preferences through your browser settings."
        }
      ],
      lastUpdated: "Last updated: March 2024"
    },
    ar: {
      title: "سياسة الخصوصية",
      intro: "في 🥬 جروسري، خصوصيتك مهمة بالنسبة لنا. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية.",
      sections: [
        {
          title: "جمع البيانات",
          content: "نقوم بجمع المعلومات الأساسية بما في ذلك اسمك وبريدك الإلكتروني ورقم هاتفك وعنوان التوصيل. هذه المعلومات ضرورية لمعالجة طلباتك وتزويدك بأفضل خدمة ممكنة. كما نقوم بجمع بيانات حول استخدامك للتطبيق لتحسين خدماتنا وتجربة التسوق الخاصة بك."
        },
        {
          title: "استخدام البيانات",
          content: "يتم استخدام معلوماتك الشخصية بشكل أساسي لمعالجة طلباتك والتواصل بشأن التحديثات المهمة وتقديم توصيات مخصصة. قد نستخدم بياناتك أيضًا لإرسال عروض ترويجية لك، ولكن يمكنك إلغاء الاشتراك في هذه المراسلات في أي وقت."
        },
        {
          title: "حماية البيانات",
          content: "نقوم بتطبيق إجراءات أمنية قياسية في الصناعة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الكشف عنها أو إساءة استخدامها. يتم تشفير بياناتك أثناء النقل وتخزينها بشكل آمن على خوادمنا المحمية."
        },
        {
          title: "مشاركة البيانات",
          content: "نحن نحترم خصوصيتك ولا نبيع معلوماتك الشخصية لأطراف ثالثة. نشارك معلوماتك فقط مع شركاء التوصيل ومعالجي الدفع حسب الضرورة لإكمال طلباتك. هؤلاء الشركاء ملزمون باتفاقيات سرية صارمة."
        },
        {
          title: "حقوقك",
          content: "لديك الحق في الوصول إلى معلوماتك الشخصية أو تحديثها أو طلب حذفها في أي وقت. لممارسة هذه الحقوق، يرجى الاتصال بفريق الخصوصية لدينا على privacy@groceryapp.com. سنرد على طلبك في غضون 30 يومًا."
        },
        {
          title: "ملفات تعريف الارتباط والتتبع",
          content: "نستخدم ملفات تعريف الارتباط والتقنيات المماثلة لتحسين تجربة التسوق الخاصة بك وتحليل استخدام التطبيق. يمكنك إدارة تفضيلات ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك."
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

export default Privacy;