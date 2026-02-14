import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, Download, Mail, Calendar, MapPin, Building, Award, Code, Database, Cloud, Monitor, Smartphone, Globe, Phone, Linkedin, GraduationCap, Users, Briefcase } from "lucide-react";

const Home = () => {
  const experiences = [
    {
      company: "EJADA Systems",
      position: "Technical Team Lead | Microsoft 365 & Enterprise Solutions Architect",
      period: "Apr 2024 – Present",
      location: "Saudi Arabia",
      type: "Full-time",
      description: "Leading cross-functional development teams to deliver modern SharePoint Online and On-Premise solutions. Architecting intranet portals, leading Power Platform projects, and driving AI tools adoption.",
      achievements: [
        "Led cross-functional teams (frontend & backend) for SharePoint Online and On-Premise solutions",
        "Architected structured intranet and publishing portals with hub sites and metadata strategy",
        "Designed and implemented custom reusable SPFx web parts and extensions",
        "Led Power Platform projects: Power Automate workflows, Power Apps, Power BI dashboards",
        "Introduced and led adoption of AI tools to increase productivity",
        "Defined development standards, naming conventions, and clean code guidelines",
        "Conducted code reviews and enforced engineering best practices",
        "Participated in presales: RFP analysis, technical writeups, proposal preparation"
      ],
      technologies: ["SharePoint Online", "SPFx (React)", "Power Apps", "Power Automate", "Power BI", "Azure DevOps", ".NET Core", "Hub Sites", "Fluent UI"]
    },
    {
      company: "EJADA Systems – Diriyah Gate Development Authority",
      position: "Technical Lead / Senior SharePoint Developer",
      period: "Mar 2022 – Mar 2024",
      location: "Saudi Arabia",
      type: "Full-time",
      description: "Delivered SharePoint platforms serving 5,000+ users with role-based access and governance controls for the cultural heritage development authority.",
      achievements: [
        "Delivered SharePoint platforms serving 5,000+ users with role-based access",
        "Automated 20+ business workflows using Power Automate and Power Apps",
        "Improved content publishing efficiency by 35% through centralized CMS",
        "Managed and maintained five SharePoint On-Premise 2019 systems",
        "Implemented integration layers with third-party vendors",
        "Led team of developers with code review and performance evaluation"
      ],
      technologies: [".NET Framework", "C#", "JavaScript", "ReactJS", "SharePoint 2019", "SharePoint Online", "Power Apps", "Power Automate", "Azure Services", "REST API"]
    },
    {
      company: "STCPay (via EJADA Systems)",
      position: "Senior Software Engineer",
      period: "Jan 2020 – Feb 2022",
      location: "Saudi Arabia",
      type: "Full-time",
      description: "Led development of core banking REST APIs serving mobile apps and merchant portals for STCPay's multi-channel platform.",
      achievements: [
        "Led development of core banking REST APIs serving mobile apps and merchant portals",
        "Designed and optimized SQL Server databases and stored procedures",
        "Implemented business logic using CSLA .NET framework",
        "Managed integrations with governmental entities ensuring secure data exchange",
        "Conducted code reviews and improved delivery efficiency"
      ],
      technologies: [".NET Framework", "C#", "Web Services", "LINQ", "SQL Server", "REST API", "SOAP", "CSLA Framework"]
    },
    {
      company: "EJADA Systems",
      position: "SharePoint Developer",
      period: "Oct 2017 – Dec 2019",
      location: "Saudi Arabia",
      type: "Full-time",
      description: "Developed SharePoint portals and business process automation solutions for major government and enterprise clients.",
      achievements: [
        "Saudi Ministry of Energy: SharePoint 2016 portal with NINTEX workflows",
        "Saudi Electricity: Contractor portal with NINTEX and Power BI",
        "Saudi Air Navigation Services: Corporate website and internal business system",
        "NCB Capital: Upgraded SharePoint 2010 to 2013 with NINTEX Workflows",
        "STC Specialized: Internal portal with 50+ automated workflows"
      ],
      technologies: ["SharePoint 2016", "ASP.NET", "C#", "JavaScript", "jQuery", "NINTEX", "Crystal Reports", "Power BI"]
    }
  ];

  const selectedProjects = [
    {
      title: "EJADA Systems – Diriyah Gate Development Authority",
      period: "Mar 2022 – Mar 2024",
      role: "Technical Lead / Senior SharePoint Developer",
      description: "Delivered SharePoint platforms serving 5,000+ users with role-based access and governance controls for the cultural heritage development authority.",
      achievements: [
        "Delivered SharePoint platforms serving 5,000+ users with role-based access",
        "Automated 20+ business workflows using Power Automate and Power Apps",
        "Improved content publishing efficiency by 35% through centralized CMS",
        "Managed and maintained five SharePoint On-Premise 2019 systems"
      ],
      technologies: [".NET Framework", "C#", "ReactJS", "SharePoint 2019", "SharePoint Online", "Power Apps", "Power Automate", "Azure Services"]
    },
    {
      title: "STCPay (via EJADA Systems)",
      period: "Jan 2020 – Feb 2022",
      role: "Senior Software Engineer",
      description: "Led development of core banking REST APIs serving mobile apps and merchant portals for STCPay's multi-channel platform serving 8M+ users.",
      achievements: [
        "Led development of core banking REST APIs serving mobile apps and merchant portals",
        "Designed and optimized SQL Server databases and stored procedures",
        "Implemented business logic using CSLA .NET framework",
        "Managed integrations with governmental entities ensuring secure data exchange"
      ],
      technologies: [".NET Framework", "C#", "SQL Server", "REST API", "SOAP", "CSLA Framework"]
    },
    {
      title: "WCA34 – SharePoint Online Modern Intranet Portal",
      period: "Oct 2025 – Feb 2026",
      role: "Technical Team Lead",
      description: "End-to-end implementation of a structured Modern SharePoint Online intranet portal serving multiple departments.",
      achievements: [
        "Led design and implementation of 14 internal digital transportation e-services",
        "Used custom SPFx, Power Automate, and Fluent UI",
        "Designed departmental sites, centralized SOP & document library, news, and events modules",
        "Governance & permission model aligned with business roles"
      ],
      technologies: ["SharePoint Online", "SPFx", "Power Automate", "Fluent UI", "Microsoft 365"]
    },
    {
      title: "GCA – General Court of Audit (KSA)",
      period: "Jul 2024 – Sep 2025",
      role: "Technical Team Lead",
      description: "Publishing government portal on SharePoint 2019, migrated to SharePoint Subscription Edition.",
      achievements: [
        "Led implementation of a publishing government portal",
        "Designed according to DGA guidelines for performance, security, and compliance",
        "Managed migration, UI alignment, and accessibility compliance"
      ],
      technologies: ["SharePoint 2019", "SharePoint SE", "DGA Compliance", "Publishing Portal"]
    },
    {
      title: "Diriyah Gate Development Authority",
      period: "Mar 2022 – Mar 2024",
      role: "Technical Lead",
      description: "Comprehensive SharePoint ecosystem management and custom solution development for the cultural heritage development authority.",
      achievements: [
        "Delivered SharePoint platforms serving 5,000+ users",
        "Automated 20+ business workflows",
        "Improved content publishing efficiency by 35%",
        "Managed five SharePoint On-Premise 2019 systems"
      ],
      technologies: [".NET Framework", "SharePoint 2019", "SharePoint Online", "Power Apps", "Power Automate", "Azure"]
    }
  ];

  const otherProjects = [
    {
      title: "STCPay Core Banking Services",
      period: "Jan 2020 – Feb 2022",
      description: "Core banking REST APIs for mobile apps and merchant portals.",
      technologies: [".NET Framework", "C#", "SQL Server", "REST API", "CSLA"]
    },
    {
      title: "Saudi Ministry of Energy Portal",
      period: "Apr 2019 – Dec 2019",
      description: "Government portal development using SharePoint 2016 with NINTEX workflows.",
      technologies: ["SharePoint 2016", "ASP.NET", "C#", "NINTEX", "SOAP"]
    },
    {
      title: "Saudi Electricity Contractor Portal",
      period: "Jan 2019 – Mar 2019",
      description: "Contractor workflow management system with Power BI dashboards.",
      technologies: ["SharePoint 2016", "ASP.NET", "NINTEX", "Power BI", "Crystal Reports"]
    },
    {
      title: "Saudi Air Navigation Services",
      period: "Oct 2018 – Dec 2018",
      description: "Corporate website and internal business system on SharePoint.",
      technologies: ["SharePoint 2016", "SharePoint Online", "JavaScript", "jQuery"]
    },
    {
      title: "NCB Capital Upgrade",
      period: "Aug 2018 – Oct 2018",
      description: "SharePoint platform upgrade from 2010 to 2013 with new authentication.",
      technologies: ["SharePoint 2013", "ASP.NET", "C#", "NINTEX"]
    },
    {
      title: "STC Specialized Internal Portal",
      period: "Oct 2017 – Jun 2018",
      description: "Internal portal with 50+ workflow automations and Crystal Reports.",
      technologies: ["SharePoint 2016", "ASP.NET", "C#", "Crystal Reports"]
    }
  ];

  const skills: Record<string, { name: string; level: number }[]> = {
    "SharePoint & M365": [
      { name: "SharePoint Online", level: 95 },
      { name: "SharePoint 2016/2019/SE", level: 95 },
      { name: "SPFx (React)", level: 90 },
      { name: "Hub Sites & Information Architecture", level: 90 },
    ],
    "Power Platform": [
      { name: "Power Apps", level: 90 },
      { name: "Power Automate", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "Microsoft 365 Integration", level: 90 },
    ],
    "Backend Development": [
      { name: ".NET Core / .NET Framework", level: 95 },
      { name: "C#", level: 95 },
      { name: "REST APIs", level: 90 },
      { name: "CSLA Framework", level: 85 },
    ],
    "Database & Data": [
      { name: "SQL Server", level: 90 },
      { name: "Stored Procedures & Optimization", level: 88 },
      { name: "LINQ", level: 85 },
      { name: "Database Design", level: 85 },
    ],
    "DevOps & Tools": [
      { name: "Azure DevOps", level: 88 },
      { name: "Git / GitHub", level: 90 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "JIRA", level: 80 },
    ],
    "Leadership & Presales": [
      { name: "Technical Leadership", level: 95 },
      { name: "Team Mentoring", level: 90 },
      { name: "Solution Architecture", level: 90 },
      { name: "RFP Analysis & Proposals", level: 85 },
    ]
  };

  const certifications = [
    {
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "2023",
      credential: "AZ-204",
    },
    {
      name: "Microsoft Certified: Designing and Implementing Microsoft DevOps Solutions",
      issuer: "Microsoft",
      date: "2020",
      credential: "AZ-400",
    },
    {
      name: "Microsoft Certified: Developing Solutions for Microsoft Azure",
      issuer: "Microsoft",
      date: "2020",
      credential: "AZ-204",
    },
    {
      name: "Microsoft Certified: Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2019",
      credential: "AZ-900",
    },
    {
      name: "Microsoft Certified: Analyzing and Visualizing Data with Microsoft Power BI",
      issuer: "Microsoft",
      date: "2019",
      credential: "PL-300",
    }
  ];

  const professionalSkills = [
    "Technical Leadership and Decision Making",
    "Clear Communication with Technical and Non-Technical Stakeholders",
    "Ownership and Accountability for End-to-End Delivery",
    "Problem Solving and Root Cause Analysis",
    "Adaptability in Fast-Paced and Remote Environments",
    "Time Management and Priority Handling",
    "Collaboration within Cross-Functional Agile Teams"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - fixed mobile */}
      <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 opacity-50"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 flex-1 flex flex-col justify-center">
          {/* Profile Section */}
          <div className="mb-6 animate-fade-in">
            <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-2xl border-4 border-blue-400">
              <img 
                src="/lovable-uploads/b4b6eadd-d88a-4653-8c5e-2f4b54d09fbf.png" 
                alt="Zeyad Elmaghraby" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent leading-tight">
              Hi, I'm Zeyad Elmaghraby
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-300 font-semibold mb-4">
              Technical Team Lead | Microsoft 365 Solutions Architect
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-4 leading-relaxed max-w-3xl mx-auto px-2">
              8+ years delivering enterprise-grade SharePoint & Microsoft 365 solutions. Specialized in SPFx, Power Platform, .NET, and digital transformation.
            </p>
            <p className="text-sm sm:text-base text-slate-400 mb-8">
              📍 Alexandria, Egypt &nbsp;|&nbsp; 📧 zeyad.elmaghraby@gmail.com
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
              <Button
                size="lg"
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <a href="https://www.linkedin.com/in/zeyad-elmaghraby-068567b2/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2" size={18} />
                  LinkedIn Profile
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2" size={18} />
                Let's Connect
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce">
              <ArrowDown className="mx-auto text-slate-400" size={28} />
            </div>
          </div>
        </div>

        {/* Quick stats section */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-800/50 backdrop-blur-sm border-t border-slate-700">
          <div className="container mx-auto px-4 py-4 md:py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">8+</div>
                <div className="text-xs md:text-sm text-slate-300">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">15+</div>
                <div className="text-xs md:text-sm text-slate-300">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">5</div>
                <div className="text-xs md:text-sm text-slate-300">Microsoft Certifications</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">8M+</div>
                <div className="text-xs md:text-sm text-slate-300">Users Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="text-left">
                <p className="text-lg text-slate-300 mb-5 leading-relaxed">
                  Technical Team Lead and Microsoft 365 Solutions Architect with 8+ years of experience delivering enterprise-grade SharePoint and Microsoft 365 solutions.
                </p>
                <p className="text-base text-slate-400 mb-5 leading-relaxed">
                  Specialized in SharePoint On-Premise and SharePoint Online, SPFx (React), Power Platform (Power Apps, Power Automate, Power BI), and .NET backend integrations.
                </p>
                <p className="text-base text-slate-400 leading-relaxed">
                  Proven track record in leading cross-functional teams, architecting scalable intranet and publishing portals, and driving digital transformation through governance, information architecture, and business process automation.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-white">Quick Facts</h3>
                  <ul className="space-y-2 text-blue-100 text-sm">
                    <li>🎯 Led cross-functional dev teams</li>
                    <li>🚀 Delivered 15+ enterprise projects</li>
                    <li>☁️ SharePoint & M365 specialist</li>
                    <li>🤖 AI tools adoption leader</li>
                    <li>🏆 5 Microsoft certifications</li>
                    <li>🌐 Bilingual: Arabic & English</li>
                  </ul>
                </div>
                <div className="bg-slate-700 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-bold text-white">Education</h3>
                  </div>
                  <p className="text-slate-300 font-medium">B.Sc. Computer Science</p>
                  <p className="text-slate-400 text-sm">Ain Shams University • 2013 – 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Experience
              </h2>
              <p className="text-xl md:text-2xl text-blue-300 font-semibold max-w-3xl mx-auto leading-relaxed">
                Technical Team Lead | Microsoft 365 & Enterprise Solutions Architect
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="w-full bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300">
                  <CardContent className="p-6 md:p-10">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Building className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold text-lg">{exp.company}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-400">{exp.type}</span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{exp.position}</h3>
                    
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
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="text-slate-300 flex items-start gap-2 text-sm">
                            <span className="text-blue-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded text-xs font-medium">
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Projects
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Selected enterprise projects delivered across government and private sectors
              </p>
            </div>

            {/* Selected Projects */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6">Selected Projects</h3>
              <div className="grid gap-6">
                {selectedProjects.map((project, index) => (
                  <Card key={index} className="bg-slate-700 border-slate-600 hover:border-blue-500 transition-all duration-300">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                        <h4 className="text-xl font-bold text-white">{project.title}</h4>
                        <span className="text-blue-400 font-medium text-sm whitespace-nowrap">{project.period}</span>
                      </div>
                      <p className="text-blue-300 text-sm mb-3">{project.role}</p>
                      <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                      <div className="mb-4">
                        <div className="grid md:grid-cols-2 gap-2">
                          {project.achievements.map((a, idx) => (
                            <div key={idx} className="text-slate-300 flex items-start gap-2 text-sm">
                              <span className="text-blue-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                              {a}
                            </div>
                          ))}
                        </div>
                      </div>
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

            {/* Other Projects */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Other Projects</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {otherProjects.map((project, index) => (
                  <Card key={index} className="bg-slate-700 border-slate-600 hover:border-blue-500 transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                        <h4 className="text-base font-bold text-white">{project.title}</h4>
                        <span className="text-blue-400 font-medium text-xs whitespace-nowrap">{project.period}</span>
                      </div>
                      <p className="text-slate-300 mb-3 text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-blue-600/20 text-blue-300 px-2 py-0.5 rounded text-xs font-medium">
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
      <section id="skills" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Comprehensive expertise across Microsoft technologies and modern development practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-5">
                      {category === "SharePoint & M365" && <Globe className="w-5 h-5 text-blue-400" />}
                      {category === "Power Platform" && <Monitor className="w-5 h-5 text-blue-400" />}
                      {category === "Backend Development" && <Code className="w-5 h-5 text-blue-400" />}
                      {category === "Database & Data" && <Database className="w-5 h-5 text-blue-400" />}
                      {category === "DevOps & Tools" && <Cloud className="w-5 h-5 text-blue-400" />}
                      {category === "Leadership & Presales" && <Users className="w-5 h-5 text-blue-400" />}
                      <h3 className="text-lg font-bold text-white">{category}</h3>
                    </div>
                    <div className="space-y-3">
                      {skillList.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                            <span className="text-blue-400 text-xs font-bold">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-1.5">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-blue-400 h-1.5 rounded-full transition-all duration-1000"
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

            {/* Professional Skills */}
            <div className="mt-12 bg-gradient-to-r from-slate-800 to-blue-900/50 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white text-center mb-6">Professional Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {professionalSkills.map((skill) => (
                  <span key={skill} className="bg-blue-600/20 text-blue-300 border border-blue-500/30 px-4 py-2 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 md:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Certifications
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Microsoft certified professional across Azure, DevOps, and Power BI
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-slate-700 border-slate-600 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-white mb-1 leading-tight">{cert.name}</h3>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                          <span>{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.date}</span>
                          <span>•</span>
                          <span className="text-blue-400 font-medium">{cert.credential}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your next project or explore collaboration opportunities?
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
              <a href="mailto:zeyad.elmaghraby@gmail.com" className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-blue-500 transition-all text-center">
                <Mail className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-slate-300 text-sm">zeyad.elmaghraby@gmail.com</p>
              </a>
              <a href="tel:+201009364302" className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-blue-500 transition-all text-center">
                <Phone className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-slate-300 text-sm">(+20) 1009364302</p>
              </a>
              <a href="https://linkedin.com/in/zeyad-elmaghraby" target="_blank" rel="noopener noreferrer" className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-blue-500 transition-all text-center">
                <Linkedin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-slate-300 text-sm">LinkedIn Profile</p>
              </a>
            </div>

            <p className="text-slate-400 text-sm">📍 Alexandria, Egypt</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
