
import { MapPin, Clock, Star, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: MapPin,
    title: "Location-Based Search",
    description: "Find fresh food vendors and markets within your preferred distance range"
  },
  {
    icon: Clock,
    title: "Real-Time Hours",
    description: "Get up-to-date information on vendor hours and seasonal availability"
  },
  {
    icon: Star,
    title: "Verified Reviews",
    description: "Read authentic reviews from local customers to make informed choices"
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All vendors are verified for quality standards and food safety practices"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Fresh Food Finder?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We make it easy to discover and connect with local food sources in your community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white"
            >
              <div className="inline-flex p-4 rounded-2xl bg-green-100 mb-6">
                <feature.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
