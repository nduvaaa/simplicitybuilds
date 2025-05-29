
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-hero">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-500 font-semibold px-4 py-1 rounded-full mb-4 fade-in">
              SimplicityBuilds
            </div>
            <h1 className="heading-lg mb-6 fade-in-delay-1">
              Transforming <span className="text-blue-500">Business Ideas</span> Into Digital Success
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg fade-in-delay-2">
              We specialize in creating custom, responsive websites and powerful web applications
              that help businesses grow, increase revenue, and connect with customers worldwide.
            </p>
            <div className="flex flex-wrap gap-4 fade-in-delay-3">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                <a href="#about">Learn More</a>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                <a href="#contact">Request a Quote</a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative z-10 bg-white p-4 rounded-lg shadow-xl transform rotate-3 fade-in-delay-2">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Modern workspace with code" 
                className="rounded w-full h-auto"
              />
            </div>
            <div className="absolute inset-0 bg-blue-500 rounded-lg transform -rotate-3 translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
