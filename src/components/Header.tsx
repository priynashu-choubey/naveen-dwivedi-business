
import { Building, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-xl">
              <Building className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Civil Engineering Services</h1>
              <p className="text-sm text-gray-600">Beohari • Madhya Pradesh</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">{t('nav.services')}</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">{t('nav.about')}</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">{t('nav.contact')}</a>
            <LanguageToggle />
            <Button className="bg-blue-600 hover:bg-blue-700">
              {t('nav.contactUs')}
            </Button>
          </nav>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};
