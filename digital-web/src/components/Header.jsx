import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, CircleStar, Monitor, BotMessageSquare } from "lucide-react";
import {
    ArrowRight,
    Search,
    Code2,
    Star,
    PhoneMissed,
    Facebook,
    Chrome,
    Music2,
    Bot,
    Workflow,
    MessageCircle,
    Zap,
    Phone,
} from "lucide-react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();
    let timeoutId = null;

    const navItems = [
        { label: "Home", to: "/" },
        { label: "About Us", to: "/about-us" },
        { label: "Our Services", to: "/services", hasDropdown: true },
        { label: "Our Work", to: "/work" },
        { label: "Contact Us", to: "/contact" },
        // { label: "Blog", to: "/blog" },
    ];

    const mobilenav = [
        { label: "Home", to: "/" },
        { label: "About Us", to: "/about-us" },
        { label: "Our Services", to: "/services" },
        { label: "Our Work", to: "/work" },
        { label: "Contact Us", to: "/contact" },

    ]

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
        setIsServicesOpen(false);
    }, [isMenuOpen, location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300
    ${scrolled
                    ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 shadow-lg"
                    : "bg-[#0a0a0a] backdrop-blur-md  border-b border-transparent"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="/assets/skyliftlogo.png"
                            alt="Sky Lift Group"
                            className={`w-44 object-contain transition-all duration-300
    ${scrolled ? "opacity-100" : "opacity-90"}
  `}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map(({ label, to, hasDropdown }) =>
                            hasDropdown ? (
                                <div
                                    key={label}
                                    className="relative group"
                                    onMouseEnter={() => {
                                        clearTimeout(timeoutId);
                                        setIsServicesOpen(true);
                                    }}
                                    onMouseLeave={() => {
                                        timeoutId = setTimeout(() => setIsServicesOpen(false), 200);
                                    }}
                                >
                                    <Link
                                        to={to}
                                        // className="text-sm font-medium text-gray-700 hover:text-[#00A693] transition-colors flex items-center gap-1"
                                        className={`text-sm font-medium transition-colors items-center gap-1 flex ${location.pathname.startsWith("/services")
                                            ? "text-[#00A693]"
                                            : "text-gray-300 hover:text-[#00A693]"
                                            }`}
                                    >
                                        {label} <ChevronDown className="w-4 h-4" />
                                    </Link>

                                    {isServicesOpen && (
                                        <div
                                            className="absolute left-1/2 top-full mt-6 w-[900px] -translate-x-1/2 rounded-2xl
               bg-[#0a0a0a] border border-white/10 shadow-2xl p-8 z-50"
                                            onMouseEnter={() => setIsServicesOpen(true)}
                                            onMouseLeave={() => setIsServicesOpen(false)}
                                        >
                                            <div className="grid grid-cols-3 gap-10">

                                                {/* MARKETING SERVICES */}
                                                <div className="border-r border-white/10">
                                                    <h4 className="text-xs font-semibold text-sky-400 mb-5 tracking-wider flex items-center gap-2">
                                                        <CircleStar className="w-5 h-5" /> MARKETING SERVICES
                                                    </h4>

                                                    <ul className="space-y-4">
                                                        <MegaItem icon={<Facebook />} label="Meta Ads" to="/services/meta-ads" />
                                                        <MegaItem icon={<Music2 />} label="TikTok Ads" to="/services/tiktok-ads" />
                                                        <MegaItem icon={<Search />} label="SEO" to="/services/seo" />
                                                        <MegaItem icon={<Chrome />} label="Google Ads" to="/services/google-ads" />
                                                    </ul>
                                                </div>

                                                {/* MARKETING SYSTEMS */}
                                                <div className="border-r border-white/10 mr-2">
                                                    <h4 className="text-xs font-semibold text-emerald-400 mb-5 tracking-wider flex items-center gap-2">
                                                        <Monitor className="h-5 w-5" /> MARKETING SYSTEMS
                                                    </h4>

                                                    <ul className="space-y-4">
                                                        <MegaItem icon={<Code2 />} label="Functional Website" to="/services/web-design" />
                                                        <MegaItem icon={<Star />} label="5-Star Reviews" to="/services/reviews" />
                                                        <MegaItem icon={<PhoneMissed />} label="Missed Call Text Back" to="/services/missed-call-text-back" />
                                                        <MegaItem icon={<MessageCircle />} label="Automated Lead Follow-Up" to="/services/lead-follow-up" />
                                                        <MegaItem icon={<Zap />} label="One-Click Marketing Campaigns" to="/services/one-click-campaigns" />
                                                    </ul>
                                                </div>

                                                {/* AI WORKFLOWS */}
                                                <div className="flex flex-col justify-between">
                                                    <div>
                                                        <h4 className="text-xs font-semibold text-purple-400 mb-5 tracking-wider flex items-center gap-2">
                                                            <BotMessageSquare className="h-5 w-5" /> AI WORKFLOWS
                                                        </h4>

                                                        <ul className="space-y-4">
                                                            <MegaItem icon={<Workflow />} label="AI Workflow Automations" to="/services/ai-workflows" />
                                                            <MegaItem icon={<Bot />} label="AI Voice Agents" to="/services/ai-voice-agents" />
                                                            <MegaItem icon={<Bot />} label="AI Chatbots" to="/services/ai-chatbots" />
                                                        </ul>
                                                    </div>

                                                    <Link
                                                        to="/services"
                                                        className="mt-8 inline-flex items-center justify-center gap-2
                     rounded-xl border border-[#00A693] text-[#00A693] px-6 py-3
                    transition"
                                                    >
                                                        All Services <ArrowRight className="h-4 w-4" />
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                    )}

                                </div>
                            ) : (
                                <Link
                                    key={label}
                                    to={to}
                                    className={`text-sm font-medium transition-colors ${location.pathname === to
                                        ? "text-[#00A693]"
                                        : "text-gray-300 hover:text-[#00A693]"
                                        }`}
                                >
                                    {label}
                                </Link>
                            )
                        )}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-5">

                        <Link
                            to="/book"
                            className="
                            bg-[#00A693]
                            text-white
                            px-4 py-2
                            rounded-lg
                            text-sm
                            font-medium
                            hover:bg-[#00947F]
                            transition
                            shadow-sm
                        "
                        >
                            Get Started
                        </Link>

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-300 hover:text-[#00A693] transition"
                    >
                        {isMenuOpen ? (
                            <X className="h-7 w-7 transition-transform duration-300 rotate-180 cursor-pointer" />
                        ) : (
                            <Menu className="h-7 w-7 transition-transform duration-300 cursor-pointer" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden fixed top-0 left-0 h-screen w-full bg-white z-50 transform transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="flex items-center justify-between p-2 border-b">
                        <img src="/assets/sky-lift-logo.png" className="w-32 h-[32] object-contain" />
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-red-500 hover:text-[#00A693] transition cursor-pointer"
                        >
                            <X className="h-7 w-7" />
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-4 p-6 text-lg overflow-y-auto h-[calc(100vh-80px)]">
                        {mobilenav.map(({ label, to }) => (
                            <div key={label} className="relative">
                                <Link
                                    to={to}
                                    onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
                                    className={`font-medium ${location.pathname === to ? "text-[#00A693]" : "text-gray-700"}`}
                                >
                                    {label}
                                </Link>
                            </div>
                        ))}

                        <Link
                            to="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="bg-[#00A693] text-white px-4 py-3 rounded-lg text-center text-base font-medium hover:bg-[#00947F] transition shadow-sm mt-4"
                        >
                            I’m Ready
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};



const MegaItem = ({ icon, label, to }) => (
    <li>
        <Link
            to={to}
            className="flex items-center gap-3 text-sm text-gray-300
                 hover:text-white transition group"
        >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg
                       bg-white/5 border border-white/10
                       group-hover:border-[#00A693]/50">
                {icon}
            </span>
            {label}
        </Link>
    </li>
);
