
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 opacity-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Profile Section */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
            ZE
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Hi, I'm Zeyad Elmaghraby
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-300 font-semibold mb-6">
            Technical Team Lead
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            Building scalable enterprise solutions using .NET, SharePoint, and Azure
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Download className="mr-2" size={20} />
              View Resume
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2" size={20} />
                Let's Connect
              </Button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-slate-400" size={32} />
          </div>
        </div>
      </div>

      {/* Quick stats section */}
      <div className="absolute bottom-0 left-0 right-0 bg-slate-800/50 backdrop-blur-sm border-t border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">8+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
              <div className="text-slate-300">Microsoft Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
