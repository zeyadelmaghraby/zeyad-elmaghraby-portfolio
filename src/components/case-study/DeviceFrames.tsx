import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FrameProps {
  children: ReactNode;
  className?: string;
}

export const BrowserFrame = ({ title, children, className }: FrameProps & { title?: string }) => (
  <div className={cn("rounded-xl overflow-hidden border border-slate-600 bg-slate-950 shadow-2xl shadow-black/40", className)}>
    <div className="flex items-center gap-1.5 px-4 h-8 bg-slate-800 border-b border-slate-700">
      <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
      {title && <span className="ml-3 text-xs text-slate-400 truncate">{title}</span>}
    </div>
    {children}
  </div>
);

export const PhoneFrame = ({ children, className }: FrameProps) => (
  <div className={cn("rounded-[1.5rem] overflow-hidden border-[5px] border-slate-950 ring-1 ring-slate-600 bg-slate-950 shadow-2xl shadow-black/40", className)}>
    {children}
  </div>
);

interface DeviceComboProps {
  desktop: string;
  phone: string;
  alt: string;
  className?: string;
}

/** Desktop screenshot with a phone screenshot overlapping its corner. */
export const DeviceCombo = ({ desktop, phone, alt, className }: DeviceComboProps) => (
  <div className={cn("relative pb-8 pr-4 sm:pr-6", className)}>
    <BrowserFrame>
      <img src={desktop} alt={`${alt} on desktop`} className="w-full h-auto block" />
    </BrowserFrame>
    <PhoneFrame className="absolute bottom-0 right-0 w-[24%] rounded-[1rem] sm:rounded-[1.25rem] border-[3px] sm:border-4">
      <img src={phone} alt={`${alt} on phone`} className="w-full h-auto block" />
    </PhoneFrame>
  </div>
);
