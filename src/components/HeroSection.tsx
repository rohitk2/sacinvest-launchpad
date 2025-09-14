import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/sacramento-homes-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Sacramento Real Estate Investment Opportunities" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto scroll-fade-in">
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="h-12 w-12 text-accent mr-3 animate-float" />
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              SacInvest
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Your intelligent real estate investment companion for Sacramento. 
            Powered by AI-driven market analysis, legal insights, and demographic intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold shadow-strong transition-all hover:scale-105"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white bg-white/20 hover:bg-white/30 px-8 py-6 text-lg backdrop-blur-sm font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-1 h-8 bg-white/30 rounded-full relative">
            <div className="w-1 h-3 bg-white rounded-full absolute top-0 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;