import { Building2 } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">SacInvest</span>
          </div>
          
          {/* Empty navigation - will be filled later */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation links will go here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;