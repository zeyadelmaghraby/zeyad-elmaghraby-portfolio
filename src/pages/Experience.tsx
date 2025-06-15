
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Diriyah Gate Development Authority (DGDA)",
      position: "Senior SharePoint Developer & Team Lead",
      period: "March 2022 - Present",
      location: "Saudi Arabia",
      type: "Contract via EJADA Systems",
      description: "Managing and maintaining five SharePoint On-Premise 2019 systems while leading a development team and implementing complex solutions.",
      achievements: [
        "Led a team of developers, responsible for assigning tasks, reviewing code, and evaluating performance",
        "Managed and maintained five SharePoint On-Premise 2019 systems with new feature implementations",
        "Developed Internal Portal product on SharePoint Online using ReactJS custom solutions",
        "Implemented integration layers with third-party vendors for registration processes and two-factor authentication",
        "Designed and executed unit, client and full cycle testing strategies",
        "Provided L3 Support for production issues",
        "Developed complex applications using Power Apps and Power Automate for workflow automation",
        "Leveraged Azure services including App Service, Functions, and Cognitive Services",
        "Managed SharePoint 2019 farms installation and administration tasks",
        "Prepared comprehensive technical design documents"
      ],
      technologies: [".NET Framework", "C#", "JavaScript", "ReactJS", "SharePoint 2019", "SharePoint Online", "NINTEX WF", "Power Apps", "Power Automate", "Azure Services", "SQL", "REST API", "SOAP"]
    },
    {
      company: "STCPay",
      position: "Senior Software Developer",
      period: "January 2020 - February 2022",
      location: "Saudi Arabia",
      type: "Full-time",
      description: "Developed core banking integration systems and payment processing solutions for STCPay mobile and web channels.",
      achievements: [
        "Built Core Banking Services and Integration layers for STCPay Channels (Mobile App, Employee Portal, Merchant Portal)",
        "Implemented Integration Layers with third parties including government agencies and banks",
        "Designed comprehensive unit, client and full cycle testing frameworks",
        "Provided L3 Support for production issues",
        "Developed, tested and deployed scalable solutions and services",
        "Implemented robust caching and logging mechanisms"
      ],
      technologies: [".NET Framework", "C#", "Web Services", "LINQ", "Windows Services", "SQL", "Stored Procedures", "Caching", "Logging", "GIT", "TFS", "REST API", "SOAP", "GitLab"]
    },
    {
      company: "Saudi Ministry of Energy Portal",
      position: "SharePoint Developer",
      period: "April 2019 - December 2019",
      location: "Saudi Arabia",
      type: "Contract via EJADA Systems",
      description: "Developed government portal using SharePoint 2016 On-premises for the Saudi Ministry of Energy.",
      achievements: [
        "Participated in developing comprehensive Saudi Ministry of Energy portal using SharePoint 2016",
        "Created robust data model for the project architecture",
        "Implemented web services for database integration and data retrieval",
        "Coordinated with Integration and Database teams for seamless communication",
        "Generated unit testing scenarios and conducted full cycle testing",
        "Provided ongoing support for production issues"
      ],
      technologies: ["SharePoint 2016", "ASP.NET", "C#", "JavaScript", "jQuery", "SOAP UI"]
    },
    {
      company: "Saudi Electricity Contractor Portal",
      position: "SharePoint Developer",
      period: "January 2019 - March 2019",
      location: "Saudi Arabia",
      type: "Contract via EJADA Systems",
      description: "Developed contractor management portal for Saudi Electricity Company with workflow automation and reporting capabilities.",
      achievements: [
        "Developed Saudi Electricity Contractor portal using SharePoint 2016 and NINTEX WF for project workflow management",
        "Built multiple integration services with different Saudi Electricity internal systems",
        "Generated comprehensive reports using SAP Crystal Reports",
        "Created interactive dashboards using Power BI for data visualization"
      ],
      technologies: ["SharePoint 2016", "ASP.NET", "C#", "NINTEX Workflow", "JavaScript", "CAML Query", "Power BI", "Crystal Reports"]
    },
    {
      company: "Saudi Air Navigation System",
      position: "SharePoint Developer",
      period: "October 2018 - December 2018",
      location: "Saudi Arabia",
      type: "Contract via EJADA Systems",
      description: "Created official website for Saudi Air Navigation System using SharePoint 2016.",
      achievements: [
        "Developed Saudi Air Navigation System official website using SharePoint 2016",
        "Provided ongoing technical support and issue resolution for the website"
      ],
      technologies: ["SharePoint 2016", "ASP.NET", "C#", "JavaScript", "jQuery"]
    },
    {
      company: "NCB Capital",
      position: "SharePoint Developer",
      period: "August 2018 - October 2018",
      location: "Saudi Arabia",
      type: "Contract via EJADA Systems",
      description: "Upgraded NCB Capital (Idikhar) platform from SharePoint 2010 to SharePoint 2013 with enhanced features.",
      achievements: [
        "Collaborated with offshore team from Egypt to upgrade NCB Capital (Idikhar) from SharePoint 2010 to 2013",
        "Updated complete theme and website structure for improved user experience",
        "Implemented form-based authentication mechanism for external users"
      ],
      technologies: ["SharePoint 2013", "ASP.NET", "C#", "JavaScript"]
    },
    {
      company: "DDS Program for Saudi Air Navigation System",
      position: "SharePoint Developer",
      period: "June 2018 - August 2018",
      location: "Saudi Arabia",
      type: "Contract via EJADA Systems",
      description: "Developed comprehensive meeting tracking and KPI management system for Saudi Air Navigation System departments.",
      achievements: [
        "Implemented DDS program from scratch for Saudi Air Navigation System departments",
        "Created meeting tracking system with various filters (Daily, Weekly, Monthly)",
        "Developed attendance tracking and KPI monitoring for employees in each department",
        "Gathered and analyzed requirements from business users across multiple departments",
        "Independently developed the entire project from conception to deployment"
      ],
      technologies: ["SharePoint Online", "JavaScript", "jQuery", "HTML"]
    },
    {
      company: "Saudi Telecom Company Specialized (STCSC)",
      position: "SharePoint Developer",
      period: "October 2017 - June 2018",
      location: "Saudi Arabia",
      type: "Contract via EJADA Systems",
      description: "Developed comprehensive internal portal and POS system for Saudi Telecom Company with extensive workflow automation.",
      achievements: [
        "Collaborated with offshore team to develop STC's internal portal using SharePoint 2016 On-premises",
        "Designed and implemented 50+ workflow automation processes using SharePoint Workflow engine",
        "Worked with Corporate Communication to ensure UI/UX compliance with branding standards",
        "Created complete POS system from scratch for STC stores transaction management",
        "Generated POS invoices using SAP Crystal Reports",
        "Implemented web service integration with STC CRM system for agent information retrieval",
        "Conducted training sessions for IT department and business users on portal usage"
      ],
      technologies: ["SharePoint 2016", "ASP.NET", "C#", "JavaScript", "jQuery", "CAML Query", "SharePoint Designer", "Crystal Reports"]
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
