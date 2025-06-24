
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex p-4 rounded-2xl bg-white/10 mb-8">
            <Smartphone className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Finding Fresh Food Today
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of people discovering fresh, local food sources in their communities. 
            It's free, easy, and helps support local businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg">
              Download App
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-green-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2,500+</div>
              <div className="text-sm">Local Vendors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10,000+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
