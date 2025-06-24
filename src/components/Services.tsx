
import { Building, MapPin, Leaf, Droplets, Search } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Building,
    title: "निर्माण प्रबंधन",
    description: "प्रोजेक्ट योजना, बजट निर्धारण, और साइट प्रबंधन में विशेषज्ञता",
    color: "text-blue-600"
  },
  {
    icon: Building,
    title: "संरचना डिजाइन",
    description: "मजबूत और सुरक्षित इमारतों और संरचनाओं के लिए अनुकूलित डिज़ाइन समाधान",
    color: "text-green-600"
  },
  {
    icon: Leaf,
    title: "पर्यावरणीय इंजीनियरिंग",
    description: "सतत विकास के लिए पर्यावरण अनुकूल समाधान और रणनीतियाँ",
    color: "text-emerald-600"
  },
  {
    icon: Droplets,
    title: "भूस्खलन और जल निकासी प्रबंधन",
    description: "जल निकासी और भूस्खलन प्रबंधन के लिए प्रभावी योजनाएँ",
    color: "text-cyan-600"
  },
  {
    icon: Search,
    title: "सर्वेक्षण सेवाएँ",
    description: "भूमि सर्वेक्षण, साइट मूल्यांकन और भूमि विकास के लिए तकनीकी सेवाएँ",
    color: "text-purple-600"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            हमारी सेवाएँ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            आपके निर्माण प्रोजेक्ट्स के लिए संपूर्ण इंजीनियरिंग समाधान
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
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
