
import React, { createContext, useContext, useState } from 'react';

type Language = 'hi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  hi: {
    // Header
    'nav.services': 'सेवाएँ',
    'nav.about': 'हमारे बारे में',
    'nav.contact': 'संपर्क',
    'nav.contactUs': 'संपर्क करें',
    
    // Hero
    'hero.title': 'सिविल इंजीनियरिंग',
    'hero.services': 'सेवाएँ',
    'hero.subtitle': 'उत्कृष्टता और नवाचार के साथ आपके निर्माण सपनों को साकार करना',
    'hero.description': 'जैसिंहनगर और आसपास के क्षेत्रों में विशेषज्ञ सिविल इंजीनियरिंग सेवाएँ',
    'hero.viewLocation': 'हमारा पता देखें',
    'hero.workingHours': 'कार्य समय',
    'hero.hours': 'सुबह 9 बजे - शाम 7 बजे',
    'hero.closesToday': 'आज शाम 7 बजे बंद',
    'hero.serviceArea': 'सेवा क्षेत्र',
    'hero.serviceAreaText': 'जैसिंहनगर और आसपास के क्षेत्र',
    
    // Services
    'services.title': 'हमारी सेवाएँ',
    'services.subtitle': 'आपके निर्माण प्रोजेक्ट्स के लिए संपूर्ण इंजीनियरिंग समाधान',
    'service.construction.title': 'निर्माण प्रबंधन',
    'service.construction.desc': 'प्रोजेक्ट योजना, बजट निर्धारण, और साइट प्रबंधन में विशेषज्ञता',
    'service.structural.title': 'संरचना डिजाइन',
    'service.structural.desc': 'मजबूत और सुरक्षित इमारतों और संरचनाओं के लिए अनुकूलित डिज़ाइन समाधान',
    'service.environmental.title': 'पर्यावरणीय इंजीनियरिंग',
    'service.environmental.desc': 'सतत विकास के लिए पर्यावरण अनुकूल समाधान और रणनीतियाँ',
    'service.drainage.title': 'भूस्खलन और जल निकासी प्रबंधन',
    'service.drainage.desc': 'जल निकासी और भूस्खलन प्रबंधन के लिए प्रभावी योजनाएँ',
    'service.survey.title': 'सर्वेक्षण सेवाएँ',
    'service.survey.desc': 'भूमि सर्वेक्षण, साइट मूल्यांकन और भूमि विकास के लिए तकनीकी सेवाएँ',
    
    // About
    'about.title': 'हमारे बारे में',
    'about.description': 'सिविल इंजीनियरिंग कंसल्टेंट्स के क्षेत्र में एक प्रतिष्ठित नाम है, जो उत्कृष्टता और नवाचार के लिए समर्पित है। हमारी टीम में अनुभवी और विशेषज्ञ इंजीनियर्स, आर्किटेक्ट्स, और प्रोजेक्ट मैनेजर्स शामिल हैं, जो आपके प्रोजेक्ट्स को सफलतापूर्वक पूरा करने के लिए तत्पर हैं।',
    'about.experience': 'वर्षों का अनुभव',
    'about.projects': 'पूर्ण प्रोजेक्ट्स',
    'about.clients': 'संतुष्ट ग्राहक',
    
    // Footer
    'footer.description': 'उत्कृष्टता और नवाचार के साथ आपके निर्माण सपनों को साकार करना। जैसिंहनगर और आसपास के क्षेत्रों में विशेषज्ञ सेवाएँ।',
    'footer.contact': 'संपर्क जानकारी',
    'footer.services': 'हमारी सेवाएँ',
    'footer.copyright': '2024 Civil Engineering Services, Beohari. सभी अधिकार सुरक्षित।',
    'footer.workingHours': 'सुबह 9 बजे - शाम 7 बजे',
  },
  en: {
    // Header
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.contactUs': 'Contact Us',
    
    // Hero
    'hero.title': 'Civil Engineering',
    'hero.services': 'Services',
    'hero.subtitle': 'Bringing your construction dreams to life with excellence and innovation',
    'hero.description': 'Expert civil engineering services in Jaisinghnagar and surrounding areas',
    'hero.viewLocation': 'View Our Location',
    'hero.workingHours': 'Working Hours',
    'hero.hours': '9 AM - 7 PM',
    'hero.closesToday': 'Closes 7 PM today',
    'hero.serviceArea': 'Service Area',
    'hero.serviceAreaText': 'Jaisinghnagar and nearby areas',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Complete engineering solutions for your construction projects',
    'service.construction.title': 'Construction Management',
    'service.construction.desc': 'Expertise in project planning, budgeting, and site management',
    'service.structural.title': 'Structural Design',
    'service.structural.desc': 'Customized design solutions for strong and safe buildings and structures',
    'service.environmental.title': 'Environmental Engineering',
    'service.environmental.desc': 'Environment-friendly solutions and strategies for sustainable development',
    'service.drainage.title': 'Landslide and Drainage Management',
    'service.drainage.desc': 'Effective plans for drainage and landslide management',
    'service.survey.title': 'Survey Services',
    'service.survey.desc': 'Land survey, site assessment and technical services for land development',
    
    // About
    'about.title': 'About Us',
    'about.description': 'A prestigious name in the field of civil engineering consultants, dedicated to excellence and innovation. Our team includes experienced and expert engineers, architects, and project managers who are ready to successfully complete your projects.',
    'about.experience': 'Years of Experience',
    'about.projects': 'Completed Projects',
    'about.clients': 'Satisfied Clients',
    
    // Footer
    'footer.description': 'Bringing your construction dreams to life with excellence and innovation. Expert services in Jaisinghnagar and surrounding areas.',
    'footer.contact': 'Contact Information',
    'footer.services': 'Our Services',
    'footer.copyright': '2024 Civil Engineering Services, Beohari. All rights reserved.',
    'footer.workingHours': '9 AM - 7 PM',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('hi');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
