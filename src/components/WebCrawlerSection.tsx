import { Card } from "@/components/ui/card";
import { Globe, Youtube, BookOpen, Home } from "lucide-react";
import webCrawlerImage from "@/assets/web-crawler.jpg";

const WebCrawlerSection = () => {
  const dataSources = [
    {
      icon: <Youtube className="h-8 w-8" />,
      name: "YouTube",
      description: "Real estate trends & market insights",
      color: "text-red-500"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      name: "Wikipedia", 
      description: "Comprehensive area information",
      color: "text-gray-700"
    },
    {
      icon: <Home className="h-8 w-8" />,
      name: "Zillow",
      description: "Live property data & valuations",
      color: "text-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 scroll-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Globe className="h-12 w-12 text-primary mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Intelligent Web Crawler
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our advanced AI system continuously crawls the web to gather the most up-to-date 
            information from trusted sources, ensuring you have comprehensive market intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Card className="feature-card overflow-hidden border-0 shadow-medium">
              <img 
                src={webCrawlerImage} 
                alt="Web crawler collecting data from multiple sources"
                className="w-full h-80 object-cover"
              />
            </Card>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Data Sources We Monitor:
            </h3>
            
            {dataSources.map((source, index) => (
              <Card key={index} className="p-6 feature-card border border-border/50">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-background ${source.color}`}>
                    {source.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {source.name}
                    </h4>
                    <p className="text-muted-foreground">
                      {source.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebCrawlerSection;