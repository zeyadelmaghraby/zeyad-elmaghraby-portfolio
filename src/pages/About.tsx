
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Star, Briefcase } from "lucide-react";

const About = () => {
  const qualities = [
    {
      icon: Code,
      title: "Problem Solver",
      description: "Passionate about finding elegant solutions to complex technical challenges"
    },
    {
      icon: Users,
      title: "Team Leader",
      description: "Experienced in mentoring developers and leading high-performance teams"
    },
    {
      icon: Star,
      title: "Quality Focused",
      description: "Committed to clean code, best practices, and scalable architecture"
    },
    {
      icon: Briefcase,
      title: "Agile Leader",
      description: "Expert in Agile methodologies and DevOps practices"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Senior developer with 7+ years of experience in delivering high-performance web portals and business solutions
            </p>
          </div>

          {/* Main bio section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="animate-fade-in">
              <div className="w-64 h-64 mx-auto mb-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                ZE
              </div>
            </div>

            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Zeyad Elmaghraby</h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                  I'm a passionate Senior .NET and SharePoint Developer with over 7 years of experience 
                  building enterprise-grade solutions. Based between Egypt and Saudi Arabia, I specialize 
                  in creating scalable web portals and business applications using cutting-edge Microsoft technologies.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                  My expertise spans across .NET Core, SharePoint, Power Platform, and Azure, with a strong 
                  focus on clean architecture and best practices. I'm passionate about mentoring junior developers 
                  and leading teams to deliver exceptional results.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                  and sharing knowledge with the developer community.
                </p>
              </div>

              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Download CV
                </Button>
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>

          {/* Qualities section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">What I Bring</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualities.map((quality, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <quality.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{quality.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{quality.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Expertise highlight */}
          <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Core Expertise</h2>
            <p className="text-xl text-slate-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              Expert in .NET Core, SharePoint, Power Platform, and Azure with extensive experience 
              in team leadership, code reviews, technical documentation, and CI/CD pipeline implementation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Team Management", "Azure DevOps", "Security Compliance", "Third-party Integration", "Scalable Architecture"].map((skill) => (
                <span key={skill} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
