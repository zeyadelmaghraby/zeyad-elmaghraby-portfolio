
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "EJADA Systems",
      position: "Senior .NET Developer & Team Lead",
      period: "2017 - Present",
      location: "Saudi Arabia",
      type: "Full-time",
      description: "Lead development of enterprise portals and internal systems for government and private sector clients across multiple high-profile projects.",
      achievements: [
        "Led a team of 5+ developers in delivering mission-critical SharePoint solutions",
        "Implemented Azure DevOps CI/CD pipelines reducing deployment time by 70%",
        "Architected and developed scalable web portals serving 10,000+ concurrent users",
        "Established code review processes and technical documentation standards",
        "Delivered 15+ major enterprise projects for government and private sectors",
        "Managed SharePoint 2019 farms and SharePoint Online environments",
        "Implemented banking integration systems handling 100,000+ daily transactions"
      ],
      technologies: ["SharePoint Online", "SharePoint 2016/2019", "ReactJS", ".NET Core", ".NET Framework", "Azure DevOps", "Power Platform", "Power Apps", "Power Automate", "Azure Services", "Banking Integration", "Crystal Reports"]
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
              8+ years of delivering enterprise solutions across government and private sectors
            </p>
          </div>

          {/* Experience Card - Full Width */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                <Card className="w-full max-w-5xl mx-auto bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-left">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Building className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold text-lg">{exp.company}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-400">{exp.type}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 text-left">{exp.position}</h3>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed text-left text-lg">{exp.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 text-left text-lg">Key Achievements:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-slate-300 flex items-start gap-3 text-left">
                            <span className="text-blue-400 mt-2 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3 text-left text-lg">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="bg-blue-600/20 text-blue-300 px-3 py-1.5 rounded text-sm font-medium">
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
