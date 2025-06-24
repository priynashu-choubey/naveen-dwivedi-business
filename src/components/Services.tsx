
import { Building, MapPin, Leaf, Droplets, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    icon: Building,
    titleKey: "service.construction.title",
    descKey: "service.construction.desc",
    color: "text-blue-600"
  },
  {
    icon: Building,
    titleKey: "service.structural.title",
    descKey: "service.structural.desc",
    color: "text-green-600"
  },
  {
    icon: Leaf,
    titleKey: "service.environmental.title",
    descKey: "service.environmental.desc",
    color: "text-emerald-600"
  },
  {
    icon: Droplets,
    titleKey: "service.drainage.title",
    descKey: "service.drainage.desc",
    color: "text-cyan-600"
  },
  {
    icon: Search,
    titleKey: "service.survey.title",
    descKey: "service.survey.desc",
    color: "text-purple-600"
  }
];

export const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-2 border-0 shadow-lg"
            >
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300 mb-6`}>
                  <service.icon className={`h-8 w-8 ${service.color} group-hover:text-blue-600 transition-colors duration-300`} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(service.descKey)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
