
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Image } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Diriyah Gate Development Authority (DGDA)",
      company: "EJADA Systems",
      period: "March 2022",
      description: "Comprehensive SharePoint management and development project involving five SharePoint On-Premise 2019 systems and SharePoint Online solutions.",
      technologies: [".NET Framework", "C#", "JavaScript", "ReactJS", "SharePoint 2019", "SharePoint Online", "Power Apps", "Power Automate", "Azure Services", "REST API", "SOAP"],
      responsibilities: [
        "Managing and maintaining five SharePoint On-Premise 2019 systems",
        "Developing backend and frontend layers using .NET Framework and JavaScript",
        "Managing Internal Portal product on SharePoint Online using ReactJS",
        "Implementing integration layers with third-party vendors and two-factor authentication",
        "Leading team of developers and preparing technical design documents",
        "Utilizing Azure services for application enhancements"
      ],
      featured: true
    },
    {
      title: "STCPay Core Banking Integration",
      company: "EJADA Systems",
      period: "January 2020 - February 2022",
      description: "Mission-critical banking integration system for STCPay channels including Mobile App, Employee Portal and Merchant Portal.",
      technologies: [".NET Framework", "C#", "Web Services", "LINQ", "Windows Services", "SQL", "REST API", "SOAP", "GIT", "TFS", "GitLab"],
      responsibilities: [
        "Developed Core Banking Services and Integration layers for STCPay Channels",
        "Implemented Integration Layers with third parties (Government agencies and Banks)",
        "Designed unit, client and full cycle testing",
        "Provided L3 Support for production issues"
      ],
      featured: true
    },
    {
      title: "Saudi Ministry of Energy Portal",
      company: "EJADA Systems",
      period: "April 2019 - December 2019",
      description: "Enterprise portal development using Microsoft SharePoint 2016 On-premises for the Saudi Ministry of Energy.",
      technologies: ["SharePoint 2016", "ASP.NET", "C#", "JavaScript", "jQuery", "SOAP UI"],
      responsibilities: [
        "Participated in developing Saudi Ministry of Energy portal",
        "Created data model for the project",
        "Implemented web services for database integration",
        "Handled communication with Integration and Database teams"
      ],
      featured: false
    },
    {
      title: "Saudi Electricity Contractor Portal",
      company: "EJADA Systems",
      period: "January 2019 - March 2019",
      description: "SharePoint portal for handling contractors project workflow with advanced reporting and dashboard capabilities.",
      technologies: ["SharePoint 2016", "ASP.NET", "C#", "NINTEX Workflow", "JavaScript", "CAML Query", "Power BI", "Crystal Reports"],
      responsibilities: [
        "Developed contractor portal with workflow management using SharePoint 2016 and NINTEX",
        "Built integration services with Saudi Electricity internal systems",
        "Generated reports using SAP Crystal Reports",
        "Created dashboards using Power BI"
      ],
      featured: false
    },
    {
      title: "Saudi Air Navigation System",
      company: "EJADA Systems",
      period: "October 2018 - December 2018",
      description: "Official website development for Saudi Air Navigation System using Microsoft SharePoint 2016.",
      technologies: ["SharePoint 2016", "ASP.NET", "C#", "JavaScript", "jQuery"],
      responsibilities: [
        "Participated in creating Saudi Air Navigation System official website",
        "Provided ongoing support and issue resolution"
      ],
      featured: false
    },
    {
      title: "NCB Capital (Idikhar) Upgrade",
      company: "EJADA Systems",
      period: "August 2018 - October 2018",
      description: "Major SharePoint upgrade project from SharePoint 2010 to SharePoint 2013 with enhanced authentication.",
      technologies: ["SharePoint 2013", "ASP.NET", "C#", "JavaScript"],
      responsibilities: [
        "Worked with offshore team to upgrade from SharePoint 2010 to 2013",
        "Updated theme and website structure",
        "Implemented form-based authentication for external users"
      ],
      featured: false
    },
    {
      title: "DDS Program for Saudi Air Navigation",
      company: "EJADA Systems",
      period: "June 2018 - August 2018",
      description: "Custom tracking system for meetings, attendance, and KPIs across multiple departments.",
      technologies: ["SharePoint Online", "JavaScript", "jQuery", "HTML"],
      responsibilities: [
        "Implemented DDS program from scratch",
        "Created meeting tracking system with various filters (Daily, Weekly, Monthly)",
        "Developed attendance and KPI tracking for employees",
        "Gathered requirements from business users across departments"
      ],
      featured: false
    },
    {
      title: "Saudi Telecom Company (STCSC) Internal Portal",
      company: "EJADA Systems",
      period: "October 2017 - June 2018",
      description: "Comprehensive internal portal with workflow automation and POS system integration.",
      technologies: ["SharePoint 2016", "ASP.NET", "C#", "JavaScript", "jQuery", "CAML Query", "SharePoint Designer", "Crystal Reports"],
      responsibilities: [
        "Developed STC internal portal using SharePoint 2016 On-premises",
        "Designed and implemented 50+ workflow automation processes",
        "Created POS system from scratch for STC stores",
        "Generated POS invoices using SAP Crystal Reports",
        "Implemented web service integration with STC CRM system",
        "Provided training sessions to IT department and business users"
      ],
      featured: true
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
              Showcase of enterprise solutions delivered across government and private sectors
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
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-blue-400 font-semibold text-sm">{project.company}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-400 text-sm">{project.period}</span>
                    </div>
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
                        {project.technologies.slice(0, 6).map((tech) => (
                          <span key={tech} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="text-slate-400 text-xs px-2 py-1">
                            +{project.technologies.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Details
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
                    
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-blue-400 font-semibold text-xs">{project.company}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-400 text-xs">{project.period}</span>
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
