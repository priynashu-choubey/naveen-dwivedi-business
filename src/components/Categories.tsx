
import { Apple, Carrot, Milk, Wheat, Fish, Beef } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  { icon: Apple, name: "Fresh Fruits", count: "245+ vendors", color: "text-red-500" },
  { icon: Carrot, name: "Vegetables", count: "189+ vendors", color: "text-orange-500" },
  { icon: Milk, name: "Dairy Products", count: "156+ vendors", color: "text-blue-500" },
  { icon: Wheat, name: "Grains & Bread", count: "134+ vendors", color: "text-yellow-600" },
  { icon: Fish, name: "Fresh Seafood", count: "98+ vendors", color: "text-cyan-500" },
  { icon: Beef, name: "Meat & Poultry", count: "112+ vendors", color: "text-red-600" },
];

export const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find exactly what you're looking for with our organized categories of fresh, local food
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-2 border-0 shadow-lg"
            >
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gray-50 group-hover:bg-green-50 transition-colors duration-300 mb-6`}>
                  <category.icon className={`h-8 w-8 ${category.color} group-hover:text-green-600 transition-colors duration-300`} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-lg">
                  {category.count}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
