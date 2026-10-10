import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { CaseStudy } from "@/data/caseStudies";
import { DeviceCombo } from "./DeviceFrames";

export const CaseStudyCard = ({ study }: { study: CaseStudy }) => (
  <Link to={`/projects/${study.slug}`} className="group block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400">
    <Card className="bg-slate-700 border-slate-600 group-hover:border-blue-500 transition-all duration-300 overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="bg-gradient-to-br from-slate-900 to-blue-900/70 p-6 md:p-8 flex items-center">
          <DeviceCombo
            desktop={study.cover.desktop}
            phone={study.cover.phone}
            alt={study.shortTitle}
            className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <CardContent className="p-6 md:p-8 flex flex-col">
          <div className="flex flex-wrap items-center gap-2 mb-3 text-sm">
            <span className="text-blue-300 font-medium">{study.category}</span>
            <span className="text-slate-400">•</span>
            <span className="text-blue-400 font-medium">{study.period}</span>
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-white mb-3">{study.title}</h4>
          <p className="text-slate-300 mb-4 leading-relaxed">{study.tagline}</p>
          <div className="grid gap-2 mb-5">
            {study.highlights.map((highlight) => (
              <div key={highlight} className="text-slate-300 flex items-start gap-2 text-sm">
                <span className="text-blue-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                {highlight}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {study.technologies.slice(0, 5).map((tech) => (
              <span key={tech} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
          <span className="mt-auto inline-flex items-center gap-2 text-blue-300 font-semibold group-hover:text-white transition-colors">
            View case study
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </CardContent>
      </div>
    </Card>
  </Link>
);
