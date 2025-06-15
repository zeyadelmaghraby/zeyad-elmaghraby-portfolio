import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, Download, Mail, Calendar, MapPin, Building, ExternalLink, Github, Award, Code, Database, Cloud, Monitor, Smartphone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
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

  const featuredProjects = [
    {
      title: "Diriyah Gate Development Authority (DGDA)",
      period: "March 2022 - Present",
      description: "Comprehensive SharePoint ecosystem management and custom solution development for the cultural heritage development authority.",
      achievements: [
        "Managing and maintaining five SharePoint On-Premise 2019 systems",
        "Developing and maintaining backend and frontend layers using .Net Framework and JavaScript",
        "Managing Internal Portal product on SharePoint Online with ReactJS",
        "Implementing integration layers with third-party vendors for registration process",
        "Implementing two-factor authentication systems",
        "Leading team of developers with code review and performance evaluation",
        "Utilizing Azure services for application enhancements"
      ],
      technologies: [".NET Framework", "C#", "JavaScript", "ReactJS", "SharePoint 2019", "SharePoint Online", "Power Apps", "Power Automate", "Azure Services", "REST API", "SOAP"]
    },
    {
      title: "STCPay Core Banking Services",
      period: "January 2020 - February 2022",
      description: "Developed core banking services and integration layers for STCPay's multi-channel platform serving millions of users.",
      achievements: [
        "Developed Core Banking Services for STCPay Channels (Mobile App, Employee Portal, Merchant Portal)",
        "Implemented Integration Layers with government agencies and banks",
        "Designed comprehensive testing strategies (unit, client, and full cycle)",
        "Provided L3 Support for production issues",
        "Ensured high availability for financial transactions"
      ],
      technologies: [".NET Framework", "C#", "Web Services", "LINQ", "Windows Services", "SQL", "REST API", "SOAP", "GitLab"]
    }
  ];

  const otherProjects = [
    {
      title: "Saudi Ministry of Energy Portal",
      period: "April 2019 - December 2019",
      description: "Government portal development using SharePoint 2016 with custom integrations.",
      technologies: ["SharePoint 2016", "ASP.NET", "C#", "JavaScript", "jQuery", "SOAP"]
    },
    {
      title: "Saudi Electricity Contractor Portal",
      period: "January 2019 - March 2019",
      description: "Contractor workflow management system with reporting and BI dashboards.",
      technologies: ["SharePoint 2016", "ASP.NET", "C#", "NINTEX", "Power BI", "Crystal Reports"]
    },
    {
      title: "Saudi Air Navigation System",
      period: "October 2018 - December 2018",
      description: "Official website development for Saudi Air Navigation System.",
      technologies: ["SharePoint 2016", "ASP.NET", "C#", "JavaScript", "jQuery"]
    },
    {
      title: "NCB Capital Upgrade",
      period: "August 2018 - October 2018",
      description: "SharePoint platform upgrade from 2010 to 2013 with authentication enhancements.",
      technologies: ["SharePoint 2013", "ASP.NET", "C#", "JavaScript"]
    },
    {
      title: "DDS Program for Saudi Air Navigation",
      period: "June 2018 - August 2018",
      description: "Meeting tracking and KPI monitoring system for departmental management.",
      technologies: ["SharePoint Online", "JavaScript", "jQuery", "HTML"]
    },
    {
      title: "Saudi Telecom Company (STCSC) Internal Portal",
      period: "October 2017 - June 2018",
      description: "Internal portal with 50+ workflow automations and POS system integration.",
      technologies: ["SharePoint 2016", "ASP.NET", "C#", "JavaScript", "Crystal Reports"]
    }
  ];

  const skills = {
    "Backend Development": [
      { name: ".NET Core", level: 95 },
      { name: ".NET Framework", level: 95 },
      { name: "C#", level: 95 },
      { name: "ASP.NET", level: 90 },
      { name: "Web API", level: 90 },
      { name: "Entity Framework", level: 85 }
    ],
    "Frontend Development": [
      { name: "ReactJS", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML5/CSS3", level: 85 },
      { name: "jQuery", level: 80 },
      { name: "Bootstrap", level: 75 }
    ],
    "Microsoft Technologies": [
      { name: "SharePoint Online", level: 95 },
      { name: "SharePoint 2016/2019", level: 95 },
      { name: "Power Platform", level: 90 },
      { name: "Power Apps", level: 88 },
      { name: "Power Automate", level: 88 },
      { name: "Power BI", level: 85 }
    ],
    "Cloud & DevOps": [
      { name: "Azure Services", level: 85 },
      { name: "Azure DevOps", level: 88 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Git/TFS", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Azure Functions", level: 80 }
    ],
    "Database Technologies": [
      { name: "SQL Server", level: 90 },
      { name: "T-SQL", level: 88 },
      { name: "LINQ", level: 85 },
      { name: "Entity Framework", level: 85 },
      { name: "Database Design", level: 85 },
      { name: "Performance Tuning", level: 80 }
    ],
    "Integration & APIs": [
      { name: "REST APIs", level: 90 },
      { name: "SOAP Services", level: 88 },
      { name: "Web Services", level: 90 },
      { name: "Third-party Integration", level: 85 },
      { name: "Banking APIs", level: 80 },
      { name: "Government APIs", level: 85 }
    ]
  };

  const certifications = [
    {
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "2023",
      credential: "AZ-204",
      description: "Expertise in developing and implementing Azure solutions including compute, storage, security, and monitoring."
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft", 
      date: "2022",
      credential: "AZ-900",
      description: "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure."
    },
    {
      name: "Microsoft 365 Certified: Developer Associate",
      issuer: "Microsoft",
      date: "2022", 
      credential: "MS-600",
      description: "Skills in designing, building, testing, and maintaining applications and solutions optimized for Microsoft 365."
    },
    {
      name: "Microsoft Certified: Power Platform Developer Associate",
      issuer: "Microsoft",
      date: "2021",
      credential: "PL-400", 
      description: "Expertise in designing, developing, testing, and troubleshooting Power Platform solutions."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2" size={20} />
                Let's Connect
              </Button>
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
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                  I am a passionate Technical Team Lead with 8+ years of experience in developing enterprise-grade solutions. 
                  My expertise lies in .NET technologies, SharePoint development, and cloud solutions using Microsoft Azure.
                </p>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  Throughout my career at EJADA Systems, I have successfully led development teams, architected scalable solutions, 
                  and delivered mission-critical applications for government and private sector clients across Saudi Arabia.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  I specialize in SharePoint Online/On-Premises, Power Platform, Azure services, and modern web development 
                  using ReactJS and .NET Core.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">Quick Facts</h3>
                <ul className="space-y-3 text-blue-100">
                  <li>🎯 Led teams of 5+ developers</li>
                  <li>🚀 Delivered 15+ enterprise projects</li>
                  <li>☁️ Azure & SharePoint specialist</li>
                  <li>📊 Reduced deployment time by 70%</li>
                  <li>🏆 4 Microsoft certifications</li>
                  <li>🌐 Multilingual: Arabic & English</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Experience
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                8+ years of delivering enterprise solutions across government and private sectors
              </p>
            </div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                <Card className="w-full bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300">
                  <CardContent className="p-12">
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <Building className="w-6 h-6 text-blue-400" />
                      <span className="text-blue-400 font-semibold text-xl">{exp.company}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-400 text-lg">{exp.type}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">{exp.position}</h3>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-8 text-slate-400 text-lg">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-8 leading-relaxed text-xl">{exp.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="text-white font-semibold mb-4 text-xl">Key Achievements:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-slate-300 flex items-start gap-3 text-lg">
                            <span className="text-blue-400 mt-2 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-4 text-xl">Technologies:</h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded text-base font-medium">
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Projects
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                A selection of enterprise projects delivered across government and private sectors
              </p>
            </div>

            {/* Featured Projects */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8">Featured Projects</h3>
              <div className="grid gap-8">
                {featuredProjects.map((project, index) => (
                  <Card key={index} className="bg-slate-700 border-slate-600 hover:border-blue-500 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                        <span className="text-blue-400 font-medium">{project.period}</span>
                      </div>
                      <p className="text-slate-300 mb-6 text-lg leading-relaxed">{project.description}</p>
                      
                      <div className="mb-6">
                        <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
                        <div className="grid md:grid-cols-2 gap-2">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-slate-300 flex items-start gap-2">
                              <span className="text-blue-400 mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Other Projects */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Other Projects</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {otherProjects.map((project, index) => (
                  <Card key={index} className="bg-slate-700 border-slate-600 hover:border-blue-500 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-white">{project.title}</h4>
                        <span className="text-blue-400 font-medium text-sm">{project.period}</span>
                      </div>
                      <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive expertise across the Microsoft technology stack and modern development practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      {category === "Backend Development" && <Code className="w-6 h-6 text-blue-400" />}
                      {category === "Frontend Development" && <Monitor className="w-6 h-6 text-blue-400" />}
                      {category === "Microsoft Technologies" && <Globe className="w-6 h-6 text-blue-400" />}
                      {category === "Cloud & DevOps" && <Cloud className="w-6 h-6 text-blue-400" />}
                      {category === "Database Technologies" && <Database className="w-6 h-6 text-blue-400" />}
                      {category === "Integration & APIs" && <Smartphone className="w-6 h-6 text-blue-400" />}
                      <h3 className="text-xl font-bold text-white">{category}</h3>
                    </div>
                    <div className="space-y-4">
                      {skillList.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-300 font-medium">{skill.name}</span>
                            <span className="text-blue-400 text-sm font-bold">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Certifications
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Microsoft certified professional with expertise across Azure, Microsoft 365, and Power Platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-slate-700 border-slate-600 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-400 mb-2">
                          <span>{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.date}</span>
                          <span>•</span>
                          <span className="text-blue-400 font-medium">{cert.credential}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your next project or explore collaboration opportunities? 
              I'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Mail className="mr-2" size={20} />
                Send Message
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
