import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  animationClass?: string;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  image, 
  imageAlt, 
  reverse = false,
  animationClass = "scroll-fade-in"
}: FeatureCardProps) => {
  return (
    <div className={`py-20 ${animationClass}`}>
      <div className="container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`space-y-6 ${reverse ? 'lg:order-2' : ''}`}>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                {icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {title}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className={`${reverse ? 'lg:order-1' : ''}`}>
            <Card className="feature-card overflow-hidden border-0 shadow-medium">
              <img 
                src={image} 
                alt={imageAlt}
                className="w-full h-80 object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;