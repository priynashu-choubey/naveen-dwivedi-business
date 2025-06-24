
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Find <span className="text-green-600">Fresh Food</span> Near You
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover local farmers markets, organic stores, and fresh produce vendors in your neighborhood
          </p>
          
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search for fresh food, markets, vendors..."
                  className="pl-12 py-4 text-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Enter your location"
                  className="pl-12 py-4 text-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <Button className="px-8 py-4 text-lg bg-green-600 hover:bg-green-700 transition-colors duration-200">
                Find Food
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-gray-500">
            <span className="bg-white px-4 py-2 rounded-full shadow">🥬 Organic Vegetables</span>
            <span className="bg-white px-4 py-2 rounded-full shadow">🍎 Fresh Fruits</span>
            <span className="bg-white px-4 py-2 rounded-full shadow">🧀 Local Dairy</span>
            <span className="bg-white px-4 py-2 rounded-full shadow">🍞 Artisan Bread</span>
          </div>
        </div>
      </div>
    </section>
  );
};
