
import { MapPin, Phone, Clock, Building } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            संपर्क करें
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            आपके प्रोजेक्ट के लिए आज ही हमसे संपर्क करें
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 shadow-lg border-0">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">पता</h3>
                  <p className="text-gray-600 leading-relaxed">
                    WARD NO. 07, BLOCK OFFICE<br />
                    Beohari, Madhya Pradesh 484774
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 shadow-lg border-0">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">फोन</h3>
                  <p className="text-gray-600 text-lg font-semibold">073898 31942</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 shadow-lg border-0">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">कार्य समय</h3>
                  <p className="text-gray-600">सुबह 9 बजे - शाम 7 बजे</p>
                  <p className="text-sm text-orange-600 mt-1">आज शाम 7 बजे बंद</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 shadow-lg border-0">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Building className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">सेवा क्षेत्र</h3>
                  <p className="text-gray-600">जैसिंहनगर और आसपास के क्षेत्र</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-12 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              अभी कॉल करें: 073898 31942
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
