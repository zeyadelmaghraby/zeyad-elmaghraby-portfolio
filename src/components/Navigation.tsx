
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Experience", section: "experience" },
    { name: "Projects", section: "projects" },
    { name: "Skills", section: "skills" },
    { name: "Certifications", section: "certifications" },
    { name: "Contact", section: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Avatar className="w-10 h-10">
              <AvatarImage src="/lovable-uploads/b4b6eadd-d88a-4653-8c5e-2f4b54d09fbf.png" alt="Zeyad Elmaghraby" />
              <AvatarFallback className="bg-blue-600 text-white font-bold">ZE</AvatarFallback>
            </Avatar>
            <span className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
              Zeyad Elmaghraby
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-slate-300 hover:bg-slate-700 hover:text-white"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors text-slate-300 hover:bg-slate-700 hover:text-white"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
