
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "EJADA Systems",
      position: "Senior .NET Developer & Team Lead",
      period: "2020 - Present",
      location: "Saudi Arabia",
      type: "Full-time",
      description: "Lead development of enterprise portals and internal systems for government and private sector clients.",
      achievements: [
        "Led a team of 5 developers in delivering mission-critical SharePoint solutions",
        "Implemented Azure DevOps CI/CD pipelines reducing deployment time by 70%",
        "Architected and developed scalable web portals serving 10,000+ concurrent users",
        "Established code review processes and technical documentation standards"
      ],
      technologies: ["SharePoint Online", "ReactJS", ".NET Core", "Azure DevOps", "Power Platform"]
    },
    {
      company: "STCPay",
      position: "Senior Software Developer",
      period: "2018 - 2020",
      location: "Saudi Arabia",
      type: "Full-time",
      description: "Developed core banking integration systems and payment processing solutions.",
      achievements: [
        "Built REST APIs handling 100,000+ daily transactions",
        "Integrated with multiple third-party banking services and payment gateways",
        "Implemented security compliance measures for financial transactions",
        "Optimized database queries reducing response time by 50%"
      ],
      technologies: [".NET Framework", "REST APIs", "SQL Server", "Banking Integration", "Security Protocols"]
    },
    {
      company: "Saudi Ministry of Energy",
      position: ".NET Developer",
      period: "2017 - 2018",
      location: "Saudi Arabia",
      type: "Contract",
      description: "Developed and maintained SharePoint 2016 portal for internal document management.",
      achievements: [
        "Migrated legacy systems to SharePoint 2016 platform",
        "Developed custom web parts and workflows using C#",
        "Implemented document approval workflows for regulatory compliance",
        "Trained internal staff on portal usage and administration"
      ],
      technologies: ["SharePoint 2016", "C#", "SQL Server", "Workflows", "Custom Web Parts"]
    },
    {
      company: "DGDA (General Directorate of Drugs Affairs)",
      position: "SharePoint Developer",
      period: "2016 - 2017",
      location: "Egypt",
      type: "Full-time",
      description: "Developed internal portal for drug registration and approval processes.",
      achievements: [
        "Created automated drug approval workflow system",
        "Integrated Crystal Reports for regulatory documentation",
        "Developed CRM integration for vendor management",
        "Implemented POS system for internal stores"
      ],
      technologies: ["SharePoint", "Crystal Reports", "CRM Integration", "POS Systems", "Workflow Automation"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16" dir="ltr">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Experience
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              7+ years of delivering enterprise solutions across government and private sectors
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-500"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 flex">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>
                
                <Card className={`ml-16 md:ml-0 w-full ${
                  index % 2 === 0 
                    ? 'md:w-1/2 md:mr-8 md:ml-0' 
                    : 'md:w-1/2 md:ml-auto md:pl-8'
                } bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105`}>
                  <CardContent className="p-6 text-left">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Building className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-400 font-semibold">{exp.company}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-400 text-sm">{exp.type}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 text-left">{exp.position}</h3>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed text-left">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-left">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-slate-300 text-sm flex items-start gap-2 text-left">
                            <span className="text-blue-400 mt-1.5 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-left">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
