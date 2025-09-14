import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import WebCrawlerSection from "@/components/WebCrawlerSection";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { 
  Scale, 
  TrendingUp, 
  BarChart3, 
  Users
} from "lucide-react";
import legalImage from "@/assets/legal-assistant.jpg";
import investmentImage from "@/assets/investment-advice.jpg";
import demographicsImage from "@/assets/demographics.jpg";

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "SacInvest - Sacramento Real Estate Investment Platform";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Intelligent real estate investment platform for Sacramento. AI-powered market analysis, legal insights, and demographic intelligence for smarter property investments.');
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <HeroSection />
      
      <FeatureCard
        icon={<Scale className="h-8 w-8" />}
        title="Legal Assistant"
        description="Navigate complex real estate regulations with confidence. Our AI-powered legal assistant helps you understand contracts, zoning laws, and compliance requirements specific to Sacramento's market."
        image={legalImage}
        imageAlt="Legal documents and scales representing legal assistance"
        animationClass="scroll-slide-in-left"
      />
      
      <WebCrawlerSection />
      
      <FeatureCard
        icon={<TrendingUp className="h-8 w-8" />}
        title="Investment Advice"
        description="Make data-driven investment decisions with our comprehensive market analysis. Get personalized recommendations based on your portfolio, risk tolerance, and investment goals."
        image={investmentImage}
        imageAlt="Investment growth charts and financial analytics"
        reverse
        animationClass="scroll-slide-in-right"
      />
      
      <FeatureCard
        icon={<Users className="h-8 w-8" />}
        title="Sacramento Demographics"
        description="Understand your target market with detailed demographic insights. Access population trends, income distribution, and growth patterns to identify the most promising investment opportunities."
        image={demographicsImage}
        imageAlt="Sacramento demographics and population data visualization"
        animationClass="scroll-slide-in-left"
      />
      
      {/* Footer placeholder */}
      <footer className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Real Estate Investments?</h3>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join Sacramento's smartest investors and start making data-driven decisions today.
          </p>
          <div className="text-sm text-primary-foreground/60">
            © 2024 SacInvest. Building the future of real estate investment in Sacramento.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
