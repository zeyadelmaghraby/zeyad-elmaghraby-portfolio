import { Fragment, useEffect, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowRight, CheckCircle2, Mail, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DesktopGallery } from "@/components/case-study/DesktopGallery";
import { DeviceCombo } from "@/components/case-study/DeviceFrames";
import { PhoneGallery } from "@/components/case-study/PhoneGallery";
import { getCaseStudy } from "@/data/caseStudies";
import NotFound from "./NotFound";

interface SectionProps {
  eyebrow: string;
  title: string;
  intro?: string;
  alt?: boolean;
  children: ReactNode;
}

const Section = ({ eyebrow, title, intro, alt, children }: SectionProps) => (
  <section className={`py-16 md:py-20 ${alt ? "bg-slate-800" : ""}`}>
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">{eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            {title}
          </h2>
          {intro && <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">{intro}</p>}
        </div>
        {children}
      </div>
    </div>
  </section>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  useEffect(() => {
    if (!study) return;
    const previousTitle = document.title;
    document.title = `${study.title} | Zeyad Elmaghraby`;
    return () => {
      document.title = previousTitle;
    };
  }, [study]);

  if (!study) return <NotFound />;

  const { architecture, lifecycle } = study;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 opacity-50"></div>
        <div className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-300 transition-colors mb-8 md:mb-10">
              <ArrowLeft size={16} />
              All projects
            </Link>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
                  <span className="bg-blue-600/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full font-medium">
                    {study.category}
                  </span>
                  <span className="text-slate-400">Case study • {study.period}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  {study.title}
                </h1>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">{study.tagline}</p>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.slice(0, 6).map((tech) => (
                    <span key={tech} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <DeviceCombo desktop={study.cover.desktop} phone={study.cover.phone} alt={study.shortTitle} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 md:mt-16">
              {study.stats.map((stat) => (
                <div key={stat.label} className="bg-slate-800/70 border border-slate-700 rounded-lg p-4 md:p-5 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section alt eyebrow="Overview" title="One app for the whole visitor journey">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
          <div className="lg:col-span-2 space-y-4">
            {study.overview.map((paragraph) => (
              <p key={paragraph} className="text-slate-300 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <dl className="bg-slate-700 border border-slate-600 rounded-lg p-6 space-y-4 self-start">
            {study.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-wider text-slate-400 mb-0.5">{fact.label}</dt>
                <dd className="text-white font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {study.journey.map((step, index) => (
            <li key={step.title} className="relative bg-slate-700 border border-slate-600 rounded-lg p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-slate-500 tabular-nums">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-blue-300 mb-1">{step.actor}</p>
              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Features */}
      <Section eyebrow="Highlights" title="What makes it work">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {study.features.map((feature) => (
            <Card key={feature.title} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Desktop screens */}
      <Section
        alt
        eyebrow="Desktop"
        title="Screen by screen"
        intro="Pick a screen to see it. Select the screenshot to open it full size."
      >
        <DesktopGallery appName={study.shortTitle} desktop={study.desktop} />
      </Section>

      {/* Phone screens */}
      <Section
        eyebrow="Phone"
        title={study.phone.locales.length > 1 ? "The same screens, mirrored" : "On the phone"}
        intro={
          study.phone.locales.length > 1
            ? "Every screen in both languages. In Arabic the navigation, alignment, icons and dates all flip to right-to-left."
            : undefined
        }
      >
        <PhoneGallery appName={study.shortTitle} phone={study.phone} />
      </Section>

      {/* Architecture */}
      <Section alt eyebrow="Architecture" title="How it fits together" intro={architecture.summary}>
        <div className="flex flex-col lg:flex-row items-stretch gap-3">
          {architecture.columns.map((column, index) => (
            <Fragment key={column.title}>
              {index > 0 && (
                <div className="flex lg:flex-col items-center justify-center gap-2 text-blue-300 py-1 lg:py-0 lg:w-24 flex-shrink-0">
                  <span className="text-xs font-medium text-center">{architecture.connectors[index - 1]}</span>
                  <ArrowRight className="hidden lg:block" size={22} />
                  <ArrowDown className="lg:hidden" size={20} />
                </div>
              )}
              <div className="flex-1 min-w-0 bg-slate-700 border border-slate-600 rounded-lg p-5 md:p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <column.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{column.title}</h3>
                    <p className="text-xs text-slate-400">{column.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {column.items.map((item) => (
                    <li key={item.name} className="bg-slate-800 border border-slate-600/60 rounded-md px-3 py-2">
                      <div className="text-sm font-semibold text-white break-words">{item.name}</div>
                      <div className="text-xs text-slate-400">{item.detail}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </Fragment>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-center gap-3 bg-slate-700/50 border border-dashed border-slate-600 rounded-lg px-5 py-4 text-sm text-slate-300">
          <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
          {architecture.footnote}
        </div>

        <div className="mt-10 bg-slate-700 border border-slate-600 rounded-lg p-6 md:p-8">
          <h3 className="text-lg font-bold text-white mb-5">Status lifecycle</h3>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {lifecycle.main.map((status, index) => (
              <Fragment key={status}>
                {index > 0 && <ArrowRight className="text-slate-500 flex-shrink-0" size={16} />}
                <span className="bg-blue-600/20 text-blue-300 border border-blue-500/30 px-3 py-1.5 rounded-full text-sm font-medium">
                  {status}
                </span>
              </Fragment>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-400 mr-1">Terminal states:</span>
            {lifecycle.terminal.map((status) => (
              <span key={status} className="bg-slate-800 text-slate-300 border border-slate-600 px-3 py-1.5 rounded-full text-sm font-medium">
                {status}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Decisions */}
      <Section
        eyebrow="Engineering decisions"
        title="Choices and their trade-offs"
        intro="Three decisions that shaped the build, and what each one costs."
      >
        <div className="grid lg:grid-cols-3 gap-6">
          {study.decisions.map((item, index) => (
            <Card key={item.title} className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 flex flex-col h-full">
                <span className="text-sm font-bold text-blue-400 mb-2 tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">{item.decision}</p>
                <div className="mt-auto bg-slate-900/60 border border-slate-700 rounded-md p-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400 mb-1.5">
                    <Scale size={14} />
                    Trade-off
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.tradeoff}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Quality and stack */}
      <Section alt eyebrow="Quality" title="Tested and checked">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          <ul className="space-y-4">
            {study.quality.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6 self-start">
            <h3 className="text-lg font-bold text-white mb-4">Built with</h3>
            <div className="flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <span key={tech} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Footer call-to-action */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Want something like this for your organisation?</h2>
          <p className="text-slate-300 mb-8">I'm happy to walk through the build in detail.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-semibold rounded-lg">
              <Link to="/#contact">
                <Mail className="mr-2" size={18} />
                Let's Connect
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-6 py-3 text-base font-semibold rounded-lg"
            >
              <Link to="/#projects">
                <ArrowLeft className="mr-2" size={18} />
                All projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
