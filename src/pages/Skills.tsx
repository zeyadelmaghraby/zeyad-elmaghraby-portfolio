
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C#", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 85 },
        { name: "C++", level: 75 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: ".NET Core", level: 95 },
        { name: "ASP.NET", level: 90 },
        { name: "ReactJS", level: 85 },
        { name: "LINQ", level: 90 }
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 90 }
      ]
    },
    {
      title: "Microsoft Platforms",
      skills: [
        { name: "SharePoint 2016/2019/Online", level: 95 },
        { name: "Power Platform", level: 85 },
        { name: "Azure", level: 80 },
        { name: "Office 365", level: 90 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Azure DevOps", level: 85 },
        { name: "Git", level: 90 },
        { name: "CI/CD Pipelines", level: 80 },
        { name: "Docker", level: 70 }
      ]
    },
    {
      title: "Business Intelligence & Reporting",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Crystal Reports", level: 90 },
        { name: "SSRS", level: 80 },
        { name: "Data Analytics", level: 75 }
      ]
    }
  ];

  const topSkills = [
    ".NET Core", "SharePoint", "C#", "Azure DevOps", "ReactJS", "SQL Server", 
    "Power Platform", "Azure", "REST APIs", "Agile/Scrum", "Team Leadership", "CI/CD"
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Skills
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technical expertise across Microsoft technologies and modern development practices
            </p>
          </div>

          {/* Top Skills Cloud */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Core Competencies</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {topSkills.map((skill, index) => (
                <span 
                  key={skill} 
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-110 cursor-default ${
                    index < 6 
                      ? "bg-blue-600 text-white text-lg" 
                      : "bg-blue-600/30 text-blue-300 border border-blue-500"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-300 font-medium">{skill.name}</span>
                          <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-slate-700"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Section */}
          <div className="mt-16 bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-6">Additional Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="text-blue-300 font-semibold mb-3">Architecture</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>Microservices</li>
                  <li>Clean Architecture</li>
                  <li>Domain-Driven Design</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-300 font-semibold mb-3">Integration</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>REST/SOAP APIs</li>
                  <li>Third-party Services</li>
                  <li>Enterprise Systems</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-300 font-semibold mb-3">Security</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>OAuth/JWT</li>
                  <li>Security Compliance</li>
                  <li>Data Protection</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-300 font-semibold mb-3">Leadership</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>Team Management</li>
                  <li>Code Reviews</li>
                  <li>Mentoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
