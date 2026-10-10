import { useState } from "react";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/data/caseStudies";
import { PhoneFrame } from "./DeviceFrames";
import { Lightbox, type LightboxImage } from "./Lightbox";

const SIDE_BY_SIDE = "side-by-side";

interface PhoneGalleryProps {
  appName: string;
  phone: CaseStudy["phone"];
}

export const PhoneGallery = ({ appName, phone }: PhoneGalleryProps) => {
  const { screens, locales, width, height } = phone;
  const [mode, setMode] = useState(locales.length > 1 ? SIDE_BY_SIDE : locales[0].id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const shownLocales = mode === SIDE_BY_SIDE ? locales : locales.filter((locale) => locale.id === mode);

  const lightboxImages: LightboxImage[] = screens.flatMap((screen) =>
    shownLocales.map((locale) => ({
      src: screen.images[locale.id],
      title: `${screen.title} · ${locale.label}`,
      caption: screen.caption,
    }))
  );

  const modes = [
    ...(locales.length > 1 ? [{ id: SIDE_BY_SIDE, label: "Side by side" }] : []),
    ...locales,
  ];

  return (
    <div>
      {modes.length > 1 && (
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-lg bg-slate-800 border border-slate-700">
            {modes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setMode(item.id)}
                aria-pressed={mode === item.id}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  mode === item.id ? "bg-blue-600 text-white" : "text-slate-300 hover:text-white"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-5 overflow-x-auto snap-x pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 md:flex-wrap md:justify-center md:overflow-visible md:gap-x-6 md:gap-y-10">
        {screens.map((screen, screenIndex) => (
          <figure
            key={screen.title}
            className={cn("snap-center flex-shrink-0", shownLocales.length > 1 ? "w-[300px] md:w-[336px]" : "w-[200px]")}
          >
            <div className={cn("flex gap-3", shownLocales.length > 1 && "p-3 rounded-2xl bg-slate-800 border border-slate-700")}>
              {shownLocales.map((locale, localeIndex) => (
                <button
                  key={locale.id}
                  type="button"
                  onClick={() => setLightboxIndex(screenIndex * shownLocales.length + localeIndex)}
                  className="flex-1 min-w-0 cursor-zoom-in transition-transform duration-300 hover:-translate-y-1"
                  aria-label={`Enlarge screenshot: ${screen.title}, ${locale.label}`}
                >
                  <PhoneFrame>
                    <img
                      src={screen.images[locale.id]}
                      alt={`${appName} ${screen.title} screen on phone, ${locale.label}`}
                      width={width}
                      height={height}
                      loading="lazy"
                      className="w-full h-auto block"
                    />
                  </PhoneFrame>
                </button>
              ))}
            </div>
            <figcaption className="mt-3 text-center">
              <div className="text-sm font-semibold text-white">{screen.title}</div>
              <div className="text-xs text-slate-400">{screen.caption}</div>
            </figcaption>
          </figure>
        ))}
      </div>

      <Lightbox images={lightboxImages} index={lightboxIndex} onIndexChange={setLightboxIndex} />
    </div>
  );
};
