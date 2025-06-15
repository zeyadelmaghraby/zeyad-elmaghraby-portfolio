import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      credentialId: "AZ-204",
      issueDate: "2023",
      expiryDate: "2026",
      status: "Active",
      description: "Demonstrates skills in developing cloud solutions using Azure services, including compute, storage, security, and monitoring.",
      skills: ["Azure App Service", "Azure Functions", "Azure Storage", "Azure Security", "Monitoring"],
      badge: "🎖️",
      featured: true
    },
    {
      title: "Microsoft Certified: DevOps Engineer Expert",
      issuer: "Microsoft",
      credentialId: "AZ-400",
      issueDate: "2022",
      expiryDate: "2025",
      status: "Active",
      description: "Validates expertise in combining people, processes, and technologies to deliver valuable products and services.",
      skills: ["CI/CD", "Azure DevOps", "Infrastructure as Code", "Security", "Monitoring"],
      badge: "🏆",
      featured: true
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      credentialId: "AZ-900",
      issueDate: "2021",
      expiryDate: "Never",
      status: "Active",
      description: "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
      skills: ["Cloud Concepts", "Azure Services", "Security", "Compliance", "Pricing"],
      badge: "🌟",
      featured: false
    },
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      issuer: "Microsoft",
      credentialId: "PL-300",
      issueDate: "2022",
      expiryDate: "2025",
      status: "Active",
      description: "Demonstrates skills in data preparation, modeling, visualization, and analysis using Power BI.",
      skills: ["Data Modeling", "DAX", "Power Query", "Visualization", "Analytics"],
      badge: "📊",
      featured: true
    }
  ];

  const additionalTraining = [
    { name: "SharePoint Development Certification", provider: "Microsoft Learning", year: "2019" },
    { name: "Agile and Scrum Master Training", provider: "Scrum Alliance", year: "2020" },
    { name: "Azure Architecture Best Practices", provider: "Microsoft", year: "2023" },
    { name: "Advanced .NET Development", provider: "Pluralsight", year: "2022" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Certifications
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Validated expertise through Microsoft certifications and continuous professional development
            </p>
          </div>

          {/* Certification Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">4</div>
              <div className="text-blue-100">Active Certifications</div>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">3</div>
              <div className="text-green-100">Expert Level</div>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">2023</div>
              <div className="text-purple-100">Latest Certification</div>
            </div>
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">4+</div>
              <div className="text-orange-100">Additional Training</div>
            </div>
          </div>

          {/* Featured Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Microsoft Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.filter(cert => cert.featured).map((cert, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{cert.badge}</div>
                      <Badge className={`${cert.status === 'Active' ? 'bg-green-600' : 'bg-yellow-600'} hover:bg-opacity-80`}>
                        {cert.status}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-blue-400 font-semibold mb-1">{cert.issuer}</p>
                    <p className="text-slate-400 text-sm mb-4">Credential ID: {cert.credentialId}</p>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">{cert.description}</p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Issued: {cert.issueDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        Expires: {cert.expiryDate}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Skills Validated:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span key={skill} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify Credential
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">All Certifications</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-3">{cert.badge}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-blue-400 text-sm mb-2">{cert.issuer}</p>
                    <p className="text-slate-400 text-xs mb-3">{cert.credentialId}</p>
                    <Badge className={`text-xs ${cert.status === 'Active' ? 'bg-green-600' : 'bg-yellow-600'}`}>
                      {cert.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Training */}
          <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Additional Training & Education</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalTraining.map((training, index) => (
                <div key={index} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <h3 className="text-white font-semibold mb-1">{training.name}</h3>
                  <p className="text-blue-300 text-sm mb-1">{training.provider}</p>
                  <p className="text-slate-400 text-xs">{training.year}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-slate-300 mb-4">
                Committed to continuous learning and staying current with the latest technologies and best practices.
              </p>
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900">
                View Learning Path
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
