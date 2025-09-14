import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">SacInvest</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/agent" className="text-foreground hover:text-primary transition-colors">
              SacInvest Agent
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;