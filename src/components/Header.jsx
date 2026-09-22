import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    ArrowRight, Bot, BotMessageSquare, ChevronDown, Chrome, CircleStar, Code2,
    Database, Facebook, Globe, Hammer, Menu, MessageCircle, MessageSquare,
    Monitor, Music2, PenLine, PhoneMissed, Search, Star, Users, Workflow, X, Zap,
} from "lucide-react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();
    let timeoutId = null;

    const navItems = [
        { label: "Home", to: "/" },
        { label: "About Us", to: "/about-us" },
        { label: "Our Services", to: "/services", hasDropdown: true },
        { label: "Our Work", to: "/work" },
        { label: "Blog", to: "/blog" },
        { label: "Contact Us", to: "/contact" },
    ];

    // Every service link in the mega menu, so the mobile drawer reaches the
    // same pages. Ten of these have no other link anywhere on the site.
    const serviceGroups = [
        {
            key: "marketing",
            label: "Marketing Services",
            icon: <CircleStar className="h-4 w-4" aria-hidden="true" />,
            items: [
                { icon: <Chrome />, label: "Google Ads", to: "/services/google-ads" },
                { icon: <Facebook />, label: "Meta Ads", to: "/services/meta-ads" },
                { icon: <Music2 />, label: "TikTok Ads", to: "/services/tiktok-ads" },
                { icon: <Zap />, label: "PPC Management", to: "/services/ppc-management" },
                { icon: <Search />, label: "SEO", to: "/services/seo" },
                { icon: <Globe />, label: "Google Business Profile", to: "/services/local-maps" },
                { icon: <Users />, label: "Social Media", to: "/services/social-media" },
                { icon: <PenLine />, label: "Content Writing", to: "/services/content-writing" },
            ],
        },
        {
            key: "systems",
            label: "Marketing Systems",
            icon: <Monitor className="h-4 w-4" aria-hidden="true" />,
            items: [
                { icon: <Code2 />, label: "Functional Website", to: "/services/web-design" },
                { icon: <Star />, label: "5-Star Reviews", to: "/services/reviews" },
                { icon: <MessageSquare />, label: "SMS & Text Marketing", to: "/services/sms-marketing" },
                { icon: <Database />, label: "Database Reactivation", to: "/services/database-reactivation" },
                { icon: <PhoneMissed />, label: "Missed Call Text Back", to: "/services/missed-call-text-back" },
                { icon: <MessageCircle />, label: "Automated Lead Follow-Up", to: "/services/lead-follow-up" },
                { icon: <Zap />, label: "One-Click Marketing Campaigns", to: "/services/one-click-campaigns" },
            ],
        },
        {
            key: "ai",
            label: "AI Workflows",
            icon: <BotMessageSquare className="h-4 w-4" aria-hidden="true" />,
            items: [
                { icon: <Workflow />, label: "AI Workflow Automations", to: "/services/ai-workflows" },
                { icon: <Bot />, label: "AI Voice Agents", to: "/services/ai-voice-agents" },
                { icon: <Bot />, label: "AI Chatbots", to: "/services/ai-chatbots" },
            ],
        },
    ];

    const tools = [
        {
            to: "/tools/missed-call-calculator",
            title: "Free: Missed Call Calculator",
            blurb: "What unanswered calls cost you",
        },
        {
            to: "/tools/sms-compliance-checklist",
            title: "Free: Texting Compliance Checklist",
            blurb: "A2P 10DLC, consent and opt-outs",
        },
    ];

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
        setIsServicesOpen(false);
    }, [isMenuOpen, location.pathname]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (to) =>
        to === "/services" ? location.pathname.startsWith("/services") : location.pathname === to;

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
                scrolled
                    ? "border-b border-white/10 bg-[#0B1220]/85 backdrop-blur-xl"
                    : "border-b border-transparent bg-[#0B1220]"
            }`}
        >
            <div className="slg-container">
                <div className="flex h-[72px] items-center justify-between gap-6">
                    <Link to="/" className="flex shrink-0 items-center" aria-label="Sky Lift Group home">
                        <img
                            src="/assets/skyliftlogo.webp"
                            alt="Sky Lift Group"
                            className="w-[150px] object-contain"
                            width={612}
                            height={408}
                            decoding="async"
                        />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
                        {navItems.map(({ label, to, hasDropdown }) =>
                            hasDropdown ? (
                                <div
                                    key={label}
                                    className="relative"
                                    onMouseEnter={() => {
                                        clearTimeout(timeoutId);
                                        setIsServicesOpen(true);
                                    }}
                                    onMouseLeave={() => {
                                        timeoutId = setTimeout(() => setIsServicesOpen(false), 180);
                                    }}
                                >
                                    <Link
                                        to={to}
                                        className={`flex items-center gap-1 rounded-lg px-3 py-2 text-[0.9375rem] font-medium transition-colors ${
                                            isActive(to)
                                                ? "text-[#26A6AD]"
                                                : "text-slate-300 hover:text-white"
                                        }`}
                                    >
                                        {label}
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-200 ${
                                                isServicesOpen ? "rotate-180" : ""
                                            }`}
                                            aria-hidden="true"
                                        />
                                    </Link>

                                    {/* Always in the DOM, shown and hidden with CSS.
                                        Unmounting it meant these were the only links to ten of
                                        the service pages and none of them existed in the HTML a
                                        crawler sees — which is why Search Console listed those
                                        pages as "Discovered - currently not indexed". Rendered
                                        always, every page links to every service. */}
                                    <div
                                        className={`absolute left-1/2 top-full w-[920px] max-w-[calc(100vw-48px)] -translate-x-1/2 pt-4 transition-opacity duration-200 ${
                                            isServicesOpen
                                                ? "visible opacity-100"
                                                : "pointer-events-none invisible opacity-0"
                                        }`}
                                        onMouseEnter={() => setIsServicesOpen(true)}
                                        onMouseLeave={() => setIsServicesOpen(false)}
                                    >
                                        <div className="rounded-[16px] border border-white/10 bg-[#0B1220] p-8 shadow-2xl shadow-black/60">
                                            <div className="grid grid-cols-3 gap-8">
                                                {serviceGroups.map((group, gi) => (
                                                    <div
                                                        key={group.key}
                                                        className={gi < 2 ? "border-r border-white/10 pr-8" : "flex flex-col justify-between"}
                                                    >
                                                        <div>
                                                            <h4 className="mb-5 flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-[#26A6AD]">
                                                                {group.icon} {group.label}
                                                            </h4>
                                                            <ul className="space-y-1">
                                                                {group.items.map((item) => (
                                                                    <MegaItem key={item.to} {...item} />
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        {gi === 2 && (
                                                            <div className="mt-8 space-y-2">
                                                                {tools.map((tool) => (
                                                                    <Link
                                                                        key={tool.to}
                                                                        to={tool.to}
                                                                        className="block rounded-[12px] border border-white/10 px-4 py-3 transition-colors hover:border-[#26A6AD]/50"
                                                                    >
                                                                        <span className="block text-[0.875rem] font-semibold text-white">
                                                                            {tool.title}
                                                                        </span>
                                                                        <span className="mt-0.5 block text-xs text-slate-400">
                                                                            {tool.blurb}
                                                                        </span>
                                                                    </Link>
                                                                ))}
                                                                <Link
                                                                    to="/services"
                                                                    className="inline-flex w-full items-center justify-center gap-2 rounded-[12px] border border-[#26A6AD]/60 px-6 py-3 text-sm font-semibold text-[#26A6AD] transition-colors hover:bg-[#26A6AD]/10"
                                                                >
                                                                    All Services
                                                                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                                                </Link>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={label}
                                    to={to}
                                    className={`rounded-lg px-3 py-2 text-[0.9375rem] font-medium transition-colors ${
                                        isActive(to) ? "text-[#26A6AD]" : "text-slate-300 hover:text-white"
                                    }`}
                                >
                                    {label}
                                </Link>
                            )
                        )}
                    </nav>

                    <div className="hidden shrink-0 lg:block">
                        <Link to="/book" className="btn btn-primary px-6 py-3 text-[0.9375rem]">
                            Book a Free Call
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open menu"
                        aria-expanded={isMenuOpen}
                        className="rounded-lg p-2 text-slate-300 transition-colors hover:text-white lg:hidden"
                    >
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </div>

            {/* Mobile drawer. Always rendered and slid off-canvas rather than
                unmounted, for the same crawlability reason as the mega menu. */}
            <div
                className={`fixed inset-0 z-50 bg-[#0B1220] transition-transform duration-300 lg:hidden ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-6">
                    <img
                        src="/assets/skyliftlogo.webp"
                        alt="Sky Lift Group"
                        className="w-[140px] object-contain"
                        width={612}
                        height={408}
                        decoding="async"
                    />
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                        className="rounded-lg p-2 text-slate-300 transition-colors hover:text-white"
                    >
                        <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <nav
                    className="h-[calc(100vh-72px)] overflow-y-auto px-6 py-6"
                    aria-label="Mobile"
                >
                    <ul className="space-y-1">
                        {navItems.map(({ label, to, hasDropdown }) => (
                            <li key={label}>
                                {hasDropdown ? (
                                    <>
                                        <div className="flex items-center justify-between">
                                            <Link
                                                to={to}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={`block py-3 font-display text-lg font-bold ${
                                                    isActive(to) ? "text-[#26A6AD]" : "text-white"
                                                }`}
                                            >
                                                {label}
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => setMobileServicesOpen((v) => !v)}
                                                aria-expanded={mobileServicesOpen}
                                                aria-label="Show all services"
                                                className="rounded-lg p-2 text-[#26A6AD]"
                                            >
                                                <ChevronDown
                                                    className={`h-5 w-5 transition-transform duration-200 ${
                                                        mobileServicesOpen ? "rotate-180" : ""
                                                    }`}
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                        {/* Collapsed with grid-template-rows, never unmounted, so
                                            all sixteen service links stay in the HTML. */}
                                        <div
                                            className="grid transition-[grid-template-rows] duration-300"
                                            style={{ gridTemplateRows: mobileServicesOpen ? "1fr" : "0fr" }}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="space-y-5 border-l border-white/10 pb-4 pl-4">
                                                    {serviceGroups.map((group) => (
                                                        <div key={group.key}>
                                                            <h4 className="mb-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-[#26A6AD]">
                                                                {group.label}
                                                            </h4>
                                                            <ul className="space-y-1">
                                                                {group.items.map((item) => (
                                                                    <li key={item.to}>
                                                                        <Link
                                                                            to={item.to}
                                                                            onClick={() => setIsMenuOpen(false)}
                                                                            className="block py-1.5 text-[0.9375rem] text-slate-300"
                                                                        >
                                                                            {item.label}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                    <div>
                                                        <h4 className="mb-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-[#26A6AD]">
                                                            Free Tools
                                                        </h4>
                                                        <ul className="space-y-1">
                                                            {tools.map((tool) => (
                                                                <li key={tool.to}>
                                                                    <Link
                                                                        to={tool.to}
                                                                        onClick={() => setIsMenuOpen(false)}
                                                                        className="block py-1.5 text-[0.9375rem] text-slate-300"
                                                                    >
                                                                        {tool.title}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        to={to}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block py-3 font-display text-lg font-bold ${
                                            isActive(to) ? "text-[#26A6AD]" : "text-white"
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    <Link
                        to="/book"
                        onClick={() => setIsMenuOpen(false)}
                        className="btn btn-primary mt-8 w-full"
                    >
                        Book a Free Call
                    </Link>
                </nav>
            </div>
        </header>
    );
};

const MegaItem = ({ icon, label, to }) => (
    <li>
        <Link
            to={to}
            className="group flex items-center gap-3 rounded-[10px] px-2 py-2 text-[0.9375rem] text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
        >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#26A6AD] transition-colors group-hover:border-[#26A6AD]/50 [&>svg]:h-4 [&>svg]:w-4">
                {icon}
            </span>
            {label}
        </Link>
    </li>
);
