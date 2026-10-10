import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxImage {
  src: string;
  title: string;
  caption?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  /** Index of the open image, or null when closed */
  index: number | null;
  onIndexChange: (index: number | null) => void;
}

export const Lightbox = ({ images, index, onIndexChange }: LightboxProps) => {
  const current = index === null ? undefined : images[index];

  const step = (delta: number) => {
    if (index === null) return;
    onIndexChange((index + delta + images.length) % images.length);
  };

  const arrowButton =
    "absolute top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800/90 border border-slate-600 text-white flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-colors";

  return (
    <DialogPrimitive.Root open={!!current} onOpenChange={(open) => !open && onIndexChange(null)}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-slate-950/95" />
        <DialogPrimitive.Content
          className="fixed inset-0 z-[60] flex flex-col outline-none"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") step(1);
            if (event.key === "ArrowLeft") step(-1);
          }}
        >
          {current && (
            <>
              <div className="flex items-center justify-between gap-4 px-4 md:px-6 h-14 flex-shrink-0">
                <div className="flex items-baseline gap-3 min-w-0">
                  <DialogPrimitive.Title className="text-white font-semibold truncate">
                    {current.title}
                  </DialogPrimitive.Title>
                  <span className="text-slate-400 text-sm whitespace-nowrap">
                    {index! + 1} / {images.length}
                  </span>
                </div>
                <DialogPrimitive.Close
                  className="w-10 h-10 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X size={22} />
                </DialogPrimitive.Close>
              </div>

              <div
                className="relative flex-1 min-h-0 flex items-center justify-center px-4 md:px-20"
                onClick={(event) => event.target === event.currentTarget && onIndexChange(null)}
              >
                <img
                  src={current.src}
                  alt={current.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
                {images.length > 1 && (
                  <>
                    <button type="button" onClick={() => step(-1)} className={`${arrowButton} left-2 md:left-5`} aria-label="Previous screenshot">
                      <ChevronLeft size={24} />
                    </button>
                    <button type="button" onClick={() => step(1)} className={`${arrowButton} right-2 md:right-5`} aria-label="Next screenshot">
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              <DialogPrimitive.Description className="px-4 md:px-6 py-4 text-center text-sm text-slate-300 max-w-3xl mx-auto min-h-[3.5rem] flex-shrink-0">
                {current.caption}
              </DialogPrimitive.Description>
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
