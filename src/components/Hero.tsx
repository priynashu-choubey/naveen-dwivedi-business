
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-blue-600">सिविल इंजीनियरिंग</span> सेवाएँ
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            उत्कृष्टता और नवाचार के साथ आपके निर्माण सपनों को साकार करना
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            जैसिंहनगर और आसपास के क्षेत्रों में विशेषज्ञ सिविल इंजीनियरिंग सेवाएँ
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              073898 31942
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg">
              <MapPin className="mr-2 h-5 w-5" />
              हमारा पता देखें
            </Button>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">कार्य समय</h3>
                <p className="text-gray-600">सुबह 9 बजे - शाम 7 बजे</p>
                <p className="text-sm text-orange-600">आज शाम 7 बजे बंद</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">सेवा क्षेत्र</h3>
                <p className="text-gray-600">जैसिंहनगर और आसपास के क्षेत्र</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
