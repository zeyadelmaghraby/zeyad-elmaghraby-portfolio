import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Image } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "DGDA Internal Portal",
      description: "Comprehensive internal portal for the General Directorate of Drugs Affairs, streamlining drug registration and approval processes with automated workflows.",
      technologies: ["SharePoint Online", "ReactJS", "Power Automate", "Power BI", "Azure"],
      responsibilities: [
        "Led full-stack development using SharePoint Online and ReactJS",
        "Implemented automated approval workflows reducing processing time by 60%",
        "Integrated Power BI dashboards for real-time analytics",
        "Ensured regulatory compliance and security standards"
      ],
      image: "photo-1461749280684-dccba630e2f6",
      featured: true
    },
    {
      title: "STCPay Core Banking Integration",
      description: "Mission-critical banking integration system handling thousands of daily transactions with multiple payment gateways and financial institutions.",
      technologies: [".NET Framework", "REST APIs", "SQL Server", "Banking APIs", "Security Protocols"],
      responsibilities: [
        "Architected and developed REST APIs for banking transactions",
        "Implemented security protocols for financial data protection",
        "Integrated with multiple third-party banking services",
        "Optimized performance for high-volume transaction processing"
      ],
      image: "photo-1486312338219-ce68d2c6f44d",
      featured: true
    },
    {
      title: "Saudi Ministry of Energy Portal",
      description: "Enterprise document management portal for the Ministry of Energy, facilitating regulatory compliance and internal document workflows.",
      technologies: ["SharePoint 2016", "C#", "SQL Server", "Custom Web Parts", "Workflows"],
      responsibilities: [
        "Migrated legacy systems to SharePoint 2016 platform",
        "Developed custom web parts and automation workflows",
        "Implemented document approval processes for compliance",
        "Provided training and technical documentation"
      ],
      image: "photo-1498050108023-c5249f4df085",
      featured: false
    },
    {
      title: "POS System for STC Stores",
      description: "Point-of-sale system integrated with CRM for STC retail stores, featuring real-time inventory management and comprehensive reporting.",
      technologies: ["C#", "CRM Integration", "Crystal Reports", "SQL Server", "WinForms"],
      responsibilities: [
        "Developed desktop POS application using C# and WinForms",
        "Integrated with existing CRM system for customer management",
        "Created comprehensive reporting system using Crystal Reports",
        "Implemented real-time inventory tracking and management"
      ],
      image: "photo-1487058792275-0ad4aaf24ca7",
      featured: false
    },
    {
      title: "ECG-based Biometric Recognition",
      description: "Innovative bachelor's degree project combining C# and MATLAB for ECG signal processing and biometric identification using advanced algorithms.",
      technologies: ["C#", "MATLAB", "Signal Processing", "Machine Learning", "Biometrics"],
      responsibilities: [
        "Developed ECG signal processing algorithms in MATLAB",
        "Created C# application for real-time biometric recognition",
        "Implemented machine learning models for pattern recognition",
        "Achieved 95% accuracy in biometric identification"
      ],
      image: "photo-1487958449943-2429e8be8625",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Showcase of enterprise solutions and innovative projects delivered across various domains
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="relative h-48 bg-slate-700 flex items-center justify-center">
                    <Image className="w-16 h-16 text-slate-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {project.responsibilities.slice(0, 3).map((resp, idx) => (
                          <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-blue-400 mt-1.5 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Other Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="h-32 bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                      <Image className="w-12 h-12 text-slate-500" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-slate-400 text-xs px-2 py-1">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
