import {
  AppWindow,
  Database,
  DoorOpen,
  Languages,
  MailCheck,
  MonitorSmartphone,
  MoonStar,
  Package,
  ScrollText,
  ShieldCheck,
  UserPlus,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export interface Screenshot {
  src: string;
  title: string;
  caption: string;
}

export interface PhoneScreen {
  title: string;
  caption: string;
  /** One image per locale id, e.g. { en: "...", ar: "..." } */
  images: Record<string, string>;
}

export interface CaseStudy {
  slug: string;
  title: string;
  /** Short name used in frames and labels */
  shortTitle: string;
  category: string;
  period: string;
  role: string;
  tagline: string;
  overview: string[];
  highlights: string[];
  facts: { label: string; value: string }[];
  stats: { value: string; label: string }[];
  technologies: string[];
  cover: { desktop: string; phone: string };
  journey: { title: string; actor: string; description: string; icon: LucideIcon }[];
  features: { title: string; description: string; icon: LucideIcon }[];
  desktop: { width: number; height: number; screens: Screenshot[] };
  phone: {
    width: number;
    height: number;
    locales: { id: string; label: string }[];
    screens: PhoneScreen[];
  };
  architecture: {
    summary: string;
    columns: {
      title: string;
      subtitle: string;
      icon: LucideIcon;
      items: { name: string; detail: string }[];
    }[];
    /** Labels for the arrows between columns (columns.length - 1 entries) */
    connectors: string[];
    footnote: string;
  };
  lifecycle: { main: string[]; terminal: string[] };
  decisions: { title: string; decision: string; tradeoff: string }[];
  quality: string[];
}

const marhabaDesktop = (file: string) => asset(`projects/marhaba/desktop/${file}.webp`);
const marhabaPhone = (file: string) => ({
  en: asset(`projects/marhaba/mobile/en-${file}.webp`),
  ar: asset(`projects/marhaba/mobile/ar-${file}.webp`),
});

export const caseStudies: CaseStudy[] = [
  {
    slug: "marhaba-visitor-gate-pass-management",
    title: "Marhaba (مرحبا) – Visitor & Gate Pass Management",
    shortTitle: "Marhaba",
    category: "Power Platform",
    period: "2026",
    role: "Solution design & development",
    tagline:
      "A bilingual English / Arabic Power Apps canvas app that runs the whole visitor journey, from pre-registration and security approval to the gate pass and the reception desk.",
    overview: [
      "Marhaba covers the whole visitor journey in one app: a host pre-registers a visitor, security approves the visits that need it, the visitor receives a gate pass by email, and reception checks people in and out from a live \"who is on site\" desk.",
      "It is built only with standard connectors (SharePoint, Office 365 Outlook and Office 365 Users), so no premium licences are needed, and it is packaged as Power Platform solutions so it can be moved to another tenant.",
    ],
    highlights: [
      "Eight responsive screens for phone, tablet and desktop",
      "English ⇄ Arabic at runtime with full right-to-left layout",
      "Approval rules and every status change enforced in Power Automate",
      "Packaged as managed and unmanaged Power Platform solutions",
    ],
    facts: [
      { label: "Role", value: "Solution design & development" },
      { label: "Year", value: "2026" },
      { label: "Platform", value: "Microsoft Power Platform" },
      { label: "Licensing", value: "Standard connectors only" },
    ],
    stats: [
      { value: "8", label: "Responsive screens" },
      { value: "2", label: "Languages, full RTL" },
      { value: "4", label: "Power Automate flows" },
      { value: "6", label: "SharePoint lists" },
    ],
    technologies: [
      "Power Apps (Canvas)",
      "Power Fx",
      "Power Automate",
      "SharePoint Online",
      "Office 365 Outlook",
      "Office 365 Users",
      "Power Platform Solutions",
      "Test Studio",
      "PnP PowerShell",
      "Python build tooling",
    ],
    cover: {
      desktop: marhabaDesktop("01-home"),
      phone: marhabaPhone("01-home").ar,
    },
    journey: [
      {
        title: "Pre-register",
        actor: "Host",
        description:
          "A three-step wizard captures the visitor, the visit details and a review. The app previews whether the visit will need approval.",
        icon: UserPlus,
      },
      {
        title: "Approve",
        actor: "Security",
        description:
          "Contractors, restricted locations, after-hours visits and large groups are routed to security. Everything else is approved immediately.",
        icon: ShieldCheck,
      },
      {
        title: "Gate pass",
        actor: "Visitor",
        description:
          "The visitor receives a six-character pass code (MRH-XXXXXX) in a pass email written in the visitor's own language.",
        icon: MailCheck,
      },
      {
        title: "Check in & out",
        actor: "Reception",
        description:
          "Reception checks visitors in with a badge number and ID check, checks them out, and sees overstays. The host is notified on arrival.",
        icon: DoorOpen,
      },
      {
        title: "Close-out",
        actor: "Nightly job",
        description:
          "At 23:30 no-shows are closed, overstays are flagged and each reception desk gets a daily summary.",
        icon: MoonStar,
      },
    ],
    features: [
      {
        title: "One layout, three form factors",
        description:
          "Phone gets a bottom bar and a single column, tablet portrait an icon rail, and desktop a side navigation with master–detail.",
        icon: MonitorSmartphone,
      },
      {
        title: "Runtime language switch",
        description:
          "English ⇄ Arabic without restarting. Navigation, alignment, icons, dates and numbers mirror for RTL, and the choice is saved per user.",
        icon: Languages,
      },
      {
        title: "Rules enforced in the flow",
        description:
          "The app only previews the approval rule. The flow decides, validates each transition and refuses self-approval.",
        icon: ShieldCheck,
      },
      {
        title: "Audit trail",
        description:
          "Every state transition is written to an audit list by the flows, one row per change.",
        icon: ScrollText,
      },
      {
        title: "Role-aware navigation",
        description:
          "Everyone is a Host. Approver, Reception and Admin roles add their own screens and actions.",
        icon: Users,
      },
      {
        title: "Portable packaging",
        description:
          "The site and lists are bound to environment variables, so the solution imports into another environment without re-pointing anything in Studio.",
        icon: Package,
      },
    ],
    desktop: {
      width: 2172,
      height: 1218,
      screens: [
        {
          src: marhabaDesktop("01-home"),
          title: "Home",
          caption:
            "A role-aware dashboard: upcoming visits, requests awaiting approval, who is expected today and who is on site now, with quick actions on the side.",
        },
        {
          src: marhabaDesktop("02-new-visit"),
          title: "New visit",
          caption:
            "Step one of the three-step wizard. The visitor's language decides the language of the pass email they receive.",
        },
        {
          src: marhabaDesktop("03-my-visits"),
          title: "My visits",
          caption:
            "Upcoming, past and all visits with search and colour-coded status filters, laid out as master–detail on large screens.",
        },
        {
          src: marhabaDesktop("04-visit-pass"),
          title: "Visit pass",
          caption:
            "Selecting a visit opens its summary with the pass code, and the actions available to the host: open details, invite again or cancel.",
        },
        {
          src: marhabaDesktop("05-approvals"),
          title: "Approvals",
          caption:
            "Oldest requests first, each stating why it needs approval. Approve and Reject are disabled on your own visits, so another approver must decide.",
        },
        {
          src: marhabaDesktop("06-reception"),
          title: "Reception desk",
          caption:
            "Per-location desk with search by pass code or name, walk-ins, and tabs for expected, on site and left today. Overstays are highlighted.",
        },
        {
          src: marhabaDesktop("07-insights"),
          title: "Insights",
          caption:
            "Visits per day, average time on site, no-shows and breakdowns by visit type and location over 7, 30 or 90 days.",
        },
        {
          src: marhabaDesktop("08-settings"),
          title: "Settings & admin",
          caption:
            "Language, locations, user roles and app settings: working hours, the largest group approved automatically, time zone and email test mode.",
        },
      ],
    },
    phone: {
      width: 668,
      height: 1448,
      locales: [
        { id: "en", label: "English" },
        { id: "ar", label: "العربية" },
      ],
      screens: [
        { title: "Home", caption: "Counters and quick actions", images: marhabaPhone("01-home") },
        { title: "New visit · Visitor", caption: "Wizard step 1", images: marhabaPhone("02-new-visit-visitor") },
        { title: "New visit · Details", caption: "Wizard step 2", images: marhabaPhone("03-new-visit-details") },
        { title: "My visits", caption: "Search and status filters", images: marhabaPhone("04-my-visits") },
        { title: "Visit pass", caption: "Pass card and host actions", images: marhabaPhone("05-visit-details-pass") },
        { title: "Approvals", caption: "Reason for each request", images: marhabaPhone("06-approvals") },
        { title: "Reception desk", caption: "On site with overstay flag", images: marhabaPhone("07-reception") },
        { title: "Insights", caption: "KPIs and visits per day", images: marhabaPhone("08-insights") },
        { title: "Settings", caption: "Language and admin", images: marhabaPhone("09-settings") },
      ],
    },
    architecture: {
      summary:
        "The app never changes a visit's status directly. It saves a draft and calls a flow; the flow validates the transition, applies the rules, updates the item with an ETag check, writes the audit row, sends the emails and returns the result to the app.",
      columns: [
        {
          title: "Canvas app",
          subtitle: "Power Apps · Power Fx",
          icon: AppWindow,
          items: [
            { name: "8 screens", detail: "Responsive, English and Arabic" },
            { name: "Reads lists", detail: "Saves drafts and user preferences" },
            { name: "Calls flows", detail: "Submit and every decision" },
          ],
        },
        {
          title: "Cloud flows",
          subtitle: "Power Automate",
          icon: Workflow,
          items: [
            { name: "F1 Submit Visit Request", detail: "Applies approval rules, issues the pass" },
            { name: "F2 Process Decision", detail: "Approve, reject, cancel, check in, check out" },
            { name: "F3 Notify Host On Arrival", detail: "Triggered when a visit is checked in" },
            { name: "F4 Daily Close-out", detail: "23:30 · no-shows, overstays, summary" },
          ],
        },
        {
          title: "SharePoint lists",
          subtitle: "SharePoint Online",
          icon: Database,
          items: [
            { name: "MRH_Visits", detail: "Visit requests and gate passes" },
            { name: "MRH_Locations", detail: "Sites and reception desks" },
            { name: "MRH_UserRoles", detail: "Approver, Reception, Admin" },
            { name: "MRH_Settings", detail: "Key/value app settings" },
            { name: "MRH_AuditLog", detail: "One row per state transition" },
            { name: "MRH_UserPrefs", detail: "Per-user language" },
          ],
        },
      ],
      connectors: ["Run()", "Read / write"],
      footnote:
        "The flows send Outlook emails to the visitor, the host, the approvers and reception.",
    },
    lifecycle: {
      main: ["Draft", "Pending approval", "Approved", "Checked in", "Checked out"],
      terminal: ["Rejected", "Cancelled", "No-show"],
    },
    decisions: [
      {
        title: "In-app string records instead of a translation list",
        decision:
          "All ~345 strings per language live in two records in App.Formulas, and every label reads from them. Switching language is instant and costs no delegation or load time.",
        tradeoff:
          "A wording change needs a new app version, and translators cannot edit a list.",
      },
      {
        title: "Text columns instead of Person columns",
        decision:
          "Host, approver and reception identities are stored as lower-case email plus display name. Text columns are delegable and indexable, filter cleanly from Power Fx and flow OData, and survive a move to another tenant.",
        tradeoff:
          "No people-picker card or presence in SharePoint views, and a renamed mailbox is not followed automatically.",
      },
      {
        title: "Rules evaluated in the flow, not in the app",
        decision:
          "The app shows a preview of whether a visit needs approval, but the flows make the decision and validate every transition. A client can be bypassed; a flow that reads the caller from the authenticated trigger cannot be told who is calling.",
        tradeoff:
          "Each action waits for one flow run, and the rule exists in two places (one authoritative, one a hint) that must be kept in step.",
      },
    ],
    quality: [
      "Two Test Studio suites inside the app, 7 of 7 cases passing: localisation and RTL helpers, the approval rule hint, role-aware navigation, wizard validation and three end-to-end flow scenarios.",
      "Flows F1–F4 exercised on real runs, including invalid transitions and self-approval attempts.",
      "App checker: no formula errors, no delegation warnings and no accessibility errors.",
      "Checked by hand in English and Arabic on desktop, tablet portrait and phone.",
    ],
  },
];

export const getCaseStudy = (slug: string | undefined) =>
  caseStudies.find((study) => study.slug === slug);
