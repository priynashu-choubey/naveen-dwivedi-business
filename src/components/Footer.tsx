
import { Building, Phone, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Civil Engineering Services</h3>
                <p className="text-gray-400 text-sm">Beohari • Madhya Pradesh</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.contact')}</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>073898 31942</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span>WARD NO. 07, BLOCK OFFICE<br />Beohari, Madhya Pradesh 484774</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>{t('footer.workingHours')}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3 text-gray-300">
              <li>{t('service.construction.title')}</li>
              <li>{t('service.structural.title')}</li>
              <li>{t('service.environmental.title')}</li>
              <li>{t('service.drainage.title')}</li>
              <li>{t('service.survey.title')}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};
