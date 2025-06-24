
import { Leaf, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-green-600 p-2 rounded-xl">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Fresh Food Finder</h1>
              <p className="text-sm text-gray-600">Discover Local • Eat Fresh</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Find Food</a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Categories</a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Markets</a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">About</a>
            <Button className="bg-green-600 hover:bg-green-700">
              List Your Business
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
