import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/data/caseStudies";
import { BrowserFrame } from "./DeviceFrames";
import { Lightbox } from "./Lightbox";

interface DesktopGalleryProps {
  appName: string;
  desktop: CaseStudy["desktop"];
}

export const DesktopGallery = ({ appName, desktop }: DesktopGalleryProps) => {
  const { screens, width, height } = desktop;
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const screen = screens[active];

  // Warm the cache so switching screens does not flash an empty frame
  useEffect(() => {
    screens.forEach(({ src }) => {
      new Image().src = src;
    });
  }, [screens]);

  const step = (delta: number) => setActive((active + delta + screens.length) % screens.length);

  const stepButton =
    "w-9 h-9 rounded-lg border border-slate-600 text-slate-300 flex items-center justify-center hover:border-blue-500 hover:text-white transition-colors";

  return (
    <div className="grid lg:grid-cols-[240px_minmax(0,1fr)] gap-5 lg:gap-8 items-start">
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
        {screens.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(index)}
            aria-pressed={index === active}
            className={cn(
              "flex-shrink-0 flex items-center gap-3 text-left rounded-lg border px-4 py-2.5 lg:py-3 transition-colors",
              index === active
                ? "bg-blue-600/20 border-blue-500 text-white"
                : "bg-slate-900/40 border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white"
            )}
          >
            <span className={cn("text-xs font-bold tabular-nums", index === active ? "text-blue-300" : "text-slate-500")}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium whitespace-nowrap">{item.title}</span>
          </button>
        ))}
      </div>

      <div className="min-w-0">
        <BrowserFrame title={`${appName} · ${screen.title}`}>
          <button
            type="button"
            onClick={() => setLightboxIndex(active)}
            className="group relative block w-full cursor-zoom-in"
            aria-label={`Enlarge screenshot: ${screen.title}`}
          >
            <img
              src={screen.src}
              alt={`${appName} ${screen.title} screen on desktop`}
              width={width}
              height={height}
              className="w-full h-auto block"
            />
            <span className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-slate-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
              <Maximize2 size={16} />
            </span>
          </button>
        </BrowserFrame>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">{screen.title}</h4>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">{screen.caption}</p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button type="button" onClick={() => step(-1)} className={stepButton} aria-label="Previous screen">
              <ChevronLeft size={18} />
            </button>
            <button type="button" onClick={() => step(1)} className={stepButton} aria-label="Next screen">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <Lightbox
        images={screens}
        index={lightboxIndex}
        onIndexChange={(index) => {
          setLightboxIndex(index);
          if (index !== null) setActive(index);
        }}
      />
    </div>
  );
};
